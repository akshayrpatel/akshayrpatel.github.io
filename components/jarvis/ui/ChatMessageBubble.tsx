import { ChatMessage, MessageSenderType } from "@/types";
import React from "react";
import MessageRenderer from "./MessageRenderer";

interface ChatMessageBubbleProps {
	message: ChatMessage;
}

const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({ message }) => {
	const isUser = message.sender === MessageSenderType.USER;
	return (
		<div className={`flex mb-4 ${isUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl font-google text-sm md:text-base break-words 
                      ${
												isUser
													? "bg-gradient-to-br from-[#0a95ff] to-[#007AFF] text-white"
													: "bg-gradient-to-br from-white to-white-500 text-gray-900"
											}
                            ${isUser ? "rounded-br-sm" : "rounded-bl-sm"}
                            shadow-md whitespace-pre-line
                            animate__animated animate__fadeIn
                    `}
			>
				<MessageRenderer content={message.content} isUser={isUser} />
			</div>
		</div>
	);
};

export default ChatMessageBubble;
