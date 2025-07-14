import { IconType } from "react-icons";

export interface ContactItem {
	type: string;
	icon: IconType;
	link: string;
	text: string;
	color: string;
	bg: string;
}
