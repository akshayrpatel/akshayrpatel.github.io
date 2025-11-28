import React from "react";
import { getJarvisWelcomeImage } from "@/components/utils";

interface ChatOptionIconProps {
	memoji: string | null;
	showCloud: boolean;
	toggleModal: () => void;
}

const ChatOptionIcon: React.FC<ChatOptionIconProps> = ({
	memoji,
	showCloud,
	toggleModal,
}) => {
	return (
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
				{getJarvisWelcomeImage(memoji)}
			</button>
		</div>
	);
};

export default ChatOptionIcon;
