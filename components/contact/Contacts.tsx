import { FC } from "react";
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

interface Contact {
	icon: IconType;
	link: string;
	text: string;
	color: string;
	bg: string;
}

const contacts: Contact[] = [
	{
		icon: FaLinkedinIn,
		link: "https://www.linkedin.com/in/akshayrpatel/",
		text: "linkedin.com/in/akshayrpatel",
		color: "text-[#0A66C2]",
		bg: "bg-[#e8f1fa]",
	},
	{
		icon: FaEnvelope,
		link: "mailto:akshayrpatel24@gmail.com",
		text: "akshayrpatel24@gmail.com",
		color: "text-[#EA4335]",
		bg: "bg-[#fae8e8]",
	},
	{
		icon: FaGithub,
		link: "https://github.com/akshayrpatel",
		text: "github.com/akshayrpatel",
		color: "text-[#171515]",
		bg: "bg-[#f3f3f3]",
	},
];

const Contacts: FC = () => (
	<div className="flex flex-wrap gap-8 justify-center">
		{contacts.map(({ icon: Icon, link, color, bg }, i) => (
			<a
				key={i}
				href={link}
				target="_blank"
				rel="noopener noreferrer"
				className="flex flex-col items-center group animate__animated animate__fadeIn"
			>
				<span
					className={`flex size-12 md:size-16 items-center justify-center rounded-full border border-slate-200 transition ${color} ${bg} group-hover:scale-110 group-hover:shadow-lg`}
				>
					<Icon className={`text-[1.5rem] md:text-[2rem] duration-200 `} />
				</span>
			</a>
		))}
	</div>
);

export default Contacts;
