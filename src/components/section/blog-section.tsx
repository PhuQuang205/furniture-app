import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ARTICLES } from "@/context";
import { CardBlog } from "@/components/CardBlog";

const BlogSection = () => {
	return (
		<section className="container mx-auto">
			<div className="py-8 lg:py-16 px-8 lg:px-4">
				<div className="flex items-center justify-between my-4">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Tin tức & bài viết</p>
						</div>
						<h1 className="text-4xl font-semibold">
							<span className="text-greenly">Bài viết</span> mới nhất
						</h1>
					</div>
					<div className="max-w-82">
						<Button className="h-12">
							Xem tất cả các bài viết{" "}
							<span>
								<ArrowRight className="size-5" />
							</span>
						</Button>
					</div>
				</div>
				<div className="flex overflow-x-scroll no-scrollbar">
					<div className="flex-none flex gap-4 lg:gap-8">
						{ARTICLES.map((article) => (
							<CardBlog key={article.id} blog={article} className="w-[450px]" />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogSection;
