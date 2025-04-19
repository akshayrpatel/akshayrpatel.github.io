import React, { useState, useRef, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import JarvisBrain from "./JarvisBrain";

enum MessageType {
	USER,
	BOT,
}

type ChatMessage = {
	type: MessageType;
	content: string;
};

const welcomeMessages: ChatMessage[] = [
	{
		type: MessageType.BOT,
		content:
			"Hi, I’m Jarvis - Akshay’s personal assistant!\n\n" +
			"I can help you answer any questions you might have about Akshay.\n\n" +
			"I wasn’t expecting visitors today, but hey, I’m glad you’re here! " +
			"As a matter of fact, I was catching up on some sleep, so give me just a moment to freshen up before we chat.",
	},
	{
		type: MessageType.BOT,
		content:
			"Hey! I’m Jarvis - Akshay’s personal assistant!\n\n" +
			"I can help you answer any questions you might have about Akshay.\n\n" +
			"To be honest, you caught me mid-nap! The servers are stretching their circuits right now, so hang tight for a sec while I wake things up.",
	},
	{
		type: MessageType.BOT,
		content:
			"Welcome! I’m Jarvis - Akshay’s personal assistant.\n\n" +
			"I can help you answer any questions you might have about Akshay.\n\n" +
			"I’m just waking up the systems to get things rolling, one moment and I’ll be right with you!",
	},
	{
		type: MessageType.BOT,
		content:
			"Hello! I’m Jarvis, Akshay’s trusty assistant.\n\n" +
			"Feel free to ask me anything about Akshay — I’m here to help!\n\n" +
			"I wasn’t expecting company today, but it’s always nice to have visitors. " +
			"Just give me a second to get ready, and we’ll dive right in!",
	},
	{
		type: MessageType.BOT,
		content:
			"Hey there! Jarvis at your service, Akshay’s personal helper.\n\n" +
			"Got questions about Akshay? I’ve got answers!\n\n" +
			"Surprise visits are the best kind — glad you stopped by. " +
			"Let me just stretch my circuits and then we can chat.",
	},
	{
		type: MessageType.BOT,
		content:
			"Greetings! I’m Jarvis, here to assist you with anything related to Akshay.\n\n" +
			"I wasn’t expecting visitors, but I’m happy you’re here. " +
			"Give me a moment to boot up fully, and then we can get started!",
	},
	{
		type: MessageType.BOT,
		content:
			"Hi! Jarvis here, Akshay’s personal assistant and all-around helper.\n\n" +
			"Ask me anything about Akshay — I’m ready to assist.\n\n" +
			"I was just taking a quick break, but now that you’re here, I’m all ears! " +
			"Hang tight for a moment while I get things set up.",
	},
	{
		type: MessageType.BOT,
		content:
			"Welcome! I’m Jarvis, your guide to all things Akshay.\n\n" +
			"I wasn’t expecting company, but I’m delighted you came. " +
			"Give me a moment to get everything ready, and then we’ll chat away!",
	},
];

const Jarvis = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [userInput, setUserInput] = useState("");
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const createChatMessage = (
		type: MessageType,
		content: string
	): ChatMessage => {
		return {
			type: type,
			content: content,
		};
	};

	const formatMessage = (text: string) => {
		const parts = text.split(/(Jarvis)/);

		return (
			<p>
				{parts.map((part, index) =>
					part.toLowerCase() === "jarvis" ? (
						<span
							key={index}
							className="uppercase font-extrabold tracking-wide bg-gradient-to-br from-purple-600 via-blue-500 to-blue-300 text-transparent bg-clip-text"
						>
							{part}
						</span>
					) : (
						<React.Fragment key={index}>{part}</React.Fragment>
					)
				)}
			</p>
		);
	};

	useEffect(() => {
		if (isOpen && messages.length === 0) {
			const idx = Math.floor(Math.random() * welcomeMessages.length);
			setMessages([welcomeMessages[idx]]);
		}
	}, [isOpen]);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	const toggleModal = () => setIsOpen(!isOpen);

	const handleSendMessage = async () => {
		if (userInput.trim()) {
			const userMessage = createChatMessage(MessageType.USER, userInput);
			setMessages((prev) => [...prev, userMessage]);
			const jarvis_api_url = process.env.NEXT_PUBLIC_JARVIS_API_URL || "";

			try {
				const response = await fetch(jarvis_api_url, {
					method: "POST",
					headers: {
						Authorization: `Bearer ` + process.env.NEXT_PUBLIC_AUTH_TOKEN,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						inputs: userInput,
						parameters: {
							max_new_tokens: 50,
						},
					}),
				});
				const data = await response.json();
				const botMessage = createChatMessage(MessageType.BOT, data.message);
				setMessages((prev) => [...prev, botMessage]);
			} catch (error) {
				console.log("Jarvis failed to assist with your question: " + error);
				const errorMessage = createChatMessage(
					MessageType.BOT,
					"Sorry! I'm currently not able to help with your questions right now!\n\n" +
						"I'm still getting to learn more things about Akshay and will be ready soon!"
				);
				setMessages((prev) => [...prev, errorMessage]);
			} finally {
				setUserInput("");
			}
		}
	};

	return (
		<>
			{/* Chat trigger button */}
			<button
				className="flex items-center justify-center w-14 h-14 mb-0 fixed bottom-4 right-4 md:bottom-12 md:right-12
          rounded-full shadow-lg font-heading z-50 animate__animated animate__bounceInDown animate__delay-2s"
				onClick={toggleModal}
				aria-label="Open chat"
			>
				{!isOpen && <JarvisBrain open={isOpen} />}
			</button>

			{/* Modal */}
			{isOpen && (
				<div className="flex items-center justify-center w-full h-full fixed inset-0 z-50">
					{/* Blurred overlay */}
					<div
						className="block absolute w-full h-full inset-0 m-0 p-0 align-middle transition-all duration-200 bg-black bg-opacity-40 backdrop-blur-md"
						onClick={toggleModal}
					/>
					{/* Modal content */}
					<div className="flex flex-col relative w-full max-w-5xl h-[90%] md:h-[70%] mx-4 rounded-2xl shadow-2xl font-heading border border-neutral-300 bg-gradient-to-br from-gray-100 via-gray-50 to-neutral-200 animate__animated animate__fadeInDown animate__delay-0.5s">
						{/* Jarvis Icon at the top */}
						<div className="flex flex-col w-full pt-10 py-6 items-center justify-center">
							<JarvisBrain open={isOpen} />
						</div>
						{/* Messages */}
						<div className="flex-1 w-full px-6 py-4 mt-2 overflow-y-auto">
							{messages.length === 0 && (
								<div className="block w-full text-center font-heading text-neutral-400">
									Start the conversation...
								</div>
							)}
							{messages.map((msg, idx) => {
								const isUser = msg.type === MessageType.USER;
								return (
									<div
										key={idx}
										className={`flex mb-2 ${
											isUser ? "justify-end" : "justify-start"
										}`}
									>
										<div
											className={`max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl font-code text-sm md:text-base break-words shadow
                        ${
													isUser
														? "bg-gradient-to-br from-white via-gray-100 to-gray-200 text-neutral-900"
														: "bg-gradient-to-br from-blue-100 via-blue-200 to-purple-100 text-indigo-900"
												}
                        ${
													isUser ? "rounded-br-sm" : "rounded-bl-sm"
												} whitespace-pre-line
                      `}
										>
											{formatMessage(msg.content)}
										</div>
									</div>
								);
							})}

							<div ref={messagesEndRef} />
						</div>
						{/* Input bar at the bottom */}
						<div className="flex w-full px-4 pb-6 gap-2">
							<input
								type="text"
								className="flex-1 h-12 px-4 py-2 rounded-full border border-neutral-300 font-heading text-base text-neutral-900 bg-white focus:outline-none focus:ring-1 focus:ring-neutral-400"
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
								placeholder="Type your message..."
							/>
							<button
								className="flex items-center justify-center w-12 h-12 rounded-full font-heading text-white bg-neutral-600 hover:bg-black focus:ring-1 focus:ring-neutral-400"
								onClick={handleSendMessage}
								aria-label="Send message"
							>
								<FiSend size={22} />
							</button>
						</div>
						{/* Close button */}
						<button
							className="block absolute top-4 right-4 text-2xl md:text-4xl font-bold text-neutral-400 hover:text-neutral-900"
							onClick={toggleModal}
							aria-label="Close chat"
						>
							<MdOutlineClose />
						</button>

						{/* Info label */}
						<div className="inline-block absolute top-4 left-4 px-3 py-1 text-xs rounded-lg font-bold italic bg-red-200 text-red-500 hover:text-red-900">
							Work in Progress
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Jarvis;
