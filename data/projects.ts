import { ProjectItem } from "@/types/project"; // Adjust path if your ProjectItem is in a different file

export const projects: ProjectItem[] = [
	{
		title: "Jarvis",
		image: "/images/projects/jarvis-bot.png",
		description:
			"A personalized AI assistant powered by a large language model capable of answering questions about my background, experience, projects, skills etc.",
		technologies: ["Python", "OpenAI", "React", "LangChain", "ChromaDB"],
		github: "https://github.com/akshayrpatel/jarvis-ai",
		live: "https://engineer24.dev",
		category: "AI/ML",
	},
	{
		title: "MoodFlix",
		image: "/images/projects/moodflix.png",
		description:
			"An AI-assisted discovery platform to recommend content based on user mood using a hybrid of semantic search and programmatic filtering.",
		technologies: [
			"Python",
			"Ollama",
			"ChromaDB",
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind",
		],
		github: "https://github.com/akshayrpatel/moodflix",
		live: "https://moodflix.engineer24.dev",
		category: "AI/ML",
	},
	{
		title: "Jarvis ETL Pipeline",
		image: "/images/projects/jarvis-etl.png",
		description:
			"A backend ingestion pipeline for my personal assistant, to process all documents that describe my work, projects, background, etc. that power semantic search on my portfolio.",
		technologies: [
			"Python",
			"Redis",
			"ChromaDB",
			"Multi-Threading",
			"Queues",
			"Events",
			"Embeddings",
		],
		github: "https://github.com/akshayrpatel/jarvis-etl",
		category: "AI/ML",
	},
	{
		title: "Jarvis Langchain Server",
		image: "/images/projects/jarvis-server.png",
		description:
			"A dedicated backend service that orchestrates prompt routing, retrieval, tool use, and workflow logic for Jarvis.",
		technologies: ["Python", "FastAPI", "LangChain", "OpenAI", "Render"],
		github: "https://github.com/akshayrpatel/jarvis-langchain-server",
		category: "AI/ML",
	},
	{
		title: "GitLab MR Ingestor",
		image: "/images/projects/jarvis-etl.png",
		description:
			"A resilient, multi-threaded data pipeline designed to ingest high-frequency data from GitLab’s GraphQL API into PostgreSQL for downstream analysis.",
		technologies: [
			"Python",
			"Redis",
			"Postgres",
			"GraphQL",
			"Multi-Threading",
			"Queues",
		],
		gitlab: "https://gitlab.com/akshayrpatel/gitlab-mr-ingestor",
		category: "AI/ML",
	},
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
];

export const projectCategories = [
	"All",
	...Array.from(new Set(projects.map((p) => p.category))),
];
