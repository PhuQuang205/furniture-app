"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Trash2, Clipboard } from "lucide-react";
import Image from "next/image";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Product {
	id: string;
	name: string;
	color: string;
	price: number;
	dateAdded: string;
	stockStatus: "Instock" | "Out of Stock";
	image: string;
}

const WishListPage = () => {
	const [products, setProducts] = useState<Product[]>([
		{
			id: "1",
			name: "Wingback Chair",
			color: "Light Brown",
			price: 180.0,
			dateAdded: "18 April 2024",
			stockStatus: "Instock",
			image: "https://i.pinimg.com/736x/b4/3b/c7/b43bc78560a66bbeb8f1201ea8f4cf6b.jpg",
		},
		{
			id: "2",
			name: "Wooden Sofa Chair",
			color: "Grey",
			price: 80.0,
			dateAdded: "17 April 2024",
			stockStatus: "Instock",
			image: "https://i.pinimg.com/1200x/5e/5f/42/5e5f42d4f58f7df2e31a30b8d7dd4688.jpg",
		},
		{
			id: "3",
			name: "Bar Stool",
			color: "Brown",
			price: 48.0,
			dateAdded: "11 April 2024",
			stockStatus: "Instock",
			image: "https://i.pinimg.com/736x/e0/a4/fb/e0a4fbf5d7fcd99d54c5f4b9caeb5003.jpg",
		},
	]);

	const [copied, setCopied] = useState(false);
	const wishlistUrl = "https://www.example.com";

	const handleRemoveProduct = (id: string) => {
		setProducts(products.filter((product) => product.id !== id));
	};

	const handleCopyLink = () => {
		navigator.clipboard.writeText(wishlistUrl);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleClearWishlist = () => {
		setProducts([]);
	};

	const handleAddAllToCart = () => {
		console.log("Adding all items to cart");
	};

	return (
		<div>
			<BreadcrumbHeader
				title="Sản phẩm yêu thích"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Yêu thích" },
				]}
			/>

			<div className="container mx-auto px-8 lg:px-4 py-8 lg:py-16">
				<div className="overflow-hidden rounded-xl bg-white shadow-sm">
					<Table>
						<TableHeader className="bg-yelly">
							<TableRow className="bg-yelly">
								<TableHead className="w-[50px]"></TableHead>
								<TableHead>Sản phẩm</TableHead>
								<TableHead>Giá</TableHead>
								<TableHead>Ngày thêm</TableHead>
								<TableHead className="text-center">Trạng thái kho hàng</TableHead>
								<TableHead className="text-center ">Hành động</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{products.map((product) => (
								<TableRow key={product.id}>
									<TableCell></TableCell>

									<TableCell>
										<div className="flex items-center gap-4">
											<div className="relative h-20 w-20 overflow-hidden rounded-md bg-gray-50">
												<Image
													src={product.image}
													alt={product.name}
													fill
													className="object-cover"
												/>
											</div>
											<div>
												<h3 className="font-medium text-gray-900">
													{product.name}
												</h3>
												<p className="text-sm text-gray-500">
													Color : {product.color}
												</p>
											</div>
										</div>
									</TableCell>

									<TableCell className="font-medium">
										${product.price.toFixed(2)}
									</TableCell>

									<TableCell>{product.dateAdded}</TableCell>

									<TableCell
										className={cn("text-center",product.stockStatus === "Instock"
												? "text-emerald-600 font-medium"
												: "text-red-500 font-medium")											
										}
									>
										{product.stockStatus}
									</TableCell>

									<TableCell className="h-full pr-8">
										<div className="flex items-center justify-end gap-2">
											<Button className="h-9 rounded-full bg-greenly text-sm font-medium text-white hover:bg-green-950 cursor-pointer">
												<ShoppingCart className="size-5 text-white" />
												Thêm vào giỏ hàng
											</Button>

											<Button
												onClick={() => handleRemoveProduct(product.id)}
												className="h-9 rounded-full bg-greenly text-sm font-medium text-white hover:bg-green-950 cursor-pointer"
											>
												<Trash2 className="size-5 text-white" />
												Xóa
											</Button>
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>

					{/* Footer Actions */}
					<div className="flex flex-col lg:flex-row items-center gap-4 border-t border-gray-100 px-6 py-6">
						<div className="flex max-sm:justify-between items-center gap-2 w-full">
							<div className="flex items-center gap-1">
								<p className="text-sm font-medium text-black">Link:</p>
								<div className="text-m hidden lg:flex items-center rounded-full px-6 border border-gray-300 h-9 text-gray-600 max-w-sm truncate text-clip">
									<p>{wishlistUrl}</p>
								</div>
							</div>
							<Button
								onClick={handleCopyLink}
								className="h-9 rounded-full bg-greenly px-6 text-sm font-medium text-white hover:bg-[#243F26]"
							>
								{copied ? (
									<>
										<Check className="size-5" />
										Đã sao chép
									</>
								) : (
									<>
										<Clipboard className="size-5" />
										Sao chép
									</>
								)}
							</Button>
						</div>

						<div className="flex items-center justify-end gap-4 w-full">
							<div								
								onClick={handleClearWishlist}
								className="text-sm font-medium whitespace-nowrap text-gray-600 underline underline-offset-2 cursor-pointer"
							>
								Xóa tất cả
							</div>
							<Button
								onClick={handleAddAllToCart}
								className="h-10 rounded-full bg-greenly px-8 text-sm font-medium text-white hover:bg-[#243F26]"
							>
								<ShoppingCart className="size-5 text-white" />
								Thêm tất
							</Button>
						</div>
					</div>
				</div>
			</div>

			<CommitSection />
		</div>
	);
};

export default WishListPage;
