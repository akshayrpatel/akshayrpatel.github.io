import { FC } from "react";
import { ChatMessage, JarvisResponse, MessageSenderType } from "@/types/jarvis";
import {
	welcomeMessages,
	unavailableMessages,
	getRandomMessage,
} from "@/data/jarvis";

import ChatOptionIcon from "./ui/ChatOptionIcon";
import ChatModal from "./ui/ChatModal";
import { askJarvis, checkJarvisHealth, createChatMessage } from "./helper/chat";
import { useJarvisState } from "./helper/useJarvisState";

const Jarvis: FC = () => {
	const {
		apiStatus,
		setApiStatus,

		isChatModalOpen,
		setIsChatModalOpen,

		isThinking,
		setIsThinking,

		showCloud,

		showQuestions,
		setShowQuestions,

		questions,
		setQuestions,

		memoji,

		userInput,
		setUserInput,

		sessionId,
		setSessionId,

		messages,
		setMessages,
	} = useJarvisState();

	const defaultQuestions = [
		"Can you tell me about Akshay's latest project?",
		"What are Akshay's key skills?",
		"Could you share Akshay's contact information?",
		"Tell me about Akshay's educational background.",
		"What's a fun fact about Akshay?",
	];
	const toggleModal = async () => {
		if (!isChatModalOpen) {
			const apiStatus = await checkJarvisHealth();
			setApiStatus(apiStatus);
			if (!apiStatus) {
				setMessages([
					{
						sender: MessageSenderType.BOT,
						content: getRandomMessage(unavailableMessages),
					},
				]);
			} else {
				setQuestions(defaultQuestions);
				setMessages([
					{
						sender: MessageSenderType.BOT,
						content: getRandomMessage(welcomeMessages),
					},
				]);
			}
		}
		setIsChatModalOpen(!isChatModalOpen);
	};

	const handleSendMessage = async (query?: string) => {
		const userQuery = query?.trim() ?? userInput.trim();
		if (!userQuery) {
			return;
		}

		const userMessage: ChatMessage = createChatMessage(
			MessageSenderType.USER,
			userQuery
		);

		setMessages((prev) => [...prev, userMessage]);
		setShowQuestions(false);
		setUserInput("");
		setIsThinking(true);

		const data: JarvisResponse = await askJarvis(userQuery, sessionId ?? "");
		if (data.session_id) setSessionId(data.session_id);
		else setApiStatus(false);

		if (data.followups && data.followups.length > 0) {
			setQuestions(data.followups);
			setShowQuestions(true);
		} else setShowQuestions(false);

		const botMessage: ChatMessage = createChatMessage(
			MessageSenderType.BOT,
			data.answer
		);
		setMessages((prev) => [...prev, botMessage]);
		setIsThinking(false);
	};

	return (
		<>
			{!isChatModalOpen && apiStatus && (
				<ChatOptionIcon
					toggleModal={toggleModal}
					memoji={memoji}
					showCloud={showCloud}
				/>
			)}
			{isChatModalOpen && (
				<ChatModal
					apiAvailable={apiStatus}
					memoji={memoji}
					isThinking={isThinking}
					toggleModal={toggleModal}
					showQuestions={showQuestions}
					setShowQuestions={setShowQuestions}
					questions={questions}
					userInput={userInput}
					setUserInput={setUserInput}
					messages={messages}
					handleSendMessage={handleSendMessage}
				/>
			)}
		</>
	);
};

export default Jarvis;
