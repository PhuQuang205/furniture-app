import {
	BannerSection,
	BlogSection,
	CommitSection,
	FaqsSection,
	IntroCategorySection,
	IntroProductSection,
	TextRunSection,
	TodayDealSection,
	TestimonialSection,
} from "@/components/section";

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
