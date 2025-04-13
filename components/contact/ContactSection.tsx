import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import Contacts from "./Contacts";

const contacts = [
	{
		icon: FaLinkedinIn,
		link: "https://www.linkedin.com/in/akshayrpatel/",
		label: "LinkedIn",
		color: "#0A66C2",
	},
	{
		icon: FaEnvelope,
		link: "mailto:akshayrpatel24@gmail.com",
		label: "Email",
		color: "#EA4335",
	},
	{
		icon: FaGithub,
		link: "https://github.com/akshayrpatel",
		label: "GitHub",
		color: "#171515",
	},
];

const ContactSection = () => (
	<section className="flex flex-col w-full py-20 px-6 items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 ">
		<h2 className="mb-6 text-4xl sm:text-5xl text-center font-heading font-black text-white">
			Let’s Connect
		</h2>
		<p className="max-w-2xl mb-10 text-lg sm:text-xl text-center font-subheading text-gray-300">
			Ready to bring your next big idea to life? I’m always open to discussing
			new projects, creative collaborations, or exciting job opportunities.
			Reach out and let’s build something amazing together!
		</p>
		<Contacts />
	</section>
);

export default ContactSection;
