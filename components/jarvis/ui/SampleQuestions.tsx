import { RiArrowUpDoubleLine } from "react-icons/ri";

interface SampleQuestionsProps {
	setShowQuestions: (show: boolean) => void;

	sampleQuestions: string[];

	handleSendMessage: (question: string) => void;
}
export const SampleQuestions: React.FC<SampleQuestionsProps> = ({
	setShowQuestions,
	sampleQuestions,
	handleSendMessage,
}) => {
	return (
		<div className="flex gap-3 overflow-x-auto scrollbar-hide animate__animated animate__fadeInUp">
			{sampleQuestions.map((question, idx) => (
				<button
					key={idx}
					className="flex-shrink-0 px-3 py-3 my-1 rounded-full bg-blue-100 text-blue-800 text-sm md:text-base font-medium 
          shadow-md hover:bg-blue-200 transition-transform duration-300 whitespace-nowrap"
					onClick={() => {
						setShowQuestions(false);
						handleSendMessage(question);
					}}
				>
					{question}
				</button>
			))}
		</div>
	);
};

/******************************************************************/

interface SampleQuestionsShowOptionProps {
	setShowSuggestions: (show: boolean) => void;
}
export const SampleQuestionsShowOption: React.FC<
	SampleQuestionsShowOptionProps
> = ({ setShowSuggestions }) => {
	return (
		<div className="flex justify-center animate__animated animate__fadeInUp">
			<button
				className="flex items-center justify-center w-6 h-4 mt-1 text-neutral-600 hover:text-black hover:scale-110 focus:outline-none"
				onClick={() => setShowSuggestions(true)}
				aria-label="Show sample questions"
			>
				<RiArrowUpDoubleLine size={26} />
			</button>
			<span
				className="text-neutral-600 font-medium cursor-pointer hover:text-black hover:scale-20"
				onClick={() => setShowSuggestions(true)}
			>
				{"Show Sample Questions"}
			</span>
			<button
				className="flex items-center justify-center w-6 h-4 mt-1 text-neutral-600 hover:text-black hover:scale-110 focus:outline-none"
				onClick={() => setShowSuggestions(true)}
				aria-label="Show sample questions"
			>
				<RiArrowUpDoubleLine size={26} />
			</button>
		</div>
	);
};
