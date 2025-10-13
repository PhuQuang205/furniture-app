"use client";

// import { useDispatch } from "react-redux";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	ChevronLeft,
	ChevronRight,
	Heart,
	Facebook,
	Twitter,
	Share2,
	Instagram,
	Star,
	Minus,
	Plus,
	ShoppingCart,
	Wallet,
} from "lucide-react";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { PropDetailProduct } from "@/lib/services/productService";
import { Badge } from "@/components/ui/badge";
import { addToCart } from "@/lib/services/cartService";
// import { addItem as addToCartAction } from "@/lib/redux/cartSlice";
import { toast } from "sonner";

interface DetailProductCardProps {
	product?: PropDetailProduct;
}

const tabs = [
	{ key: "description", label: "Mô tả sản phẩm" },
	{ key: "additional", label: "Thông tin bổ sung" },
	{ key: "review", label: "Đánh giá" },
];

export const DetailProductCard = ({ product }: DetailProductCardProps) => {
	// const dispatch = useDispatch();

	const route = useRouter();
	const [currentImage, setCurrentImage] = useState(0);
	const [quantity, setQuantity] = useState(1);
	const [activeTab, setActiveTab] = useState("description");
	const [isWishlisted, setIsWishlisted] = useState(false);

	const productImages = product?.images?.map((img) => img.imageUrl) || [
		"https://i.pinimg.com/736x/03/5c/40/035c409a7450fe3149baec88d278d8b0.jpg",
	];

	const handlePrevImage = () => {
		setCurrentImage((prev) =>
			prev === 0 ? productImages.length - 1 : prev - 1
		);
	};

	const handleNextImage = () => {
		setCurrentImage((prev) =>
			prev === productImages.length - 1 ? 0 : prev + 1
		);
	};

	const decreaseQuantity = () => {
		if (quantity > 1) setQuantity(quantity - 1);
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const handleAddCart = async () => {
		if (!product) return;

		// const newCartItem = {
		// 	productId: product.id,
		// 	productName: product.name,
		// 	price: product.finalPrice,
		// 	quantity: quantity,
		// };

		// dispatch(addToCartAction(newCartItem));
		try {
			const res = await addToCart({
				productId: Number(product.id),
				quantity: quantity,
			});

			if (res || res.message) {
				toast.success(`Đã thêm ${product.name} vào giỏ hàng`);
			} else {
				toast.error("Thêm sản phẩm vào giỏ hàng thất bại!");
			}
		} catch (error) {
			console.error("❌ Lỗi thêm giỏ hàng:", error);
			toast.error("Thêm sản phẩm vào giỏ hàng thất bại!");
		}
	};

	const handleBuyProduct = () => {
		handleAddCart();
		route.push("/shopping-cart/checkout");
	};

	return (
		<div className="lg:px-4  8 py-8 lg:py-16">
			<div className="container mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden mb-8">
					<div className="p-8">
						<div className="relative bg-gray-100 rounded-lg mb-4 aspect-square flex items-center justify-center">
							<Image
								src={productImages[currentImage]}
								alt={product?.name || "Product Image"}
								className="object-contain w-full h-full p-8"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
								priority
							/>

							<button
								onClick={handlePrevImage}
								className="absolute left-4 top-1/2 -translate-y-1/2 size-12 bg-greenly hover:bg-yelly cursor-pointer text-white hover:text-black rounded-lg flex items-center justify-center duration-300 transition-colors"
							>
								<ChevronLeft className="size-6" />
							</button>
							<button
								onClick={handleNextImage}
								className="absolute right-4 top-1/2 -translate-y-1/2 size-12 bg-yelly hover:bg-greenly cursor-pointer text-black hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300"
							>
								<ChevronRight className="size-6" />
							</button>
						</div>

						{/* Thumbnail Images */}
						<div className="grid grid-cols-4 gap-4">
							{productImages.map((image, index) => (
								<button
									key={index}
									onClick={() => setCurrentImage(index)}
									className={cn(
										"relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-all",
										currentImage === index
											? "border-green-900"
											: "border-transparent hover:border-gray-300"
									)}
								>
									<Image
										src={image}
										alt={`Thumbnail ${index + 1}`}
										fill
										className="object-contain p-2"
									/>
								</button>
							))}
						</div>
					</div>

					<div className="">
						<p className="text-gray-500 text-sm mb-2">
							{product?.category.name || "Category"}
						</p>

						<div className="flex items-center gap-2 mb-4">
							<h1 className="text-4xl font-semibold max-w-sm text-black">
								{product?.name || "Unnamed Product"}
							</h1>
							<Badge
								className={cn(
									"px-3 py-1 text-sm rounded-full border",
									product?.inStock
										? "text-green-700 border-green-500 bg-green-100"
										: "text-red-700 border-red-500 bg-red-100"
								)}
							>
								{product?.inStock ? "Còn hàng" : "Hết hàng"}
							</Badge>
						</div>

						{/* ⭐ Rating */}
						<div className="flex items-center gap-2 mb-4">
							<div className="flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<Star key={star} className="fill-yelly text-yelly" />
								))}
							</div>
							<span className="text-gray-900 font-medium">4.9</span>
						</div>

						{/* 💰 Price */}
						<div className="flex items-center gap-3 mb-4">
							<span className="text-3xl font-bold text-gray-900">
								{product?.finalPrice?.toLocaleString() || "0.00"} VND
							</span>
							{product?.discountPercent ? (
								<span className="text-2xl text-gray-400 line-through">
									{product?.price?.toLocaleString()} VND
								</span>
							) : null}
						</div>

						<p className="text-gray-600 mb-6 leading-relaxed">
							{product?.shortDescription ||
								"This premium product combines quality with style, perfect for your needs."}
						</p>
						<div className="flex items-center max-sm:justify-between gap-4 mb-4">
							<div className="inline-flex items-center border border-gray-300 rounded-full overflow-hidden h-10 select-none">
								<button
									onClick={decreaseQuantity}
									className="flex items-center justify-center w-10 h-full text-gray-700 cursor-pointer"
								>
									<Minus className="w-4 h-4" />
								</button>

								<span className="w-12 text-center font-medium border-x border-gray-300">
									{quantity}
								</span>

								<button
									onClick={increaseQuantity}
									className="flex items-center justify-center w-10 h-full text-gray-700 cursor-pointer"
								>
									<Plus className="w-4 h-4" />
								</button>
							</div>
							<div>
								<button
									onClick={() => setIsWishlisted(!isWishlisted)}
									className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
								>
									<Heart
										className={cn(
											"size-5",
											isWishlisted
												? "fill-red-500 text-red-500"
												: "text-gray-600"
										)}
									/>
								</button>
							</div>
						</div>
						<div className="flex items-center max-sm:justify-between gap-4 mb-4">
							<Button
								className="bg-greenly hover:bg-greenly/80 text-white cursor-pointer  h-12 px-6"
								onClick={handleAddCart}
							>
								<ShoppingCart className="size-5" />
								Thêm vào giỏ hàng
							</Button>
							<Button
								onClick={handleBuyProduct}
								className="bg-yelly hover:bg-yelly/80 text-white cursor-pointer h-12 px-6"
							>
								<span className="text-black">Mua ngay</span>
								<Wallet className="size-5 text-black" />
							</Button>
						</div>

						<div className="flex items-center gap-3">
							<span className="text-gray-700 font-medium">Chia sẻ :</span>
							<div className="flex gap-2">
								{[Facebook, Twitter, Share2, Instagram].map((Icon, i) => (
									<button
										key={i}
										className="w-9 h-9 bg-green-900 hover:bg-green-800 text-white rounded-full flex items-center justify-center transition-colors"
									>
										<Icon className="w-4 h-4" />
									</button>
								))}
							</div>
						</div>
						<div className="bg-white rounded-lg mt-8">
							<div className="flex gap-8 border-b border-gray-200 mb-8">
								{tabs.map((tab) => (
									<button
										key={tab.key}
										onClick={() => setActiveTab(tab.key)}
										className={cn(
											"pb-4 text-md font-medium transition-colors relative",
											activeTab === tab.key
												? "text-gray-900"
												: "text-gray-400 hover:text-gray-600"
										)}
									>
										{tab.label}
										{activeTab === tab.key && (
											<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900" />
										)}
									</button>
								))}
							</div>

							{activeTab === "description" && (
								<div className="text-gray-600 leading-relaxed">
									<p>
										{product?.fullDescription || "No description available."}
									</p>
								</div>
							)}

							{activeTab === "additional" && (
								<div className="overflow-hidden rounded-xl bg-white shadow-sm">
									<Table className="border border-gray-200 rounded-lg">
										<TableHeader>
											<TableRow className="bg-yelly">
												<TableHead className="font-semibold text-gray-900 w-1/3">
													Thuộc tính
												</TableHead>
												<TableHead className="font-semibold text-gray-900">
													Thông tin
												</TableHead>
											</TableRow>
										</TableHeader>

										<TableBody>
											{product?.details.map((detail, index) => (
												<TableRow key={index}>
													<TableCell className="text-gray-600">
														{detail.name}
													</TableCell>
													<TableCell className="text-gray-800 font-medium">
														{detail.value}
													</TableCell>
												</TableRow>
											))}
										</TableBody>
									</Table>
								</div>
							)}

							{activeTab === "review" && (
								<div className="text-gray-600">No reviews yet.</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
