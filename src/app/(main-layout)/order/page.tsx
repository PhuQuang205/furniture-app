"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download } from "lucide-react";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import {
	getOrderItemsLatest,
	Order,
} from "@/lib/services/orderService";
import { useEffect, useState } from "react";


const OrderCompleted = () => {
	const [newOrder, setNewOrder] = useState<Order>();

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const res = await getOrderItemsLatest();
				setNewOrder(res[0]);
			} catch (err) {
				console.error("Error fetching orders:", err);
			}
		};
		fetchOrders();
	}, []);

	return (
		<div>
			<BreadcrumbHeader
				title="Hoàn tất đơn hàng"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Hoàn tất đơn hàng" },
				]}
			/>
			<div className="container mx-auto py-4 lg:py-8 px-8 lg:px-4">
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

				<div className="flex flex-wrap md:flex-nowrap items-center justify-between bg-yelly rounded-xl p-5 text-sm text-gray-800">
					<div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-10 items-center">
						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">Mã đơn hàng</p>
							<p className="font-semibold text-black max-sm:text-sm text-center">
								#{newOrder?.id}
							</p>
						</div>

						<div className="hidden md:block h-8 w-px bg-black opacity-50" />

						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">
								Phương thức thanh toán
							</p>
							<p className="font-semibold text-black max-sm:text-md text-center">
								{newOrder?.paymentMethod}
							</p>
						</div>

						<div className="hidden md:block h-8 w-px bg-black opacity-50" />

						<div className="flex flex-col">
							<p className="text-gray-700 font-medium">Trạng thái</p>
							<p className="font-semibold text-black max-sm:text-md tex">
								{newOrder?.paymentStatus}
							</p>
						</div>
					</div>

					<Button className="flex items-center mt-4 md:mt-0 bg-greenly cursor-pointer h-12">
						<Download className="size-5 text-white" />
						Tải hóa đơn
					</Button>
				</div>

				<Card className="mt-6">
					<CardHeader>
						<CardTitle>Chi tiết đơn hàng</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="pb-2 mb-2 font-medium text-gray-700 flex justify-between">
							<span>Sản phẩm</span>
							<span>Tạm tính</span>
						</div>

						{newOrder?.details.map((p) => (
							<div
								key={p.productId}
								className="flex items-center justify-between py-4 border-b border-black"
							>
								<div className="flex items-center gap-3">
									<div className="relative h-14 w-14 rounded-md overflow-hidden bg-gray-100">
										<Image
											src={p.imageUrl}
											alt={p.productName}
											fill
											sizes="(max-width: 768px) 64px, (max-width: 1200px) 80px, 96px"
											className="object-cover"
											loading="lazy"
										/>
									</div>
									<div>
										<p className="font-medium text-black max-sm:text-sm">
											{p.productName}
										</p>
									</div>
								</div>
								<p className="font-medium max-sm:text-sm text-gray-800">
									${p.price.toLocaleString()} VNĐ
								</p>
							</div>
						))}

						<div className="pt-8 text-sm text-gray-700">
							<div className="flex justify-between font-semibold text-gray-900 ">
								<span>Tổng giá sản phẩm</span>
								<span>{newOrder?.productCost.toLocaleString()} VNĐ</span>
							</div>
							<div className="flex justify-between font-semibold text-gray-900 py-4">
								<span>Tiền ship</span>
								<span>{newOrder?.shippingCost.toLocaleString()} VNĐ</span>
							</div>
							<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
								<span>Tổng cộng</span>
								<span>{newOrder?.total.toLocaleString()} VNĐ</span>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
			<CommitSection />
		</div>
	);
};

export default OrderCompleted;
