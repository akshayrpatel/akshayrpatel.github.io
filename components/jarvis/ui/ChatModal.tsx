import { ChatMessage } from "@/types";
import React from "react";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { MdOutlineClose } from "react-icons/md";

{
	/*bg-gradient-to-br from-gray-100 via-gray-50 to-neutral-200*/
}

interface ChatModalProps {
	apiAvailable: boolean;
	memoji: string | null;
	isThinking: boolean;

	toggleModal: () => void;

	showQuestions: boolean;
	setShowQuestions: (show: boolean) => void;

	userInput: string;
	setUserInput: (input: string) => void;

	questions: string[];
	// setQuestions: (questions: string[]) => void;

	messages: ChatMessage[];
	handleSendMessage: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({
	apiAvailable,
	memoji,
	isThinking,
	toggleModal,
	showQuestions,
	setShowQuestions,
	questions,
	userInput,
	setUserInput,
	messages,
	handleSendMessage,
}) => {
	return (
		<div className="flex items-center justify-center md:size-full size-screen fixed inset-0 z-50">
			{/* Blurred overlay */}
			<div
				className="block absolute w-full h-full inset-0 m-0 p-0 align-middle transition-all duration-200 bg-black bg-opacity-40 backdrop-blur-md"
				onClick={toggleModal}
			/>
			{/* Modal content */}
			<div className="flex flex-col relative w-full max-w-5xl h-[95%] md:h-[80%] mx-2 rounded-2xl shadow-2xl font-heading border border-neutral-300 bg-gray-100 animate__animated animate__fadeInUp animate__delay-0.5s">
				{/* Memoji at the top */}
				<ChatHeader apiAvailable={apiAvailable} memoji={memoji} />
				{/* Messages */}
				<ChatMessages messages={messages} isThinking={isThinking} />

				{/* Sample Questions + Input bar + send */}
				<ChatInput
					apiAvailable={apiAvailable}
					showQuestions={showQuestions}
					setShowQuestions={setShowQuestions}
					questions={questions}
					userInput={userInput}
					setUserInput={setUserInput}
					handleSendMessage={handleSendMessage}
				/>

				{/* Close button */}
				<button
					className="block absolute top-4 right-4 text-xl md:text-2xl font-bold text-neutral-400 hover:text-neutral-900"
					onClick={toggleModal}
					aria-label="Close chat"
				>
					<MdOutlineClose />
				</button>
			</div>
		</div>
	);
};

export default ChatModal;
