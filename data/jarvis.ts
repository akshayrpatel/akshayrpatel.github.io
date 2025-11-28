export const memojis = [
	"/images/jarvis/akshay-smile-memoji.png",
	"/images/jarvis/akshay-peace-memoji.png",
	"/images/jarvis/akshay-idea-memoji.png",
	"/images/jarvis/akshay-think-memoji.png",
	"/images/jarvis/akshay-thumbsup-memoji.png",
];
export const sadmemojis = [
	"/images/jarvis/akshay-sad-memoji.png",
	"/images/jarvis/akshay-sleep-memoji.png",
];
export const landingMemojis = [
	"/images/jarvis/landing/akshay-sweatshirt-chill-memoji.png",
	"/images/jarvis/landing/akshay-sweatshirt-hello-memoji.png",
	"/images/jarvis/landing/akshay-sweatshirt-pray-memoji.png",
	"/images/jarvis/landing/akshay-moving-memoji.gif",
];

export const welcomeMessages: string[] = [
	"🤖 Hello! I’m Jarvis, your AI assistant here to provide insights about Akshay Patel — his work, projects, skills, and background. How can I help you today?",
	"👋 Welcome! I’m Jarvis, guiding you through Akshay Patel’s experience, technical skills, and projects. What would you like to explore first?",
	"💼 Hi there! Jarvis at your service. I can answer questions about Akshay Patel’s professional journey, education, and current projects. What interests you most?",
	"🚀 Greetings! I’m Jarvis, here to give you a clear and concise overview of Akshay Patel’s career, skills, and notable achievements. Ask me anything!",
	"🎓 Hello! I’m Jarvis, your personal guide to Akshay Patel’s portfolio. Curious about his projects, tech stack, or background? Let’s dive in!",
	"😊 Welcome! I’m Jarvis, here to provide quick, professional, and accurate answers about Akshay Patel. Feel free to ask about his experience, education, or work!",
];

export const unavailableMessages: string[] = [
	"😔 Sorry, I’m temporarily offline. Jarvis will be back to assist you shortly!",
	"🚧 Jarvis is currently unavailable. Please check back in a few moments!",
	"😢 Apologies! I’m taking a short break. I’ll be ready to provide insights on Akshay Patel soon.",
	"🔌 Maintenance in progress. Jarvis will resume answering questions shortly!",
	"🌙 Currently unavailable. Please try again later for information about Akshay Patel.",
];

export function getRandomMessage(messages: string[]): string {
	const idx = Math.floor(Math.random() * messages.length);
	return messages[idx];
}

export function getRandomMemoji(fromMemojis: string[]): string {
	const index = Math.floor(Math.random() * fromMemojis.length);
	return fromMemojis[index];
}
