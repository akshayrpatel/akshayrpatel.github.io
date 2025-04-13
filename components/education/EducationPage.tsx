import React, { useState, useRef, useEffect } from "react";
import { BackHomeButton } from "../utils";
import { education, educationCategories, EducationItem } from "./EducationData";
import { GoDotFill } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";

const EducationPage: React.FC = () => {
	const [search, setSearch] = useState<string>("");
	const [filterType, setFilterType] = useState<string>("All");
	const [open, setOpen] = useState<boolean>(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);

	// Dropdown close on click outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				buttonRef.current &&
				!buttonRef.current.contains(event.target as Node) &&
				listRef.current &&
				!listRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		}
		if (open) {
			document.addEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [open]);

	const filtered = education.filter(
		(e) =>
			(filterType === "All" ||
				e.type.toLowerCase() === filterType.toLowerCase()) &&
			(e.title.toLowerCase().includes(search.toLowerCase()) ||
				e.institution.toLowerCase().includes(search.toLowerCase()) ||
				e.year.toLowerCase().includes(search.toLowerCase()))
	);

	const getTypeColors = (type: string) => {
		switch (type.toLowerCase()) {
			case "degree":
				return { text: "text-red-600" };
			case "course":
				return { text: "text-sky-500" };
			case "certification":
				return { text: "text-orange-400" };
			default:
				return { text: "text-gray-700" };
		}
	};

	return (
		<section className="w-full min-h-screen px-2 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-[#f3f1fc] via-[#f9f8fe] to-[#eae8fd]">
			{/* Title and Description */}
			<div className="max-w-4xl mx-auto mb-8">
				<h2 className="mb-3 text-3xl sm:text-4xl md:text-5xl text-center font-heading font-extrabold text-purple-900">
					Education, Certifications & Courses
				</h2>
				<p className="mb-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-subheading text-center text-purple-700">
					My academic journey, professional certifications, and online courses
					that fuel my growth and curiosity.
				</p>
			</div>

			{/* Top Bar: Back | Search | Filter */}
			<div className="flex flex-col sm:flex-row max-w-4xl mx-auto mb-8 items-stretch gap-3 sm:gap-4">
				{/* Back Button */}
				<div className="flex items-center">{<BackHomeButton />}</div>
				{/* Search Bar */}
				<div className="flex-1 flex items-center">
					<input
						type="text"
						placeholder="Search by title, institution, or year..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full px-4 py-2 rounded-xl border font-outfitSans border-purple-300 bg-white text-purple-900 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
						aria-label="Search education, certifications, or courses"
					/>
				</div>
				{/* Filter Dropdown */}
				<div className="flex items-center relative w-full sm:w-44">
					<button
						type="button"
						className="flex w-full px-4 py-2 items-center justify-between rounded-xl border border-purple-300 bg-white text-purple-900 shadow-sm hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
						aria-haspopup="listbox"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
						ref={buttonRef}
					>
						{filterType}
						<FaChevronDown className="ml-2 text-purple-400" />
					</button>
					{open && (
						<ul
							className="absolute w-full left-0 top-full mt-2 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
							tabIndex={-1}
							role="listbox"
							aria-activedescendant={filterType}
							ref={listRef}
						>
							{educationCategories.map((type: string) => (
								<li
									key={type}
									role="option"
									aria-selected={filterType === type}
									tabIndex={0}
									onClick={() => {
										setFilterType(type);
										setOpen(false);
									}}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === " ") {
											setFilterType(type);
											setOpen(false);
										}
									}}
									className={`flex items-center px-4 py-2 cursor-pointer text-sm ${
										filterType === type
											? "font-outfitSans bg-sky-100 text-purple-900"
											: "text-purple-700 hover:bg-sky-50"
									}`}
								>
									{type}
									{filterType === type && (
										<span className="ml-auto text-xs text-purple-500">
											<GoDotFill />
										</span>
									)}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>

			{/* Cards */}
			<div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8">
				{filtered.length === 0 && (
					<div className="col-span-full py-8 text-lg text-center font-semibold text-sky-400">
						No results found.
					</div>
				)}
				{filtered.map((item: EducationItem) => {
					const Icon = item.icon;
					const { text: institutionTextColor } = getTypeColors(item.type);
					return (
						<div
							key={item.title + item.year}
							className="rounded-xl shadow border-2 border-gray-200 bg-white p-5 sm:p-7 animate__animated animate__fadeInUp"
						>
							{/* First row: icon, title, institution & year */}
							<div className="grid grid-cols-[auto,1fr] items-center gap-4 mb-2">
								<div
									className="flex items-center justify-center rounded-full w-10 h-10 min-w-10 min-h-10 shadow"
									style={{ backgroundColor: item.color }}
								>
									<Icon color="#fff" size="1.5rem" />
								</div>
								<div>
									<h3 className="text-lg sm:text-lg font-heading font-bold text-sky-800">
										{item.title}
									</h3>
									<div
										className={`uppercase font-jetbrainsMono text-xs sm:text-sm font-semibold ${institutionTextColor}`}
									>
										{item.institution}
										{" | "}
										<span className="font-normal">{item.year}</span>
									</div>
								</div>
							</div>
							{/* Second row: description */}
							<div className="text-gray-700 text-sm sm:text-base font-subheading">
								{item.description}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default EducationPage;
