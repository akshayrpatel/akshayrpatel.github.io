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
	"👋  Hey there! You’re chatting directly with me, Akshay Patel – not just any bot. Curious about my experience, skills, projects, or background? Ask away! You can also ask about my education, what I’m passionate about, or even what I’m working on right now.",
	"😃  Hi! Akshay Patel here. Yep, it’s really me on the other side of this chat (well, my digital self at least!). Feel free to ask me anything about my journey as a software engineer, my favorite technologies, or any of my projects. Want to know how I got into AI or what I enjoy outside of coding? Just ask!",
	"🤖  Welcome! You’ve reached Akshay Patel’s personal chat — not a generic chatbot. You can ask me about my tech stack, side projects, certifications, or even career advice. I’m happy to share my story and insights!",
	"😊  Hello and thanks for stopping by! This is Akshay Patel, and I’m here to chat with you directly. Wondering about my background, current projects, or what drives me as an engineer? Go ahead and ask. I’m an open book!",
	"😄  Hi, you’ve connected with Akshay Patel’s portfolio chat! No random bots here — just me, ready to answer your questions. Ask about my skills, recent work, how I approach problem-solving, or even fun facts about my journey in tech. Let’s chat!",
	"🚀  Hey! Akshay Patel here – yes, the real one (well, digitally speaking!). You can ask about my experience, my favorite programming languages, the coolest project I’ve built, or advice for aspiring engineers. I’m here to help and share!",
	"❤️  Welcome to my portfolio chat! I’m Akshay Patel, and you’re talking to me, not a random assistant. Feel free to ask about my education, certifications, what I’m passionate about, or anything else you’re curious about. Let’s make this conversation awesome!",
	"🙂  Hello! This is Akshay Patel’s personal chat — ask me anything! Whether it’s about my work, skills, projects, or even what motivates me as a developer, I’m here to answer. Don’t be shy!",
];

export const unavailableMessages: string[] = [
	"😔  Sorry, I’m temporarily offline. Please try again in a little while!",
	"🚧  Assistant is currently unavailable. Hang tight while I get things sorted!",
	"😢  Looks like I’m taking a short break. Please check back later!",
	"🔌  I’ve been unplugged for maintenance. I’ll be ready to chat again soon!",
	"🌙  I’m on a quick nap. Try chatting with me again in a bit!",
	"😔  Sorry! The assistant is currently unavailable. Please try again later.",
];

export function getRandomWelcomeMessage(messages: string[]): string {
	const idx = Math.floor(Math.random() * messages.length);
	return messages[idx];
}

export function getRandomMemoji(fromMemojis: string[]): string {
	const index = Math.floor(Math.random() * fromMemojis.length);
	return fromMemojis[index];
}
