import { FC } from "react";

export interface TechInterest {
	icon: FC<{ className?: string }>;
	label: string;
	color: string;
	desc: string;
}

export interface LifeInterest {
	icon: FC<{ className?: string }>;
	label: string;
	color: string;
	desc: string;
}
