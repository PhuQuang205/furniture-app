"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/context";

const filters = [
	"All Products",
	"Latest Products",
	"Best Sellers",
	"Featured Products",
];

export const IntroProductSection = () => {
	const [activeFilter, setActiveFilter] = useState("Latest Products");
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
								className={
									activeFilter === filter
										? "bg-greenly hover:greenly/80 h-12 text-white rounded-full py-2"
										: "text-gray-600 h-12 hover:text-gray-900 hover:bg-gray-50 rounded-full px-6 py-2"
								}
							>
								{filter}
							</Button>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{PRODUCTS.map((product) => (
						<div
							key={product.id}
							className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 relative"
						>
							<div className="absolute top-4 left-4 z-10">
								<Badge className="bg-[color:var(--furniture-green)] text-white rounded-full px-3 py-1">
									{product.discount}% off
								</Badge>
							</div>

							<div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
								<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
										/>
									</svg>
								</button>
								<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
										/>
									</svg>
								</button>
								<button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
									<svg
										className="w-4 h-4 text-gray-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
										/>
									</svg>
								</button>
							</div>

							{/* Product Image */}
							<div className="aspect-square overflow-hidden bg-gray-50 p-8">
								<Image
									src={product.image || "/placeholder.svg"}
									alt={product.name}
									width={300}
									height={300}
									className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
								/>
							</div>

							<div className="p-4 bg-white">
								<div className="flex items-center gap-1 mb-2">
									<span className="text-yellow-400 text-lg">★</span>
									<span className="font-semibold text-gray-900">
										{product.rating}
									</span>
									<span className="text-gray-500 text-sm ml-2">
										{product.category}
									</span>
								</div>

								<h3 className="font-semibold text-gray-900 mb-2">
									{product.name}
								</h3>

								<div className="flex items-center gap-2">
									<span className="text-lg font-bold text-gray-900">
										${product.price.toFixed(2)}
									</span>
									{product.originalPrice && (
										<span className="text-sm text-gray-500 line-through">
											${product.originalPrice.toFixed(2)}
										</span>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
