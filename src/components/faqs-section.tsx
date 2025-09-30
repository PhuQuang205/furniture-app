"use client";

import { useRef, useState, useEffect } from "react";

const faqData = [
	{
		id: 0,
		question: "What types of furniture do you offer?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 1,
		question: "What payment methods do you accept?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 2,
		question: "Can I track my furniture delivery?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 3,
		question: "What is your return policy?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 4,
		question: "What materials are used in your furniture?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
	{
		id: 5,
		question: "Are there any discounts or promotions available?",
		answer:
			"+ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
	},
];

export const FaqsSection = () => {
	const [openFaq, setOpenFaq] = useState<number | null>(null);
	const faqContainerRef = useRef<HTMLDivElement | null>(null);

	// đóng khi click ra ngoài
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

	const toggleFaq = (id: number) => {
		setOpenFaq(openFaq === id ? null : id);
	};

	return (
		<section className="bg-white" ref={faqContainerRef}>
			<div className="container mx-auto">
				<div className="py-8 lg:py-16 px-8 lg:px-4">
					{/* Phần tiêu đề */}
					<div className="flex justify-center items-center flex-col gap-4 my-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Hỏi đáp</p>
						</div>
						<h2 className="text-4xl font-bold text-black text-center">
							<span className="text-greenly">Câu hỏi</span> thường gặp? Xem tại
							đây.
						</h2>
					</div>

					{/* FAQ Section */}
					<div className="bg-white py-16 px-8">
						<div className="max-w-4xl mx-auto">
							<div className="space-y-4">
								{faqData.map((faq) => {
									const isOpen = openFaq === faq.id;
									return (
										<div
											key={faq.id}
											className={`rounded-xl transition-all duration-500 border-2 border-gray-100 overflow-hidden ${
												isOpen ? "bg-greenly" : "bg-white"
											}`}
										>
											<button
												onClick={() => toggleFaq(faq.id)}
												className={`w-full px-6 py-5 text-left flex items-center justify-between transition-colors ${
													isOpen ? "text-white" : "text-gray-900"
												}`}
											>
												<span className="text-lg font-medium pr-4">
													{faq.question}
												</span>

												{/* Icon + → - với hiệu ứng xoay */}
												<span
													className={`relative w-5 h-5 flex items-center justify-center transition-transform duration-500 ${
														isOpen ? "rotate-180" : "rotate-0"
													}`}
												>
													{/* thanh ngang (luôn hiển thị) */}
													<span className="absolute block w-5 h-[2px] bg-current rounded"></span>

													{/* thanh dọc (ẩn đi khi mở) */}
													<span
														className={`absolute block w-[2px] h-5 bg-current rounded transition-all duration-100 ${
															isOpen ? "scale-y-0" : "scale-y-100"
														}`}
													></span>
												</span>
											</button>

											{/* phần trả lời có animation */}
											<div
												className={`px-6 transition-all duration-500 ease-in-out overflow-hidden ${
													isOpen ? "max-h-40 pb-6" : "max-h-0"
												}`}
											>
												<p
													className={`text-white/90 text-sm md:text-md leading-relaxed transition-all duration-700 ease-in-out ${
														isOpen
															? "opacity-100 translate-y-0"
															: "opacity-0 translate-y-4"
													}`}
												>
													{faq.answer}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
