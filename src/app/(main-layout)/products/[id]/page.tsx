"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";

import {
	getAllProducts,
	getProductById,
	PropsProducts,
} from "@/lib/services/productService";
import { PropDetailProduct } from "@/lib/services/productService";

import { CommitSection } from "@/components/section";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { DetailProductCard, ExploreProducts } from "@/components";

const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState<PropDetailProduct>();
	const [related, setRelated] = useState<PropsProducts[]>([]);
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

	// 👉 Khi đã có product, gọi thêm để lấy sản phẩm liên quan
	useEffect(() => {
		const fetchRelated = async () => {
			if (!product) return;
			try {
				const all = await getAllProducts();
				console.log(all);
				const filtered = all.data.filter(
					(p: PropsProducts) => p.id !== product.id
				);
				setRelated(filtered);
			} catch (error) {
				console.error("Lỗi khi tải sản phẩm liên quan:", error);
			}
		};

		fetchRelated();
	}, [product]);

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
			<ExploreProducts products={related} />
			<CommitSection />
		</>
	);
};

export default ProductDetail;
