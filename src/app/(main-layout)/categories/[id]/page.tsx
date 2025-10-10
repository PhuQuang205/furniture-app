"use client";
import { useEffect, useState } from "react";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { useParams } from "next/navigation";
import {
	getProductByCategoryId,
	PropsProducts,
} from "@/lib/services/productService";
import { CardProduct } from "@/components/CardProduct";
import { CommitSection } from "@/components/section/commit-section";
import { getCategories, PropsCategory } from "@/lib/services/categoryService";
import Link from "next/link";

const DetailCategoty = () => {
	const { id } = useParams();
	const [products, setProducts] = useState<PropsProducts[]>([]);
	const [categories, setCategories] = useState<PropsCategory[]>([]);
	const [categoryCurrent, setCategoryCurrent] = useState<PropsCategory>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProductById = async () => {
			setLoading(true);
			try {
				const res = await getProductByCategoryId(Number(id));
				const resCate = setProducts(res.data);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		if (id) fetchProductById();
	}, [id]);

	useEffect(() => {
		const fetchCategories = async () => {
			setLoading(true);
			try {
				const res = await getCategories();
				setCategories(res);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
	}, []);

	useEffect(() => {
		if (categories.length > 0 && id) {
			const cate = categories.find((item) => item.id === Number(id));
			setCategoryCurrent(cate);
		}
	}, [categories, id]);

	return (
		<div className="overflow-hidden">
			<div className="container mx-auto px-8 lg:px-4">
				<div className="flex flex-col md:flex-row md:items-center items-start justify-between gap-8 my-8 lg:my-16">
					<div className="max-sm:w-full flex-none flex flex-col justify-center items-start">
						<h1 className="text-xl font-semibold text-black">{categoryCurrent?.name}</h1>
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink asChild>
										<Link href="/">Trang chủ</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbLink asChild>
										<Link href="">{categoryCurrent?.name}</Link>
									</BreadcrumbLink>
								</BreadcrumbItem>								
							</BreadcrumbList>
						</Breadcrumb>
					</div>
					<div className="max-md:w-full">
						<div className="flex justify-start gap-4">
							<div className="flex-none flex gap-4">
								{categories.map((item) => {
									return (
										<div key={item.id} className="flex flex-col gap-2">
											<div className="size-[300px] max-sm:size-[200px] rounded-lg overflow-hidden">
												<Image
													src={
														item.image ||
														"https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
													}
													alt={item.alias}
													width={500}
													height={500}
													className="size-full object-cover"
												/>
											</div>
											<p>{item.name}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
				<div className="py-8 lg:py-16 border-t border-gray-600">
					<div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
						{loading
							? "Đang tải sản phẩm..."
							: products.map((product) => (
									<CardProduct key={product.id} product={product} />
							  ))}
					</div>
				</div>
				<CommitSection />
			</div>
		</div>
	);
};

export default DetailCategoty;
