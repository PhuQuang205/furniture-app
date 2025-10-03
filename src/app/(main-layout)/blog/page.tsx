import Link from "next/link";
import { CommitSection } from "@/components/section/commit-section";
import { ARTICLES } from "@/context";
import Image from "next/image";
import BreadcrumbHeader from "@/components/breadcrumb-header";

const BlogPage = () => {
	return (
		<div>
			<BreadcrumbHeader
				title="Bài viết của chúng tôi"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Bài viết" }]}
			/>
			{/* Phần nội dung */}
            <div className="container mx-auto px-8 lg:px-4 py-8 lg:py-16">
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

            <CommitSection/>
		</div>
	);
};

export default BlogPage;
