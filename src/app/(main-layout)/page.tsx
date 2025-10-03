import { BannerSection } from "@/components/section/banner-section";
import { BlogSection } from "@/components/section/blog-section";
import { CommitSection } from "@/components/section/commit-section";
import { FaqsSection } from "@/components/section/faqs-section";
import { IntroCategorySection } from "@/components/section/intro-category-section";
import { IntroProductSection } from "@/components/section/intro-product-section";
import { TestimonialSection } from "@/components/section/testimonial-section";
import { TextRunSection } from "@/components/section/text-run-section";
import { TodayDealSection } from "@/components/section/today-deal-section";

export default function Home() {
	return (
		<>			
			<BannerSection />
			<CommitSection />
			<IntroCategorySection />
			<IntroProductSection />
			<TextRunSection />
			<TodayDealSection />
			<TestimonialSection />
			<BlogSection />
			<FaqsSection />
		</>
	);
}
