import { FaUniversity, FaCertificate } from "react-icons/fa";
import {
	FaDatabase,
	FaLock,
	FaNetworkWired,
	FaProjectDiagram,
	FaLaptopCode,
	FaCogs,
	FaChartBar,
	FaSitemap,
	FaCode,
	FaUserTie,
	FaBusinessTime,
	FaTools,
	FaRobot,
	FaLayerGroup,
	FaGlobe,
	FaKey,
	FaChartLine,
} from "react-icons/fa";
import {
	MdOutlineWeb,
	MdOutlineScience,
	MdOutlineFunctions,
} from "react-icons/md";
import type { IconType } from "react-icons";

// TypeScript type for an education item
export type EducationItem = {
	type: string;
	title: string;
	institution: string;
	year: string;
	icon: IconType;
	color: string;
	description: string;
};

const yorkUCourses = [
	{
		type: "course",
		title: "Advanced Data Structures",
		institution: "York University",
		year: "2019",
		icon: FaLayerGroup,
		color: "#0ea5e9",
		description:
			"Explores advanced methods for organizing and manipulating data, including trees, heaps, hash tables, and graphs, with a focus on algorithmic efficiency and real-world applications.",
	},
	{
		type: "course",
		title: "Analysis of Algorithms",
		institution: "York University",
		year: "2018",
		icon: FaProjectDiagram,
		color: "#6366f1",
		description:
			"Covers the design and analysis of algorithms, including complexity, correctness, and optimization, with emphasis on sorting, searching, and graph algorithms.",
	},
	{
		type: "course",
		title: "Applied Cryptography",
		institution: "York University",
		year: "2018",
		icon: FaKey,
		color: "#f59e42",
		description:
			"Introduces cryptographic algorithms and protocols, including encryption, authentication, and public-key systems, with applications in secure communications.",
	},
	{
		type: "course",
		title: "Big Data Systems",
		institution: "York University",
		year: "2019",
		icon: FaDatabase,
		color: "#0f766e",
		description:
			"Examines the architecture and technologies behind large-scale data storage and processing, including distributed systems, data mining, and analytics frameworks.",
	},
	{
		type: "course",
		title: "Building E-Commerce Systems",
		institution: "York University",
		year: "2019",
		icon: FaGlobe,
		color: "#f59e42",
		description:
			"Focuses on the design and implementation of e-commerce platforms, covering web technologies, security, and transaction processing.",
	},
	{
		type: "course",
		title: "Business Essentials for Tech Entrepreneurs I",
		institution: "York University",
		year: "2019",
		icon: FaBusinessTime,
		color: "#eab308",
		description:
			"Provides foundational business knowledge for aspiring tech entrepreneurs, emphasizing business models, market analysis, and startup strategies.",
	},
	{
		type: "course",
		title: "Computational Thinking",
		institution: "York University",
		year: "2014",
		icon: FaRobot,
		color: "#f472b6",
		description:
			"Develops problem-solving skills using computational methods, including algorithmic thinking, abstraction, and decomposition.",
	},
	{
		type: "course",
		title: "Computer Networks and Applications",
		institution: "York University",
		year: "2018",
		icon: FaNetworkWired,
		color: "#0ea5e9",
		description:
			"Studies the principles of computer networking, including protocols, architectures, and networked application development.",
	},
	{
		type: "course",
		title: "Computer Organization & Architecture",
		institution: "York University",
		year: "2017",
		icon: FaCogs,
		color: "#a3e635",
		description:
			"Explores the structure and function of computer systems, including processors, memory, input/output, and assembly language.",
	},
	{
		type: "course",
		title: "Data Mining",
		institution: "York University",
		year: "2019",
		icon: FaChartBar,
		color: "#f59e42",
		description:
			"Introduces techniques for extracting patterns and knowledge from large datasets using statistical and machine learning methods.",
	},
	{
		type: "course",
		title: "Data Structures",
		institution: "York University",
		year: "2014",
		icon: FaSitemap,
		color: "#6366f1",
		description:
			"Covers fundamental data structures such as arrays, lists, stacks, queues, and trees, with applications in algorithm development.",
	},
	{
		type: "course",
		title: "Database Management Systems",
		institution: "York University",
		year: "2017",
		icon: FaDatabase,
		color: "#0f766e",
		description:
			"Examines the principles of database design, implementation, and management, including SQL, normalization, and transaction processing.",
	},
	{
		type: "course",
		title: "Discrete Structures",
		institution: "York University",
		year: "2014",
		icon: MdOutlineFunctions,
		color: "#f472b6",
		description:
			"Introduces discrete mathematics topics essential for computer science, including logic, sets, relations, functions, and combinatorics.",
	},
	{
		type: "course",
		title: "Engineering Mechanics",
		institution: "York University",
		year: "2014",
		icon: FaTools,
		color: "#f59e42",
		description:
			"Covers the fundamentals of statics and dynamics, including force analysis, equilibrium, and the behavior of structures and materials.",
	},
	{
		type: "course",
		title: "Engineering Statistics",
		institution: "York University",
		year: "2017",
		icon: FaChartLine,
		color: "#3b82f6",
		description:
			"Introduces statistical methods for engineers, including probability, hypothesis testing, regression, and quality control.",
	},
	{
		type: "course",
		title: "Introduction to Computer Security",
		institution: "York University",
		year: "2019",
		icon: FaLock,
		color: "#f87171",
		description:
			"Provides an overview of security principles, threats, and countermeasures in computer systems and networks.",
	},
	{
		type: "course",
		title: "Professional Practice in Computing",
		institution: "York University",
		year: "2018",
		icon: FaUserTie,
		color: "#6366f1",
		description:
			"Discusses ethical, legal, and professional issues in computing, including intellectual property, privacy, and workplace conduct.",
	},
	{
		type: "course",
		title: "Software Design",
		institution: "York University",
		year: "2018",
		icon: FaLaptopCode,
		color: "#0ea5e9",
		description:
			"Focuses on software engineering principles, including design patterns, architecture, and the software development lifecycle.",
	},
	{
		type: "course",
		title: "Software Tools",
		institution: "York University",
		year: "2014",
		icon: FaTools,
		color: "#a3e635",
		description:
			"Introduces essential tools for software development, such as version control, debugging, and build automation.",
	},
	{
		type: "course",
		title: "Structured Programming Approach",
		institution: "York University",
		year: "2014",
		icon: FaCode,
		color: "#6366f1",
		description:
			"Teaches structured programming concepts using a high-level language, emphasizing modularity, control structures, and problem-solving.",
	},
	{
		type: "course",
		title: "The Complete Web Developer Course",
		institution: "York University",
		year: "2017",
		icon: MdOutlineWeb,
		color: "#0ea5e9",
		description:
			"Comprehensive course covering web development fundamentals, including HTML, CSS, JavaScript, and backend technologies.",
	},
	{
		type: "course",
		title: "Theoretical Computer Science",
		institution: "York University",
		year: "2017",
		icon: MdOutlineScience,
		color: "#f472b6",
		description:
			"Explores theoretical foundations of computer science, including automata theory, formal languages, and computational complexity.",
	},
];

