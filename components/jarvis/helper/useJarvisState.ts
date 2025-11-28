import { useState, useEffect } from "react";
import { ChatMessage } from "@/types";
import { checkJarvisHealth } from "./chat";
import { getRandomMemoji, memojis, sadmemojis } from "@/data";

interface JarvisState {
	apiStatus: boolean;
	setApiStatus: React.Dispatch<React.SetStateAction<boolean>>;

	isChatModalOpen: boolean;
	setIsChatModalOpen: React.Dispatch<React.SetStateAction<boolean>>;

	isThinking: boolean;
	setIsThinking: React.Dispatch<React.SetStateAction<boolean>>;

	showCloud: boolean;
	setShowCloud: React.Dispatch<React.SetStateAction<boolean>>;

	showQuestions: boolean;
	setShowQuestions: React.Dispatch<React.SetStateAction<boolean>>;

	questions: string[];
	setQuestions: React.Dispatch<React.SetStateAction<string[]>>;

	memoji: string | null;
	setMemoji: React.Dispatch<React.SetStateAction<string | null>>;

	sessionId: string | null;
	setSessionId: React.Dispatch<React.SetStateAction<string | null>>;

	userInput: string;
	setUserInput: React.Dispatch<React.SetStateAction<string>>;

	messages: ChatMessage[];
	setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

export const useJarvisState = (): JarvisState => {
	const defaultQuestions = [
		"Can you tell me about Akshay's latest project?",
		"What are Akshay's key skills?",
		"Could you share Akshay's contact information?",
		"Tell me about Akshay's educational background.",
		"What's a fun fact about Akshay?",
	];
	const [apiStatus, setApiStatus] = useState(false);
	const [isChatModalOpen, setIsChatModalOpen] = useState(false);
	const [isThinking, setIsThinking] = useState(false);
	const [showCloud, setShowCloud] = useState<boolean>(false);
	const [showQuestions, setShowQuestions] = useState(false);
	const [questions, setQuestions] = useState<string[]>(defaultQuestions);
	const [memoji, setMemoji] = useState<string | null>(null);
	const [sessionId, setSessionId] = useState<string | null>(null);
	const [userInput, setUserInput] = useState("");
	const [messages, setMessages] = useState<ChatMessage[]>([]);

	/** Initial api health check on mount */
	useEffect(() => {
		const fetchHealth = async () => {
			const status = await checkJarvisHealth();
			setApiStatus(status);
			setMemoji(
				status ? getRandomMemoji(memojis) : getRandomMemoji(sadmemojis)
			);
			setShowCloud(status);
		};

		fetchHealth();
	}, []);

	/** Set intial state */
	useEffect(() => {
		if (apiStatus === null) return;
		setMemoji(
			apiStatus ? getRandomMemoji(memojis) : getRandomMemoji(sadmemojis)
		);
		setShowCloud(apiStatus);
		setShowQuestions(apiStatus);
	}, [apiStatus]);

	/** Show cloud on chat option icon */
	useEffect(() => {
		if (showCloud) {
			const timer = setTimeout(() => setShowCloud(false), 4000);
			return () => clearTimeout(timer);
		}
	}, [showCloud]);

	return {
		apiStatus,
		setApiStatus,

		isChatModalOpen,
		setIsChatModalOpen,

		isThinking,
		setIsThinking,

		showCloud,
		setShowCloud,

		showQuestions,
		setShowQuestions,

		questions,
		setQuestions,

		memoji,
		setMemoji,

		userInput,
		setUserInput,

		sessionId,
		setSessionId,

		messages,
		setMessages,
	};
};
