import { FC } from "react";
import { contacts } from "@/data/contacts";

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
					className={`flex size-12 md:size-16 items-center justify-center rounded-full border border-slate-200 transition ${bg} group-hover:scale-110 group-hover:shadow-lg`}
				>
					<Icon
						className={`text-[1.5rem] md:text-[2rem] duration-200 ${color}`}
					/>
				</span>
			</a>
		))}
	</div>
);

export default Contacts;
