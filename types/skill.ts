import { IconType } from "react-icons";

export interface Skill {
	name: string;
	icon: IconType;
	color: string;
	category: "Programming" | "Web" | "Technologies" | "AI / ML";
}
