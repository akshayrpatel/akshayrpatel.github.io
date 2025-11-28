import { getRandomMessage, unavailableMessages } from "@/data";
import { MessageSenderType, ChatMessage, JarvisResponse } from "@/types";

export const createChatMessage = (
	sender: MessageSenderType,
	content: string
): ChatMessage => {
	return {
		sender: sender,
		content: content,
	};
};

export const checkJarvisHealth = async (): Promise<boolean> => {
	try {
		const jarvisApiUrlChatHealth =
			process.env.NEXT_PUBLIC_JARVIS_API_URL_CHAT_HEALTH;

		if (!jarvisApiUrlChatHealth) {
			console.log("Jarvis api url is not defined");
			return false;
		}

		const response = await fetch(jarvisApiUrlChatHealth);
		const health = await response.json();

		console.log("Jarvis healthy? ", health.status === "healthy");
		return health.status === "healthy";
	} catch (e) {
		console.log("Failed to check jarvis health: ", e);
		return false;
	}
};

export const askJarvis = async (
	query: string,
	sessionId: string
): Promise<JarvisResponse> => {
	try {
		const jarvisApiUrlChat = process.env.NEXT_PUBLIC_JARVIS_API_URL_CHAT;

		if (!jarvisApiUrlChat) {
			console.log("Jarvis api url is not defined");
			return {
				answer: getRandomMessage(unavailableMessages),
				session_id: null,
				followups: [],
			};
		}

		const response = await fetch(jarvisApiUrlChat, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: query,
				session_id: sessionId,
			}),
		});

		if (!response.ok) {
			throw new Error(`Jarvis api failed (${response.status})`);
		}

		return await response.json();
	} catch (e) {
		console.log("Jarvis failed to answer: ", e);
		return {
			answer: getRandomMessage(unavailableMessages),
			session_id: null,
			followups: [],
		};
	}
};
