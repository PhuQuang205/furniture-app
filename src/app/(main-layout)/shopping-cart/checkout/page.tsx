"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import Link from "next/link";

export default function Checkout() {
	const [paymentMethod, setPaymentMethod] = useState("paypal");

	const subtotal = 740;
	const discount = 100;
	const total = subtotal - discount;

	return (
		<div>
			<BreadcrumbHeader
				title="Thanh toán"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Giỏ hàng", href: "/cart" },
					{ label: "Thanh toán" },
				]}
			/>

			<div className="container mx-auto py-10 px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
				{/* LEFT: Payment Methods */}
				<Card className="rounded-xl">
					<CardHeader>
						<CardTitle>Chọn phương thức thanh toán</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<RadioGroup
							value={paymentMethod}
							onValueChange={setPaymentMethod}
							className="space-y-3"
						>
							<label className="flex items-center justify-between border rounded-lg p-3 cursor-pointer">
								<div className="flex items-center gap-3">
									<RadioGroupItem value="paypal" />
									<span>Tài khoản ngân hàng</span>
								</div>
							</label>

							{/* COD */}
							<label className="flex items-center justify-between border rounded-lg p-3 cursor-pointer">
								<div className="flex items-center gap-3">
									<RadioGroupItem value="cod" />
									<span>Thanh toán khi nhận hàng</span>
								</div>
							</label>
						</RadioGroup>
					</CardContent>
				</Card>

				{/* RIGHT: Order Summary */}
				<Card className="h-fit rounded-xl">
					<CardHeader>
						<CardTitle>Tóm tắt đơn hàng</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm text-gray-700">
						<div className="flex justify-between">
							<span>Sản phẩm</span>
							<span>9</span>
						</div>
						<div className="flex justify-between">
							<span>Tạm tính</span>
							<span>${subtotal.toFixed(2)}</span>
						</div>
						<div className="flex justify-between">
							<span>Vận chuyển</span>
							<span>$0.00</span>
						</div>
						<div className="flex justify-between">
							<span>Thuế</span>
							<span>$0.00</span>
						</div>
						<div className="flex justify-between text-red-600">
							<span>Giảm giá</span>
							<span>- ${discount.toFixed(2)}</span>
						</div>
						<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
							<span>Tổng cộng</span>
							<span>${total.toFixed(2)}</span>
						</div>
						<Button className="mt-4 w-full rounded-full bg-[#2F5233] text-white hover:bg-[#243F26]">
							<Link href="/order">Xác nhận thanh toán</Link>
						</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
