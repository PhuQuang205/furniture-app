"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CardProduct } from "@/components/CardProduct";
import { getAllProducts } from "@/lib/services/productService";
import { toast } from "sonner";
import { PropsProducts } from "@/lib/services/productService";

const filters = [
	"All Products",
	"Latest Products",
	"Best Sellers",
	"Featured Products",
];

export const IntroProductSection = () => {
	const [activeFilter, setActiveFilter] = useState("Latest Products");
	const [products, setProducts] = useState<PropsProducts[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const data = await getAllProducts();
				setProducts(data.data);
			} catch (err: unknown) {
				toast.error("Lỗi respon products");
				console.error("Lỗi khi load products:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchProducts();
	}, []);
	return (
		<section className="container mx-auto">
			<div className="px-8 lg:px-4 py-8 lg:py-16">
				<div className="flex items-center justify-between my-4">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Sản phẩm</p>
						</div>
						<h1 className="text-4xl font-semibold">
							<span className="text-greenly">Sản phẩm</span> của chúng tôi
						</h1>
					</div>
					<div className="max-w-80">
						<p className="text-sm">
							Sản phẩm chất lượng giá siêu rẻ - chỉ cần bạn đế hốt - mua ngay
							không hết bây giờ.
						</p>
					</div>
				</div>

				<div className="flex lg:justify-center my-8 overflow-x-scroll no-scrollbar">
					<div className="flex-none flex gap-2">
						{filters.map((filter) => (
							<Button
								key={filter}
								variant={activeFilter === filter ? "default" : "outline"}
								onClick={() => setActiveFilter(filter)}
								className={cn(
									"px-6 rounded-full cursor-pointer",
									activeFilter === filter
										? "bg-greenly hover:greenly/80 text-white rounded-full border-none"
										: "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
								)}
							>
								{filter}
							</Button>
						))}
					</div>
				</div>

				<div className="flex overflow-x-scroll no-scrollbar">
					<div className="flex-none flex gap-4">
						{loading
							? "Loading ..."
							: products.map((product) => (
									<div key={product.id} className="w-96">
										<CardProduct product={product} />
									</div>
							  ))}
					</div>
				</div>
			</div>
		</section>
	);
};
