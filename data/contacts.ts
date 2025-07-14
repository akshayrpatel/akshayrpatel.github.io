import { ContactItem } from "@/types/contact";
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

export const contacts: ContactItem[] = [
	{
		type: "linkedin",
		icon: FaLinkedinIn,
		link: "https://www.linkedin.com/in/akshayrpatel/",
		text: "linkedin.com/in/akshayrpatel",
		color: "text-[#0A66C2]",
		bg: "bg-[#e8f1fa]",
	},
	{
		type: "email",
		icon: FaEnvelope,
		link: "mailto:akshayrpatel24@gmail.com",
		text: "akshayrpatel24@gmail.com",
		color: "text-[#EA4335]",
		bg: "bg-[#fae8e8]",
	},
	{
		type: "github",
		icon: FaGithub,
		link: "https://github.com/akshayrpatel",
		text: "github.com/akshayrpatel",
		color: "text-[#171515]",
		bg: "bg-[#f3f3f3]",
	},
];
