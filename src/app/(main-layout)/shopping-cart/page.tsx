"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import Link from "next/link";

interface Product {
	id: number;
	name: string;
	color: string;
	price: number;
	image: string;
	quantity: number;
}

export default function ShoppingCart() {
	const [products, setProducts] = useState<Product[]>([
		{
			id: 1,
			name: "Ghế Sofa Gỗ",
			color: "Xám",
			price: 80,
			image: "https://i.pinimg.com/1200x/2f/e8/26/2fe826f959d369384636615a623076f0.jpg",
			quantity: 4,
		},
		{
			id: 2,
			name: "Ghế Gaming Đỏ",
			color: "Đen",
			price: 90,
			image: "https://i.pinimg.com/736x/f9/37/b6/f937b6a41285b8efceeb566404f60d28.jpg",
			quantity: 2,
		},
		{
			id: 3,
			name: "Ghế Xoay",
			color: "Nâu nhạt",
			price: 60,
			image: "https://i.pinimg.com/1200x/27/b1/85/27b185d79bc39fdc02f6d3b7977ba4d5.jpg",
			quantity: 1,
		},
		{
			id: 4,
			name: "Ghế Sofa Tròn",
			color: "Nâu",
			price: 90,
			image: "https://i.pinimg.com/1200x/59/3e/11/593e11ac617e0cea5ba1585c62569262.jpg",
			quantity: 2,
		},
	]);

	const handleIncrease = (id: number) =>
		setProducts((prev) =>
			prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
		);

	const handleDecrease = (id: number) =>
		setProducts((prev) =>
			prev.map((p) =>
				p.id === id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
			)
		);

	const handleRemove = (id: number) =>
		setProducts((prev) => prev.filter((p) => p.id !== id));

	const subtotal = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

	const couponDiscount = 100;
	const total = subtotal - couponDiscount;

	return (
		<div>
			<BreadcrumbHeader
				title="Giỏ hàng"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Giỏ hàng" }]}
			/>
			<div className="container mx-auto py-10 px-4">
				<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
					{/* Bảng giỏ hàng */}
					<div className="overflow-hidden rounded-xl bg-white shadow-sm">
						<Table>
							<TableHeader>
								<TableRow className="bg-yelly">
									<TableHead></TableHead>
									<TableHead>Sản phẩm</TableHead>
									<TableHead>Giá</TableHead>
									<TableHead>Số lượng</TableHead>
									<TableHead>Tạm tính</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{products.map((product) => (
									<TableRow key={product.id}>
										<TableCell>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleRemove(product.id)}
											>
												<X className="h-5 w-5 text-gray-500" />
											</Button>
										</TableCell>

										<TableCell>
											<div className="flex items-center gap-4">
												<div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
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
														Màu sắc: {product.color}
													</p>
												</div>
											</div>
										</TableCell>

										<TableCell className="font-medium text-gray-800">
											${product.price.toFixed(2)}
										</TableCell>

										<TableCell>
											<div className="flex items-center gap-1 border border-gray-300 rounded-full h-9 w-fit">
												<div
													className="rounded-l-full px-2 hover:bg-gray-100 cursor-pointer border-r border-gray-300 h-full flex items-center"
													onClick={() => handleDecrease(product.id)}
												>
													<Minus className="size-4" />
												</div>
												<span className="w-5 text-center">
													{product.quantity}
												</span>
												<div
													className="rounded-r-full px-2 hover:bg-gray-100 cursor-pointer border-l border-gray-300 h-full flex items-center"
													onClick={() => handleIncrease(product.id)}
												>
													<Plus className="size-4" />
												</div>
											</div>
										</TableCell>

										<TableCell className="font-semibold text-gray-900">
											${(product.price * product.quantity).toFixed(2)}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						{/* Footer: Mã giảm giá */}
						<div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-4">
							<div className="flex items-center gap-2">
								<Input placeholder="Nhập mã giảm giá" className="w-40" />
								<Button className="bg-[#2F5233] text-white hover:bg-[#243F26]">
									Áp dụng
								</Button>
							</div>
							<Button
								variant="link"
								className="text-greenly underline-offset-4 underline cursor-pointer" 
							>
								Xóa toàn bộ giỏ hàng
							</Button>
						</div>
					</div>

					{/* Tóm tắt đơn hàng */}
					<Card className="h-fit rounded-xl">
						<CardHeader>
							<CardTitle>Tóm tắt đơn hàng</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm text-gray-700">
							<div className="flex justify-between">
								<span>Số lượng sản phẩm</span>
								<span>{products.length}</span>
							</div>
							<div className="flex justify-between">
								<span>Tạm tính</span>
								<span>${subtotal.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Phí vận chuyển</span>
								<span>$0.00</span>
							</div>
							<div className="flex justify-between">
								<span>Thuế</span>
								<span>$0.00</span>
							</div>
							<div className="flex justify-between text-red-600">
								<span>Giảm giá</span>
								<span>- ${couponDiscount.toFixed(2)}</span>
							</div>
							<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
								<span>Tổng cộng</span>
								<span>${total.toFixed(2)}</span>
							</div>
							<Button className="mt-4 w-full rounded-full bg-greenly text-white hover:bg-[#243F26]">
								<Link href="/shopping-cart/checkout">Tiến hành thanh toán</Link>
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
			<CommitSection />
		</div>
	);
}
