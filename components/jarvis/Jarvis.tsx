import { useState, useRef, useEffect, FC } from "react";
import { FiSend } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import { ChatMessage, MessageSenderType } from "@/types/jarvis";
import {
	getRandomMemoji,
	getRandomWelcomeMessage,
	memojis,
	sadmemojis,
	unavailableMessages,
	welcomeMessages,
} from "@/data/jarvis";

import { getJarvisImage, getJarvisWelcomeImage } from "../utils";
import MessageRenderer from "./MessageRenderer";

const Jarvis: FC = () => {
	const messagesEndRef = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [userInput, setUserInput] = useState("");

	const [showCloud, setShowCloud] = useState(true);
	const [randomMemoji, setRandomMemoji] = useState<string | null>(null);
	const [isTyping, setIsTyping] = useState(false);

	const [apiAvailable, setApiAvailable] = useState(false);

	useEffect(() => {
		if (!apiAvailable && isOpen) {
			setRandomMemoji(getRandomMemoji(sadmemojis));
		} else {
			setRandomMemoji(getRandomMemoji(memojis));
		}
	}, [isOpen, apiAvailable]);

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [messages]);

	useEffect(() => {
		setRandomMemoji(getRandomMemoji(memojis));
	}, []);

	useEffect(() => {
		if (showCloud) {
			const timer = setTimeout(() => setShowCloud(false), 4000);
			return () => clearTimeout(timer);
		}
	}, [showCloud]);

	const toggleModal = async () => {
		if (!isOpen) {
			const available = await checkLimit();
			setApiAvailable(available);
			if (!available) {
				setMessages([
					{
						sender: MessageSenderType.BOT,
						content: getRandomWelcomeMessage(unavailableMessages),
					},
				]);
			} else {
				setMessages([
					{
						sender: MessageSenderType.BOT,
						content: getRandomWelcomeMessage(welcomeMessages),
					},
				]);
			}
		}
		setIsOpen(!isOpen);
	};

	const checkLimit = async () => {
		try {
			const limit_api_url = process.env.NEXT_PUBLIC_JARVIS_API_URL_LIMIT || "";
			const res = await fetch(limit_api_url);
			const info = await res.json();
			if (info && info.limit !== null && info.usage >= info.limit) {
				return false;
			} else {
				return true;
			}
		} catch (e) {
			console.log("Failed to check api limie: ", e);
			return false;
		}
	};

	const createChatMessage = (
		sender: MessageSenderType,
		content: string
	): ChatMessage => {
		return {
			sender: sender,
			content: content,
		};
	};

	const handleSendMessage = async () => {
		if (!userInput.trim()) {
			return;
		}

		const userMessage = createChatMessage(MessageSenderType.USER, userInput);
		setMessages((prev) => [...prev, userMessage]);
		setUserInput("");
		setIsTyping(true);

		try {
			const chat_api_url = process.env.NEXT_PUBLIC_JARVIS_API_URL_CHAT || "";
			const response = await fetch(chat_api_url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					inputs: userInput,
				}),
			});

			if (!response.ok) {
				console.error("HTTP error:", response.status, await response.text());
				throw new Error("API call failed");
			}

			const data = await response.json();
			const botMessage = createChatMessage(MessageSenderType.BOT, data.message);

			setMessages((prev) => [...prev, botMessage]);
		} catch (error) {
			console.log("Jarvis failed to assist with your question: " + error);
			const errorMessage = createChatMessage(
				MessageSenderType.BOT,
				"Sorry! I'm currently not able to help with your questions right now!\n\n" +
					"I'm still getting to learn more things about Akshay and will be ready soon!"
			);
			setMessages((prev) => [...prev, errorMessage]);
		} finally {
			setIsTyping(false);
		}
	};

	const TypingLoader = () => (
		<span className="flex items-center gap-1">
			typing
			<span className="animate-bounce [animation-delay:0s]">.</span>
			<span className="animate-bounce [animation-delay:0.2s]">.</span>
			<span className="animate-bounce [animation-delay:0.4s]">.</span>
		</span>
	);

	return (
		<>
			{randomMemoji && (
				<div className="flex flex-col fixed bottom-1 right-0 items-end z-50 space-y-2 animate__animated animate__bounceInUp">
					<button
						className="relative flex items-center justify-center rounded-full font-heading animate-fadeIn"
						onClick={toggleModal}
						aria-label="Open chat"
					>
						{showCloud && (
							<span
								className="
                  absolute inline-block -top-2 md:-left-16 -left-10 items-end w-max max-w-xs md:px-4 md:py-2 p-1
                  rounded-2xl rounded-br-sm text-black 
                  shadow bg-gradient-to-br from-white/30 via-blue-100/30 to-purple-100/30
                  backdrop-blur-md border border-white/30
                  animate__animated animate__fadeIn animate__delay-2s"
							>
								<p className="md:text-sm text-xs">Chat with me!</p>
							</span>
						)}
						{!isOpen && randomMemoji && getJarvisWelcomeImage(randomMemoji)}
					</button>
				</div>
			)}

			{/* Modal */}
			{isOpen && (
				<div className="flex items-center justify-center md:size-full size-screen fixed inset-0 z-50">
					{/* Blurred overlay */}
					<div
						className="block absolute w-full h-full inset-0 m-0 p-0 align-middle transition-all duration-200 bg-black bg-opacity-40 backdrop-blur-md"
						onClick={toggleModal}
					/>
					{/* Modal content */}
					<div className="flex flex-col relative w-full max-w-5xl h-[95%] md:h-[80%] mx-2 rounded-2xl shadow-2xl font-heading border border-neutral-300 bg-gradient-to-br from-gray-100 via-gray-50 to-neutral-200 animate__animated animate__fadeInUp animate__delay-0.5s">
						{/* Memoji at the top */}
						<div className="flex flex-col w-full pt-1 items-center justify-center">
							{getJarvisImage(randomMemoji)}
						</div>
						<div className="flex items-center justify-center w-full">
							<span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">
								🚀 This chat is live but experimental - feedback welcome!
							</span>
						</div>

						{/* Messages */}
						<div className="flex-1 w-full px-4 py-2 mt-2 overflow-y-auto scrollbar-hide">
							{messages.map((msg, idx) => {
								const isUser = msg.sender === MessageSenderType.USER;
								return (
									<div
										key={idx}
										className={`flex mb-4 ${
											isUser ? "justify-end" : "justify-start"
										}`}
									>
										<div
											className={`
                        max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl font-google text-sm md:text-base break-words 
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
											<MessageRenderer content={msg.content} isUser={isUser} />
										</div>
									</div>
								);
							})}

							{isTyping && (
								<div className="flex mb-4 justify-start">
									<div className="max-w-[85%] md:max-w-[70%] px-4 py-2 rounded-2xl font-google text-sm md:text-base break-words shadow bg-gradient-to-br from-white to-white-500 text-gray-900 rounded-bl-sm whitespace-pre-line animate__animated animate__fadeIn">
										<TypingLoader />
									</div>
								</div>
							)}

							<div ref={messagesEndRef} />
						</div>
						{/* Input bar at the bottom */}
						<div className="flex w-full px-4 pb-6 gap-2">
							<input
								type="text"
								className={`flex-1 h-12 px-4 py-2 rounded-full font-heading text-base text-neutral-900
                bg-white border-2 border-gray-400 placeholder-gray-400 shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition
                disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-80 disabled:border-gray-300 disabled:shadow-none
                  `}
								value={userInput}
								onChange={(e) => setUserInput(e.target.value)}
								onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
								placeholder={
									apiAvailable ? "Ask me anything... 🧐" : "Be right back... 🔌"
								}
								disabled={!apiAvailable}
							/>

							<button
								className="flex items-center justify-center w-12 h-12 rounded-full font-heading 
                text-white bg-neutral-600 
                hover:bg-black focus:ring-1 focus:ring-neutral-400
                disabled:bg-neutral-600 disabled:text-white disabled:cursor-not-allowed"
								onClick={handleSendMessage}
								aria-label="Send message"
								disabled={!apiAvailable}
							>
								<FiSend size={22} />
							</button>
						</div>
						{/* Close button */}
						<button
							className="block absolute top-4 right-4 text-xl md:text-2xl font-bold text-neutral-400 hover:text-neutral-900"
							onClick={toggleModal}
							aria-label="Close chat"
						>
							<MdOutlineClose />
						</button>

						<span className="absolute top-4 left-4 flex items-center group cursor-pointer">
							<span className="relative flex size-4">
								<span
									className={`absolute inline-flex size-2 rounded-full 
                            ${
															apiAvailable
																? "bg-green-400 opacity-75 animate-ping [animation-duration:_4s]"
																: "bg-red-400 opacity-75 animate-ping [animation-duration:_4s]"
														}`}
								></span>
								<span
									className={`relative inline-flex size-2 rounded-full 
                            ${apiAvailable ? "bg-green-500" : "bg-red-500"}`}
								></span>
								<div className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex">
									<span
										className={`text-xs rounded px-1.5 py-0.5 shadow-lg whitespace-nowrap border
                    ${
											apiAvailable
												? "bg-green-100 text-green-800 border-green-200"
												: "bg-red-100 text-red-800 border-red-200"
										}`}
									>
										{apiAvailable ? "Online" : "Offline"}
									</span>
								</div>
							</span>
						</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Jarvis;
