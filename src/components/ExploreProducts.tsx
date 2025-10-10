"use client";

import { useState, useEffect } from "react";
import { getAllProducts, PropsProducts } from "@/lib/services/productService";
import { CardProduct } from "@/components/CardProduct";
export const ExploreProducts = () => {
	const [products, setProducts] = useState<PropsProducts[]>([]);
	const [loading, setLoading] = useState(false);
	console.log("+ Respone: ", products);
	useEffect(() => {
		const fetchProduct = async () => {
			setLoading(true);
			try {
				const res = await getAllProducts();
				setProducts(res.data);
			} catch (error) {
				console.log("Error: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProduct();
	}, []);

	return (
		<div className="container mx-auto">
			<div className="py-8 lg:py-16 px-8 lg:px-4">
				<div className="flex justify-center items-center flex-col gap-4 my-4">
					<div className="inline-flex items-center gap-2">
						<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
						<p className="text-base font-semibold">Sản phẩm liên quan</p>
					</div>
					<h2 className="text-4xl font-bold text-black text-center">
						<span className="text-greenly">Khám phá</span> sản phẩm liên quan.
					</h2>
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
		</div>
	);
};
