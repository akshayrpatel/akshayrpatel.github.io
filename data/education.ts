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
	FaUserTie,
	FaBusinessTime,
	FaTools,
	FaRobot,
	FaLayerGroup,
	FaGlobe,
	FaKey,
	FaChartLine,
} from "react-icons/fa";
import { MdOutlineFunctions } from "react-icons/md";
import {
	FaMicrochip,
	FaSuperscript,
	FaUserGraduate,
	FaBolt,
	FaBookOpen,
} from "react-icons/fa";
import { MdFunctions, MdOutlineCalculate } from "react-icons/md";
import { GiMaterialsScience, GiChemicalDrop } from "react-icons/gi";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BsGraphUp, BsGraphDown } from "react-icons/bs";
import { TbMathFunction } from "react-icons/tb";

import { EducationItem } from "@/types";

const yorkUCourses: EducationItem[] = [
	{
		type: "course",
		title: "Advanced Data Structures",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
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
		session: "FW-2018",
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
		session: "FW-2018",
		icon: FaKey,
		color: "#f59e42",
		description:
			"Introduces cryptographic algorithms and protocols, including encryption, authentication, and public-key systems, with applications in secure communications.",
	},
	{
		type: "course",
		title: "Big Data Systems",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: FaDatabase,
		color: "#0f766e",
		description:
			"Examines the architecture and technologies behind large-scale data storage and processing, including distributed systems, data mining, and analytics frameworks.",
	},
	{
		type: "course",
		title: "Building E-Commerce Systems",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaGlobe,
		color: "#f59e42",
		description:
			"Focuses on the design and implementation of e-commerce platforms, covering web technologies, security, and transaction processing.",
	},
	{
		type: "course",
		title: "Business Essentials for Tech Entrepreneurs I",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: FaBusinessTime,
		color: "#eab308",
		description:
			"Provides foundational business knowledge for aspiring tech entrepreneurs, emphasizing business models, market analysis, and startup strategies.",
	},
	{
		type: "course",
		title: "Computational Thinking",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaRobot,
		color: "#f472b6",
		description:
			"Develops problem-solving skills using computational methods, including algorithmic thinking, abstraction, and decomposition.",
	},
	{
		type: "course",
		title: "Computer Network Protocols and Applications",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: FaNetworkWired,
		color: "#0ea5e9",
		description:
			"Studies the principles of computer networking, including protocols, architectures, and networked application development.",
	},
	{
		type: "course",
		title: "Computer Organization & Architecture",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaCogs,
		color: "#a3e635",
		description:
			"Explores the structure and function of computer systems, including processors, memory, input/output, and assembly language.",
	},
	{
		type: "course",
		title: "Data Mining",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaChartBar,
		color: "#f59e42",
		description:
			"Introduces techniques for extracting patterns and knowledge from large datasets using statistical and machine learning methods.",
	},
	{
		type: "course",
		title: "Fundamentals of Data Structures",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
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
		session: "FW-2017",
		icon: FaDatabase,
		color: "#0f766e",
		description:
			"Examines the principles of database design, implementation, and management, including SQL, normalization, and transaction processing.",
	},
	{
		type: "course",
		title: "Introduction to Logic for Computer Science",
		institution: "York University",
		year: "2015",
		session: "SU-2015",
		icon: MdOutlineFunctions,
		color: "#f472b6",
		description:
			"Introduces discrete mathematics topics essential for computer science, including logic, sets, relations, functions, and combinatorics.",
	},
	{
		type: "course",
		title: "Engineering Mechanics",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaTools,
		color: "#f59e42",
		description:
			"Covers the fundamentals of statics and dynamics, including force analysis, equilibrium, and the behavior of structures and materials.",
	},
	{
		type: "course",
		title: "Engineering Statistics",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaChartLine,
		color: "#3b82f6",
		description:
			"Introduces statistical methods for engineers, including probability, hypothesis testing, regression, and quality control.",
	},
	{
		type: "course",
		title: "Introduction to Computer Security",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaLock,
		color: "#f87171",
		description:
			"Provides an overview of security principles, threats, and countermeasures in computer systems and networks.",
	},
	{
		type: "course",
		title: "Professional Practice in Computing",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaUserTie,
		color: "#6366f1",
		description:
			"Discusses ethical, legal, and professional issues in computing, including intellectual property, privacy, and workplace conduct.",
	},
	{
		type: "course",
		title: "Software Design",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaLaptopCode,
		color: "#0ea5e9",
		description:
			"Focuses on software engineering principles, including design patterns, architecture, and the software development lifecycle.",
	},
	{
		type: "course",
		title: "Software Tools",
		institution: "York University",
		year: "2015",
		session: "SU-2015",
		icon: FaTools,
		color: "#a3e635",
		description:
			"Introduces essential tools for software development, such as version control, debugging, and build automation.",
	},
	{
		type: "course",
		title: "Operating System Fundamentals",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: FaMicrochip,
		color: "#6366f1",
		description:
			"Covers fundamental concepts and principles of operating systems, including process management, memory management, file systems, and concurrency.",
	},
	{
		type: "course",
		title: "Bus Essentials for Tech Entrepreneurs II",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: FaBusinessTime,
		color: "#eab308",
		description:
			"Continues foundational business knowledge for aspiring tech entrepreneurs, focusing on advanced strategies, funding, and growth.",
	},
	{
		type: "course",
		title: "Elementary Probability",
		institution: "York University",
		year: "2018",
		session: "FW-2018",
		icon: MdOutlineCalculate,
		color: "#3b82f6",
		description:
			"Introduces basic concepts of probability, including random variables, probability distributions, and statistical inference.",
	},
	{
		type: "course",
		title: "Machine Learning and Pattern Recognition",
		institution: "York University",
		year: "2017",
		session: "FW-2017",
		icon: FaRobot,
		color: "#f472b6",
		description:
			"Explores techniques for machine learning and pattern recognition, including supervised and unsupervised learning, neural networks, and deep learning.",
	},
	{
		type: "course",
		title: "Renaissance Engineer 1:",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaUserGraduate,
		color: "#6366f1",
		description:
			"First part of a series focusing on foundational engineering concepts and principles for holistic development.",
	},
	{
		type: "course",
		title: "Renaissance Engineer 2: Design Principles",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaProjectDiagram,
		color: "#0ea5e9",
		description:
			"Second part of the Renaissance Engineer series, emphasizing engineering design methodologies and principles.",
	},
	{
		type: "course",
		title: "Chemistry and Materials Science",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: GiMaterialsScience,
		color: "#f59e42",
		description:
			"Covers fundamental principles of chemistry and their application to materials science, including properties and behavior of materials.",
	},
	{
		type: "course",
		title: "Applied Multivariate & Vector Calculus",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: TbMathFunction,
		color: "#6366f1",
		description:
			"Explores advanced calculus concepts, including multivariate functions, vector fields, and their applications in engineering and science.",
	},
	{
		type: "course",
		title: "Electricity, Magnetism & Optics for Engineers",
		institution: "York University",
		year: "2015",
		session: "FW-2015",
		icon: FaBolt,
		color: "#f87171",
		description:
			"Covers principles of electricity, magnetism, and optics relevant to engineering applications.",
	},
	{
		type: "course",
		title: "Introduction to Microeconomics",
		institution: "York University",
		year: "2015",
		session: "SU-2015",
		icon: BsGraphDown,
		color: "#0ea5e9",
		description:
			"Introduces fundamental principles of microeconomics, including supply and demand, market structures, and consumer behavior.",
	},
	{
		type: "course",
		title: "Introduction to Macroeconomics",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: BsGraphUp,
		color: "#0ea5e9",
		description:
			"Explores fundamental principles of macroeconomics, including national income, inflation, unemployment, and government policy.",
	},
	{
		type: "course",
		title: "Research Directions in Computing",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: RiLightbulbFlashLine,
		color: "#6366f1",
		description:
			"Provides an overview of current research areas and emerging trends in computer science.",
	},
	{
		type: "course",
		title: "Introduction to Computer Science I",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: FaBookOpen,
		color: "#6366f1",
		description:
			"First part of an introductory series to computer science, covering basic programming concepts and problem-solving.",
	},
	{
		type: "course",
		title: "Introduction to Computer Science II",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: FaBookOpen,
		color: "#6366f1",
		description:
			"Second part of an introductory series to computer science, building upon basic programming and introducing more complex data structures and algorithms.",
	},
	{
		type: "course",
		title: "Chemical Dynamics",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: GiChemicalDrop,
		color: "#f59e42",
		description:
			"Studies the rates and mechanisms of chemical reactions, including factors influencing reaction speed and energy changes.",
	},
	{
		type: "course",
		title: "Applied Calculus I",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: MdFunctions,
		color: "#6366f1",
		description:
			"Introduces fundamental concepts of differential and integral calculus with applications in various fields.",
	},
	{
		type: "course",
		title: "Applied Calculus II",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: MdFunctions,
		color: "#6366f1",
		description:
			"Continues the study of integral calculus, including techniques of integration, sequences, and series, with practical applications.",
	},
	{
		type: "course",
		title: "Applied Linear Algebra",
		institution: "York University",
		year: "2014",
		session: "FW-2014",
		icon: FaSuperscript,
		color: "#6366f1",
		description:
			"Covers concepts of linear algebra, including vectors, matrices, systems of linear equations, and eigenvalues, with applications in science and engineering.",
	},
];

const certifications: EducationItem[] = [
	{
		type: "certification",
		title: "Fine Tuning Large Language Models",
		institution: "DeepLearning.AI",
		year: "2024",
		icon: FaCertificate,
		color: "#f59e42",
		description:
			"How to adapt large language models (LLMs) to your specific needs by training them on your own data",
	},
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

const yorkUDegree: EducationItem[] = [
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
