import type { IconType } from "react-icons";

export interface EducationItem {
	type: string;
	title: string;
	institution: string;
	year: string;
	session?: string;
	icon: IconType;
	color: string;
	description: string;
}
