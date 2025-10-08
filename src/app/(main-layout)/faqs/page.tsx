"use client";

import { QuestionCard } from "@/components/QuestionCard";
import { CommitSection } from "@/components/section/commit-section";
import { useState } from "react";
import { FAQS } from "@/context";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import NavItem from "@/components/NavItem";

export interface Faq {
	id: string;
	name: string;
	questions: {
		id: number;
		question: string;
		answer: string;
	}[];
}

const FaqsPage = () => {
	const [activeNavItem, setActiveNavItem] = useState("general");
	const currentCategory = FAQS.find((cat) => cat.id === activeNavItem);

	return (
		<div>
			<BreadcrumbHeader
				title="FAQs"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "FAQs" }]}
			/>
			<div className="container mx-auto px-8 lg:px-4 py-8 lg:py-16">
				<div className="grid gap-8 lg:grid-cols-[320px_1fr]">
					<nav className="space-y-2">
						{FAQS.map((category) => (
							<NavItem
								active={activeNavItem === category.id}
								key={category.id}
								id={category.id}
								name={category.name}
								onClick={() => setActiveNavItem(category.id)}
							/>
						))}
					</nav>
					<div className="space-y-4">
						{currentCategory?.questions.map((item) => (
							<div key={item.id}>
								<QuestionCard question={item} />
							</div>
						))}
					</div>
				</div>
			</div>
			<CommitSection />
		</div>
	);
};

export default FaqsPage;