const certifications = [
	{
		type: "certification",
		title: "Multi AI Agent Systems",
		institution: "DeepLearning.AI",
		year: "2024",
		icon: FaCertificate,
		color: "#f59e42",
		description:
			"Covers the design and implementation of systems where multiple AI agents collaborate, communicate, and solve complex tasks, preparing you for advanced applications of AI agents in real-world scenarios.",
	},
	{
		type: "certification",
		title: "ChatGPT Prompt Engineering",
		institution: "DeepLearning.AI",
		year: "2024",
		icon: FaCertificate,
		color: "#f59e42",
		description:
			"Teaches best practices for working with large language models like ChatGPT, including prompt design, understanding model capabilities, and building robust applications that leverage LLMs effectively for various tasks.",
	},
	{
		type: "certification",
		title: "Supervised Machine Learning: Regression & Classification",
		institution: "DeepLearning.AI",
		year: "2024",
		icon: FaCertificate,
		color: "#f59e42",
		description:
			"Provides a comprehensive introduction to supervised machine learning, focusing on regression and classification techniques, regularization, and the application of large language models and AI to real-world data problems.",
	},
	{
		type: "certification",
		title: "PyTorch Scholarship Challenge",
		institution: "Udacity",
		year: "2018",
		icon: FaCertificate,
		color: "#f59e42",
		description:
			"An intensive program focused on deep learning fundamentals, neural networks, and practical AI skills using PyTorch, designed to accelerate careers in machine learning and artificial intelligence.",
	},
];

const yorkUDegree = [
	{
		type: "degree",
		title: "B.Sc. in Computer Science",
		institution: "York University",
		year: "2014 – 2019",
		icon: FaUniversity,
		color: "#e31837",
		description:
			"Graduated with a Honors in Computer Science. Course: System Design, Advanced Algorithms, E-Commerce Systems, Computer Architechture, Data Mining, Machine Learning",
	},
];

export const education: EducationItem[] = yorkUDegree.concat(
	yorkUCourses,
	certifications
);

export const educationCategories = [
	"All",
	...Array.from(
		new Set(
			education.map((p) => {
				const type = p.type;
				if (!type) return "";
				return type.charAt(0).toUpperCase() + type.slice(1);
			})
		)
	),
];
