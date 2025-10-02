import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ARTICLES } from "@/context";
import Link from "next/link";

export const BlogSection = () => {
	return (
		<section className="container mx-auto">
			<div className="py-8 lg:py-16 px-8 lg:px-4">
				{/* Phần tiêu đề */}
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
				{/* Phần nội dung */}
				<div className="flex justify-between gap-8">
					{ARTICLES.map((article) => (
						<div key={article.id} className="">
							{/* Article Image */}
							<div className="relative w-full h-[350px] rounded-xl overflow-hidden">
								<Image
									src={article.image || "/placeholder.svg"}
									alt={article.title}
									width={400}
									height={250}
									className="size-full object-cover"
								/>
								<div className="absolute bg-yelly bottom-0 left-1/2 -translate-x-1/2 border-2 rounded-t-xl border-white px-4 pt-2">
									<p className="text-black px-3 py-1 text-sm font-medium">
										{article.date}
									</p>
								</div>
							</div>

							{/* Article Content */}
							<div className="py-4">
								<h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
									{article.title}
								</h3>
								<p className="text-black/80 text-sm mb-4 leading-relaxed">
									{article.description}
								</p>
								<Link
									href="#"
									className="underline text-greenly hover:text-greenly/80 font-medium underline-offset-4"
								>
									Read More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
