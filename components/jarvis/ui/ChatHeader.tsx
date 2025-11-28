import React from "react";
import { getJarvisImage } from "@/components/utils";

interface ChatHeaderProps {
	apiAvailable: boolean;
	memoji: string | null;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ apiAvailable, memoji }) => {
	return (
		<div className="border-b-2 border-gray-200">
			<div className="flex flex-col w-full items-center justify-center">
				{getJarvisImage(memoji)}
			</div>

			<span className="absolute top-3 left-3 flex items-center ">
				<span className="relative flex size-4 group cursor-pointer">
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
				<div className="flex items-center justify-center w-full cursor-pointer">
					{/* <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">
										🚀 This chat is live but experimental - ✉️ feedback welcome!
									</span> */}
					<span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 border border-yellow-200 shadow-sm">
						🚀 This chat is live but experimental,{" "}
						<a
							href="mailto:akshayrpatel24@gmail.com?subject=Jarvis%20Chatbot%20Feedback"
							className="underline hover:text-blue-600"
						>
							✉️ feedback welcome!
						</a>
					</span>
				</div>
			</span>
		</div>
	);
};

export default ChatHeader;
