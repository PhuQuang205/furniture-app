"use client";

import { QuestionCard } from "@/components/QuestionCard";
import { FAQDATA } from "@/context/index";

const FaqsSection = () => {
	return (
		<section className="bg-white">
			<div className="container mx-auto">
				<div className="py-8 lg:py-16 px-8 lg:px-4">
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
					<div className="bg-white py-16 px-8">
						<div className="max-w-4xl mx-auto">
							<div className="space-y-4">
								{FAQDATA.map((faq) => {
									return <QuestionCard key={faq.id} question={faq} />;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqsSection;
