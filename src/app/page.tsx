import { BannerSection } from "@/components/banner-section";
import { BlogSection } from "@/components/blog-section";
import { CommitSection } from "@/components/commit-section";
import { FaqsSection } from "@/components/faqs-section";
import { FooterSection } from "@/components/footer-section";
import { HeaderSection } from "@/components/header-section";
import { IntroCategorySection } from "@/components/intro-category-section";
import { IntroProductSection } from "@/components/intro-product-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { TextRunSection } from "@/components/text-run-section";
import { TodayDealSection } from "@/components/today-deal-section";
import { TopHeaderSection } from "@/components/top-header-section";

export default function Home() {
	return (
		<>
			<TopHeaderSection />
			<HeaderSection />
			<BannerSection />
			<CommitSection />
			<IntroCategorySection />
			<IntroProductSection />
			<TextRunSection />
			<TodayDealSection />
			<TestimonialSection />
			<BlogSection />
			<FaqsSection />
			<FooterSection />
		</>
	);
}
