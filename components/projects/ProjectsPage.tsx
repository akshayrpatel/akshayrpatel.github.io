import { useState, useRef } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { BackHomeButton } from "../utils";
import { projects, categories } from "./ProjectData";
import { getProjectImage, getSkillIcon } from "../utils";
import { GoDotFill } from "react-icons/go";

const ProjectsPage = () => {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("All");

	const [open, setOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	const filteredProjects = projects.filter(
		(p) =>
			(category === "All" || p.category === category) &&
			(p.name.toLowerCase().includes(search.toLowerCase()) ||
				p.technologies.some((t) =>
					t.toLowerCase().includes(search.toLowerCase())
				))
	);

	return (
		<section className="w-full px-2 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-blue-50 via-sky-100 to-slate-100">
			{/* Title and Description */}
			<div className="max-w-5xl mx-auto mb-8">
				<h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl text-center font-heading font-extrabold text-sky-800 ">
					Projects
				</h2>
				<p className="mb-6 max-w-4xl mx-auto text-base sm:text-lg md:text-xl font-subheading text-center text-sky-700">
					Explore my hands-on work with modern tech stacks, from AI/ML to
					full-stack web apps.
				</p>
			</div>

			{/* Top Bar: Back | Search | Filter */}
			<div className="flex flex-col sm:flex-row max-w-5xl mx-auto mb-6 items-stretch gap-3 sm:gap-4">
				{/* Back Button */}
				<div className="flex items-center">
					<BackHomeButton />
				</div>
				{/* Search Bar */}
				<div className="flex-1 flex items-center">
					<input
						type="text"
						placeholder="Search projects or tech..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full px-4 py-2 rounded-xl border border-sky-200 bg-white text-sky-700 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
						aria-label="Search projects or technologies"
					/>
				</div>

				<div className="flex items-center relative w-full sm:w-48">
					<button
						type="button"
						className="flex w-full px-4 py-2 items-center justify-between rounded-xl border border-sky-200 bg-white text-sky-700 shadow-sm hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-300 transition"
						aria-haspopup="listbox"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						ref={buttonRef}
					>
						{category}
						<FaChevronDown className="ml-2 text-sky-400" />
					</button>
					{open && (
						<ul
							className="absolute w-full left-0 top-full mt-2 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
							tabIndex={-1}
							role="listbox"
							aria-activedescendant={category}
							ref={listRef}
						>
							{categories.map((cat) => (
								<li
									key={cat}
									role="option"
									aria-selected={category === cat}
									tabIndex={0}
									onClick={() => {
										setCategory(cat);
										setOpen(false);
									}}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											setCategory(cat);
											setOpen(false);
										}
									}}
									className={`flex items-center px-4 py-2 cursor-pointer text-sm ${
										category === cat
											? "bg-sky-100 text-sky-900"
											: "text-sky-700 hover:bg-sky-50"
									}`}
								>
									{cat}
									{category === cat && (
										<GoDotFill className="ml-auto text-xs text-sky-500" />
									)}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			{/* Projects Grid */}
			<div className="grid max-w-5xl mx-auto sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
				{filteredProjects.length === 0 && (
					<div className="col-span-full py-8 text-lg text-center font-semibold text-sky-400">
						No projects found.
					</div>
				)}
				{filteredProjects.map((proj, i: number) => (
					<div
						key={i}
						className="flex flex-col p-5 sm:p-6 rounded-2xl shadow-lg border border-sky-100 bg-white hover:shadow-xl transition animate__animated animate__fadeInUp"
					>
						{/* Image */}
						<div className="flex w-full h-32 sm:h-36 mb-4 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 overflow-hidden">
							{getProjectImage(proj.image)}
						</div>
						{/* Name */}
						<h3 className="mb-1 text-lg sm:text-xl font-heading font-bold text-sky-800">
							{proj.name}
						</h3>
						{/* Tech icons */}
						<div className="flex flex-wrap mb-2 gap-2">
							{proj.technologies.map((tech) => (
								<span key={tech} className="text-xl mr-1" title={tech}>
									{getSkillIcon(tech)}
								</span>
							))}
						</div>
						{/* Description */}
						<p className="flex-1 mb-3 text-sm sm:text-base font-subheading text-sky-700">
							{proj.description}
						</p>
						{/* Links */}
						<div className="flex mt-auto gap-3 font-outfit">
							<a
								href={proj.github}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex px-3 py-1.5 items-center gap-1 rounded-full bg-sky-50 hover:bg-sky-200 text-sky-700 transition"
							>
								<FaGithub /> GitHub
							</a>
							{proj.live && (
								<a
									href={proj.live}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex px-3 py-1.5 items-center gap-1 rounded-full bg-sky-100 hover:bg-sky-300 text-sky-700 transition"
								>
									<FaExternalLinkAlt /> Live
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsPage;
