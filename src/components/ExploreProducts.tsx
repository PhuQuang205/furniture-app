"use client";

import { PropsProducts } from "@/lib/services/productService";
import CardProduct from "@/components/CardProduct";

interface ExploreProductsProps {
	products: PropsProducts[];
}

const ExploreProducts = ({ products }: ExploreProductsProps) => {
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

				{/* ✅ Hiển thị danh sách sản phẩm liên quan */}
				<div className="flex overflow-x-scroll no-scrollbar">
					<div className="flex-none flex gap-4">
						{products.length === 0 ? (
							<p className="text-gray-500">Không có sản phẩm liên quan.</p>
						) : (
							products.map((product) => (
								<div key={product.id} className="w-96">
									<CardProduct product={product} />
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExploreProducts;
