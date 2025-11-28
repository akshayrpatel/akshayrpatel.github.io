import React, { useRef, useEffect } from "react";
import { ChatMessage } from "@/types";
import ChatMessageBubble from "./ChatMessageBubble";

interface ChatMessagesProps {
	messages: ChatMessage[];
	isThinking?: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({
	messages,
	isThinking,
}) => {
	const TypingLoader = () => (
		<span className="flex items-center gap-1">
			thinking
			<span className="animate-bounce [animation-delay:0s]">.</span>
			<span className="animate-bounce [animation-delay:0.2s]">.</span>
			<span className="animate-bounce [animation-delay:0.4s]">.</span>
		</span>
	);
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages, isThinking]);

	return (
		<div className="flex-1 w-full px-4 py-2 mt-2 overflow-y-auto scrollbar-hide">
			{messages.map((msg, idx) => {
				return <ChatMessageBubble key={idx} message={msg} />;
			})}

			{isThinking && (
				<div className="flex mb-4 justify-start">
					<div className="max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl font-google text-sm md:text-base break-words shadow bg-gradient-to-br from-white to-white-500 text-gray-900 rounded-bl-sm whitespace-pre-line animate__animated animate__fadeIn">
						<TypingLoader />
					</div>
				</div>
			)}

			<div ref={messagesEndRef} />
		</div>
	);
};

export default ChatMessages;
