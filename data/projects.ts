import { ProjectItem } from "@/types/project"; // Adjust path if your ProjectItem is in a different file

export const projects: ProjectItem[] = [
	{
		title: "Shortly",
		image: "/images/projects/shortly.png",
		description: "A tool to shorten long URLs and share them easily.",
		technologies: ["Node.js", "React", "TypeScript"],
		github: "https://github.com/akshayrpatel/Shortly-frontend",
		live: "https://elegant-longma-8b3553.netlify.app/",
		category: "Web App",
	},
	{
		title: "Shortly REST API",
		image: "/images/projects/shortly.png",
		description:
			"A REST API service that allows users to create, and share short urls.",
		technologies: ["Java", "Spring", "Node.js", "MySQL", "Docker", "Maven"],
		github: "https://github.com/akshayrpatel/Shortly",
		category: "Web App",
	},
	{
		title: "Portfolio Website",
		image: "/images/projects/coder.png",
		description:
			"A personal portfolio website showcasing my work, skills, and projects.",
		technologies: ["React", "Tailwind", "TypeScript"],
		github: "https://github.com/akshayrpatel/akshayrpatel.github.io",
		live: "https://akshayrpatel.github.io",
		category: "Web App",
	},
	{
		title: "Jarvis",
		image: "/images/projects/jarvis-brain.png",
		description:
			"Currently training a large language model to be able to answer questions pertaining to myself!",
		technologies: ["Python", "Ollama", "HuggingFace"],
		category: "AI/ML",
	},
	{
		title: "Resume.AI",
		image: "/images/projects/resume-ai.png",
		description:
			"Developing a multi-agent AI system that streamlines job applications for engineers, featuring AI-driven resume optimization, automated cover letter generation, and personalized interview preparation.",
		technologies: ["Python", "Gemini", "Spring", "React"],
		category: "AI/ML",
	},
	{
		title: "Bookstore",
		image: "/images/projects/work.png",
		description:
			"A simple bookstore application built using Java EE, Apache Derby, Apache Tomcat, Apache Axis, and Jersey.",
		technologies: ["Java", "Tomcat", "Eclipse"],
		github: "https://github.com/akshayrpatel/bookstore",
		category: "Web App",
	},
	{
		title: "Curve Fitting",
		image: "/images/projects/work.png",
		description:
			"Modeled a supervised learner using linear regression with risk minimization techniques to illustrate the concept of overfitting (a doomed learner) using graphs.",
		technologies: ["Python"],
		github: "https://github.com/akshayrpatel/Machine-Learning",
		category: "AI/ML",
	},
	{
		title: "Web Page Classification",
		image: "/images/projects/work.png",
		description:
			"Built a classification learning model to classify web pages into categories by extracting words from a source of hand classified web page.",
		technologies: ["Python", "Weka"],
		category: "AI/ML",
	},
	{
		title: "YU Assist",
		image: "/images/projects/yu-assist.png",
		description:
			"An app on the google assistant to help York University students find information like GPA, courses enrolled, etc. quickly using voice-recognition.",
		technologies: ["Node.js", "Firebase", "Javascript", "Dialogflow"],
		github: "https://github.com/akshayrpatel/YU-Assist",
		category: "AI/ML",
	},
	{
		title: "Twitter Sentiment Analysis",
		image: "/images/projects/work.png",
		description:
			"A real time sentiment analysis big data pipeline of top trending topics on Twitter using Apache Spark and HDFS.",
		technologies: ["Twitter", "Python", "HDFS"],
		category: "AI/ML",
	},
	{
		title: "Memory Swipe",
		image: "/images/projects/memory-swipe.png",
		description:
			"A simple card swipe memory game built end-to-end completely using prompts with bolt.new",
		technologies: ["Bolt.new", "React", "TypeScript", "Tailwind"],
		github: "https://github.com/akshayrpatel/swipe",
		live: "https://benevolent-malasada-a5c914.netlify.app/",
		category: "Games",
	},
	{
		title: "Pair it!",
		image: "/images/projects/pair-it.png",
		description:
			"A simple card pairing game built end-to-end completely using prompts with bolt.new",
		technologies: ["Bolt.new", "React", "TypeScript", "Tailwind"],
		github: "https://github.com/akshayrpatel/pair-it",
		live: "https://transcendent-stroopwafel-e65893.netlify.app/",
		category: "Games",
	},
];

export const projectCategories = [
	"All",
	...Array.from(new Set(projects.map((p) => p.category))),
];
