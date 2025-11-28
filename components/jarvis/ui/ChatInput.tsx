import React from "react";
import { FiSend } from "react-icons/fi";
import { SampleQuestions } from "./SampleQuestions";

interface ChatInputProps {
	apiAvailable: boolean;

	showQuestions: boolean;
	setShowQuestions: (show: boolean) => void;

	questions: string[];

	userInput: string;
	setUserInput: (input: string) => void;

	handleSendMessage: () => void;
}
export const ChatInput: React.FC<ChatInputProps> = ({
	apiAvailable,
	showQuestions,
	setShowQuestions,
	questions,
	userInput,
	setUserInput,
	handleSendMessage,
}) => {
	return (
		<div className="relative w-full px-3 py-2 flex flex-col gap-2 border-t-2 border-gray-200">
			{apiAvailable && showQuestions && (
				<SampleQuestions
					setShowQuestions={setShowQuestions}
					sampleQuestions={questions}
					handleSendMessage={handleSendMessage}
				/>
			)}
			{/* {apiAvailable && !showQuestions && (
				<SampleQuestionsShowOption setShowSuggestions={setShowQuestions} />
			)} */}
			<div className="flex gap-2">
				<input
					type="text"
					className="flex-1 h-12 px-4 py-2 rounded-full font-heading text-base text-neutral-900
            bg-white border-2 border-gray-400 placeholder-gray-400 shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-600 transition
            disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed disabled:opacity-80 disabled:border-gray-300 disabled:shadow-none"
					value={userInput}
					maxLength={500}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
					placeholder={
						apiAvailable ? "Ask me anything... 🧐" : "Be right back... 🔌"
					}
					disabled={!apiAvailable}
				/>
				<button
					className="flex items-center justify-center w-12 h-12 rounded-full font-heading 
            text-white bg-neutral-600 hover:bg-black focus:ring-1 focus:ring-neutral-400
            disabled:bg-neutral-600 disabled:text-white disabled:cursor-not-allowed"
					onClick={() => handleSendMessage()}
					aria-label="Send message"
					disabled={!apiAvailable}
				>
					<FiSend size={22} />
				</button>
			</div>
		</div>
	);
};
