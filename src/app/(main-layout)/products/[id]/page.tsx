"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

import { getProductById } from "@/lib/services/productService";
import { PropDetailProduct } from "@/lib/services/productService";

import { CommitSection } from "@/components/section/commit-section";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { DetailProductCard } from "@/components/DetailProductCard";
import { ExploreProducts } from "@/components/ExploreProducts";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<PropDetailProduct>();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true);
			try {
				const res = await getProductById(Number(id));
				setProduct(res);
			} catch (error) {
				console.error(error);
				toast.error("Không thể tải thông tin sản phẩm");
			} finally {
				setLoading(false);
			}
		};

		if (id) fetchProduct();
	}, [id]);

	return (
		<>
			<BreadcrumbHeader
				title="Chi tiết sản phẩm"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Bộ sưu tập", href: "/categories" },
					{
						label: `${product?.category.name}`,
						href: `/categories/${product?.category.id}`,
					},
					{ label: `${product?.name}` },
				]}
			/>
			{loading ? (
				"Đang Loading sản phẩm..."
			) : (
				<DetailProductCard product={product} />
			)}
			<ExploreProducts />
			<CommitSection />
		</>
	);
};

export default ProductDetail;
