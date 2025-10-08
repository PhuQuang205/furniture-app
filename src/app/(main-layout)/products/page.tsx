"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import { CardProduct } from "@/components/CardProduct";
import { getAllProducts, sortProducts } from "@/lib/services/productService";
import { PropsProducts } from "@/lib/services/productService";
import { ProductSort } from "@/components/ProductSort";
import { FilterSidebar } from "@/components/FilterSidebar";

const ShopPage = () => {
	const [products, setProducts] = useState<PropsProducts[]>([]);
	const [loading, setLoading] = useState(false);
	const [sortDir, setSortDir] = useState<"asc" | "desc" | null>(null);

	useEffect(() => {
		const fetchInitialProducts = async () => {
			try {
				setLoading(true);
				const data = await getAllProducts();
				setProducts(data.data || data);
			} catch (err) {
				console.error(err);
				toast.error("Không thể tải danh sách sản phẩm");
			} finally {
				setLoading(false);
			}
		};

		fetchInitialProducts();
	}, []);

	useEffect(() => {
		if (!sortDir) return;

		const fetchSortedProducts = async () => {
			try {
				setLoading(true);
				const data = await sortProducts("finalPrice", sortDir);
				setProducts(data?.data || []);
			} catch (err) {
				console.error(err);
				toast.error("Lỗi khi sắp xếp sản phẩm");
			} finally {
				setLoading(false);
			}
		};

		fetchSortedProducts();
	}, [sortDir]);

	const handleSortChange = async (value: string) => {
		if (value === "price-low") {
			setSortDir("asc");
		} else if (value === "price-high") {
			setSortDir("desc");
		} else {
			setSortDir(null);
			try {
				setLoading(true);
				const data = await getAllProducts();
				setProducts(data.data || data);
			} catch (err) {
				console.error(err);
				toast.error("Không thể tải danh sách sản phẩm");
			} finally {
				setLoading(false);
			}
		}
	};

	return (
		<>
			<BreadcrumbHeader
				title="Cửa hàng"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Cửa hàng" }]}
			/>
			<div className="container mx-auto px-4 py-8">
				<div className="flex gap-8">
					<FilterSidebar onCheckedChange={(products) => setProducts(products)} />
					<div className="flex-1 space-y-6">
						<ProductSort onSortChange={handleSortChange} />
						<div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
							{loading
								? "Đang tải sản phẩm..."
								: products.map((product) => (
										<CardProduct key={product.id} product={product} />
								  ))}
						</div>
					</div>
				</div>
			</div>

			<CommitSection />
		</>
	);
};

export default ShopPage;
