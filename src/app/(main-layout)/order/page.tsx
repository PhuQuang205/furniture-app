"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download } from "lucide-react";
import BreadcrumbHeader from "@/components/breadcrumb-header";

const order = {
	id: "#SGDT1254FD",
	payment: "Paypal",
	transaction: "TR5425SFE",
	date: "24 Tháng 4, 2024",
	products: [
		{
			id: 1,
			name: "Wooden Sofa Chair",
			color: "Grey",
			price: 320,
			image:
				"https://i.pinimg.com/1200x/2f/e8/26/2fe826f959d369384636615a623076f0.jpg",
		},
		{
			id: 2,
			name: "Red Gaming Chair",
			color: "Black",
			price: 180,
			image:
				"https://i.pinimg.com/736x/f9/37/b6/f937b6a41285b8efceeb566404f60d28.jpg",
		},
		{
			id: 3,
			name: "Swivel Chair",
			color: "Light Brown",
			price: 60,
			image:
				"https://i.pinimg.com/1200x/27/b1/85/27b185d79bc39fdc02f6d3b7977ba4d5.jpg",
		},
		{
			id: 4,
			name: "Circular Sofa Chair",
			color: "Brown",
			price: 180,
			image:
				"https://i.pinimg.com/1200x/59/3e/11/593e11ac617e0cea5ba1585c62569262.jpg",
		},
	],
	shipping: 0,
	taxes: 0,
	discount: 100,
	total: 640,
};

const OrderCompleted = () => {
	return (
		<div>
			<BreadcrumbHeader
				title="Hoàn tất đơn hàng"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Hoàn tất đơn hàng" },
				]}
			/>
			<div className="container mx-auto px-4 py-10 max-w-4xl">
				{/* Success Message */}
				<div className="text-center space-y-2 mb-8">
					<div className=" bg-yelly inline-flex rounded-full p-3">
						<Check className="mx-auto size-10 text-black" />
					</div>
					<h1 className="text-2xl font-bold text-gray-900">
						Đơn hàng của bạn đã hoàn tất!
					</h1>
					<p className="text-gray-600 text-sm">
						Cảm ơn bạn. Đơn hàng của bạn đã được tiếp nhận.
					</p>
				</div>

				{/* Order Info Bar */}
				<div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-yelly rounded-xl p-5 text-sm text-gray-800">
					{/* Order Info Items */}
					<div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10 items-center">
						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">Order ID</p>
							<p className="font-semibold text-gray-900">{order.id}</p>
						</div>

						<div className="hidden md:block h-8 w-px bg-gray-300 opacity-50" />

						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">Payment Method</p>
							<p className="font-semibold text-gray-900">{order.payment}</p>
						</div>

						<div className="hidden md:block h-8 w-px bg-gray-300 opacity-50" />

						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">Transaction ID</p>
							<p className="font-semibold text-gray-900">{order.transaction}</p>
						</div>

						<div className="hidden md:block h-8 w-px bg-gray-300 opacity-50" />

						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">
								Estimated Delivery Date
							</p>
							<p className="font-semibold text-gray-900">{order.date}</p>
						</div>
					</div>

					<Button className="flex items-center mt-4 md:mt-0 bg-greenly cursor-pointer h-12">
            <Download className="size-5 text-white" />
						Tải hóa đơn
					</Button>
				</div>

				{/* Order Details */}
				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Chi tiết đơn hàng</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="border-b pb-2 mb-2 font-medium text-gray-700 flex justify-between">
							<span>Sản phẩm</span>
							<span>Tạm tính</span>
						</div>

						{/* Products */}
						{order.products.map((p) => (
							<div
								key={p.id}
								className="flex items-center justify-between py-2 border-b last:border-0"
							>
								<div className="flex items-center gap-3">
									<div className="relative h-14 w-14 rounded-md overflow-hidden bg-gray-100">
										<Image
											src={p.image}
											alt={p.name}
											fill
											className="object-cover"
										/>
									</div>
									<div>
										<p className="font-medium text-gray-900">{p.name}</p>
										<p className="text-sm text-gray-500">Màu: {p.color}</p>
									</div>
								</div>
								<p className="font-medium text-gray-800">
									${p.price.toFixed(2)}
								</p>
							</div>
						))}

						{/* Totals */}
						<div className="pt-3 text-sm text-gray-700 space-y-1">
							<div className="flex justify-between">
								<span>Vận chuyển</span>
								<span>${order.shipping.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Thuế</span>
								<span>${order.taxes.toFixed(2)}</span>
							</div>
							<div className="flex justify-between text-red-600">
								<span>Giảm giá</span>
								<span>- ${order.discount.toFixed(2)}</span>
							</div>
							<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
								<span>Tổng cộng</span>
								<span>${order.total.toFixed(2)}</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default OrderCompleted;
