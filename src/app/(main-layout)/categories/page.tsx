"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { toast } from "sonner";

import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section";

import { PropsCategory } from "@/lib/services/categoryService";
import { getCategories } from "@/lib/services/categoryService";
import Link from "next/link";

const CategoryPage = () => {
	const [categrories, setCategories] = useState<PropsCategory[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const data = await getCategories();
				setCategories(data);
			} catch (error) {
				console.error("Lỗi khi tải danh mục:", error);
				toast.error("Không thể tải danh mục");
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	return (
		<>
			<BreadcrumbHeader
				title="Bộ sưu tập"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Bộ sưu tập" },
				]}
			/>

			<div className="container mx-auto py-8 lg:py-16 px-8 lg:px-4">
				<div className="flex justify-center items-center flex-col gap-4 mb-8 lg:mb-16">
					<div className="inline-flex items-center gap-2">
						<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
						<p className="text-base font-semibold">Bộ sưu tập nổi bật</p>
					</div>
					<h2 className="text-4xl font-bold text-black text-center">
						<span className="text-greenly">Khám phá</span> phong cách sống của
						bạn.
					</h2>
				</div>

				<div className="flex gap-6 overflow-x-auto md:overflow-visible no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-10">
					{loading
						? "Loading..."
						: categrories.map((category) => (
								<Link key={category.id} href={`/categories/${category.id}`}>
									<div className="flex-none md:flex-initial lg:w-[500px] md:w-[300px] flex flex-col">
										<div className="size-[300px] rounded-full overflow-hidden">
											<Image
												src={
													category.image ||
													"https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
												}
												alt={category.alias}
												width={300}
												height={300}
												className="object-cover size-full rounded-full"
											/>
										</div>
										<p className="text-sm font-medium text-black/60 text-left">
											{category.name}
										</p>
									</div>
								</Link>
						  ))}
				</div>
			</div>

			<CommitSection />
		</>
	);
};

export default CategoryPage;
