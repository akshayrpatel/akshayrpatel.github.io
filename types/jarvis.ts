import { ContactItem } from "@/types/contact";
import { ExperienceItem } from "@/types/experience";
import { ProjectItem } from "@/types/project";
import { EducationItem } from "@/types/education";
import { Skill } from "@/types/skill";

export enum MessageSenderType {
	USER = "user",
	BOT = "bot",
}

export type ChatMessage = {
	sender: MessageSenderType;
	content: string;
};

export interface JarvisResponse {
	answer: string;
	session_id: string | null;
	followups: string[];
}

export enum UIComponentType {
	PROJECT = "projects",
	CONTACT = "contact",
	SKILLS = "skills",
	EXPERIENCE = "experience",
	EDUCATION = "education",
	BACKGROUND = "background",
	GENERAL = "general",
	UNKNOWN = "unknown",
}
// export interface UIMessageContent {
// 	componentType:
// 		| UIComponentType.PROJECT
// 		| UIComponentType.CONTACT
// 		| UIComponentType.EXPERIENCE
// 		| UIComponentType.SKILLS
// 		| UIComponentType.BACKGROUND;
// 	data: ProjectItem[] | ContactItem[] | ExperienceItem[];
// 	messageIntro?: string;
// }
export type UIMessageContent =
	| {
			componentType: UIComponentType.PROJECT;
			data: ProjectItem[];
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.CONTACT;
			data: ContactItem[];
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.EXPERIENCE;
			data: ExperienceItem[];
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.SKILLS;
			data: Skill[];
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.EDUCATION;
			data: EducationItem[];
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.BACKGROUND;
			data: string;
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.GENERAL;
			data: string;
			messageIntro?: string;
	  }
	| {
			componentType: UIComponentType.UNKNOWN;
			data: string | null;
			messageIntro?: string;
	  };

// A generic type for arguments of a tool function
export interface ToolArgs {
	[key: string]: unknown; // Allows for any property in the arguments object
}

// A more specific type for tool functions
// They are async, take optional arguments, and return a Promise resolving to 'unknown' for now.
export type ToolFunction = (args?: ToolArgs) => Promise<unknown>;

// Define the expected return type of your getProjects tool for clarity
export interface GetProjectsToolResult {
	projects: ProjectItem[];
	message: string;
}
export interface GetContactsToolResult {
	contacts: ContactItem[];
	message: string;
}
export interface GetExperienceToolResult {
	experiences: ExperienceItem[];
	message: string;
}
