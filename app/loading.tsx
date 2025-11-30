"use client";

import { useEffect, useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const FullPageLoader: React.FC = () => {
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setVisible(false), 4000);
		return () => clearTimeout(timer);
	}, []);

	if (!visible) return null;

	return (
		<div className="absolute inset-0 z-150 flex flex-col items-center justify-center bg-white/80">
			<TbFidgetSpinner className="animate-spin text-slate-500 text-6xl mb-4" />
			<span className="text-lg md:text-2xl font-heading font-semibold uppercase text-slate-500">
				Loading...
			</span>
		</div>
	);
};

export default FullPageLoader;
