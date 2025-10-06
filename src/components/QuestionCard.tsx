"use client";
import { useState, useRef, useEffect } from "react";

export type PropQuestion = {
	question: {
		id: number;
		question: string;
		answer: string;
	};
};

export const QuestionCard = ({ question }: PropQuestion) => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);

	const toggleFaq = (id: number) => {
		setOpenFaq(openFaq === id ? null : id);
	};
	const isOpen = openFaq === question.id;
	const faqContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				faqContainerRef.current &&
				!faqContainerRef.current.contains(event.target as Node)
			) {
				setOpenFaq(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div
			key={question.id}
			className={`rounded-xl transition-all duration-500 border-2 border-gray-100 overflow-hidden ${
				isOpen ? "bg-greenly" : "bg-white"
			}`}
			ref={faqContainerRef}
		>
			<button
				onClick={() => toggleFaq(question.id)}
				className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors cursor-pointer ${
					isOpen ? "text-yelly" : "text-gray-900"
				}`}
			>
				<span className="text-lg font-medium pr-4">{question.question}</span>
				<span
					className={`relative w-5 h-5 flex items-center justify-center transition-transform duration-500 ${
						isOpen ? "rotate-180" : "rotate-0"
					}`}
				>
					<span className="absolute block w-5 h-[2px] bg-current rounded"></span>

					<span
						className={`absolute block w-[2px] h-5 bg-current rounded transition-all duration-100 ${
							isOpen ? "scale-y-0" : "scale-y-100"
						}`}
					></span>
				</span>
			</button>

			<div
				className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
					isOpen ? "max-h-40 pb-6" : "max-h-0"
				}`}
			>
				<p
					className={`text-white/90 text-sm md:text-md leading-relaxed transition-all duration-700 ease-in-out ${
						isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
					}`}
				>
					{question.answer}
				</p>
			</div>
		</div>
	);
};

