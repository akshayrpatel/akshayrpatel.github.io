import { LuBrainCircuit } from "react-icons/lu";
import { useEffect, useState } from "react";

type BrainCircuitFlickerProps = {
	open: boolean;
};

export default function JarvisBrain({ open }: BrainCircuitFlickerProps) {
	const [isBold, setIsBold] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setIsBold(Math.random() > 0.5);
		}, Math.random() * 400 + 300);
		return () => clearInterval(interval);
	}, []);

	const baseStyle =
		"flex items-center justify-center size-14 md:size-20 text-3xl md:text-5xl rounded-full shadow-lg " +
		"hover:scale-110 hover:shadow-2xl transition-transform duration-300 " +
		"bg-gradient-to-br from-purple-600 via-blue-500 to-blue-300";
	const iconStyle =
		open || isBold ? baseStyle + " text-white" : baseStyle + " text-slate-300";
	return (
		<div className="flex items-center justify-center">
			<div className={iconStyle}>
				<LuBrainCircuit
					className={isBold ? "font-bold shadow-2xl" : "font-light"}
				/>
			</div>
		</div>
	);
}
