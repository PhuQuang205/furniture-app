import { CommitSection } from "@/components/section/commit-section";
import { ARTICLES } from "@/context";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CardBlog } from "@/components/CardBlog";

const BlogPage = () => {
	return (
		<div>
			<BreadcrumbHeader
				title="Bài viết của chúng tôi"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Bài viết" }]}
			/>
			{/* Phần nội dung */}
            <div className="container mx-auto px-8 lg:px-4 py-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{ARTICLES.map((article) => (
						<CardBlog key={article.id} blog={article}  className="" />
					))}
				</div>
            </div>

            <CommitSection/>
		</div>
	);
};

export default BlogPage;
