"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Expand, Heart, ShoppingBag, Star } from "lucide-react";
import { PropsProducts } from "@/lib/services/productService";

export interface PropProduct {
	product: PropsProducts;
}

export const CardProduct = ({ product }: PropProduct) => {
	const {
		name,
		price,
		finalPrice,
		mainImageUrl,
		categoryName,
		discountPercent,
	} = product;

	return (
		<div className="border border-gray-300 p-2 rounded-2xl group relative bg-white hover:shadow-md transition-shadow duration-300">
			{/* Badge giảm giá */}
			{discountPercent > 0 && (
				<div className="absolute top-4 left-4 z-10">
					<Badge className="bg-greenly text-white rounded-full px-3 py-2">
						Giảm {discountPercent}%
					</Badge>
				</div>
			)}

			{/* Action buttons */}
			<div
				className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 translate-y-[-10px]
				transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
			>
				<Button
					variant="destructive"
					className="size-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
				>
					<Heart className="size-5 text-red-700 fill-red-500" />
				</Button>
				<Button
					variant="destructive"
					className="size-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
				>
					<Expand className="size-5 text-black hover:text-white" />
				</Button>
				<Button
					variant="destructive"
					className="size-8 bg-white rounded-full flex items-center justify-center cursor-pointer"
				>
					<ShoppingBag className="size-5 text-black" />
				</Button>
			</div>

			{/* Hình ảnh */}
			<div className="aspect-square rounded-2xl overflow-hidden">
				<Image
					src={mainImageUrl || "/placeholder.svg"}
					alt={name}
					width={400}
					height={400}
					className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				/>
			</div>

			{/* Thông tin sản phẩm */}
			<div className="py-4">
				<div className="flex items-center justify-between mb-2">
					<p className="text-gray-500 text-sm">{categoryName}</p>
					<div className="flex items-center gap-1.5">
						<Star className="size-5 fill-yelly text-yelly" />
						<span className="font-semibold text-black">5.0</span>
					</div>
				</div>

				<h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{name}</h3>

				<div className="flex items-center gap-2">
					<span className="text-lg font-semibold text-black">
						{finalPrice.toLocaleString()}₫
					</span>
					{discountPercent > 0 && (
						<span className="text-sm text-gray-500 line-through">
							{price.toLocaleString()}₫
						</span>
					)}
				</div>
			</div>
		</div>
	);
};
