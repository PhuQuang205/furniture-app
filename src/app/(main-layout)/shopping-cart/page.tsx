"use client";

import { useEffect, useState } from "react";
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import Link from "next/link";
import {
	getAllCart,
	PropCart,
	removeCartItem,
	updateCart,
} from "@/lib/services/cartService";
import { toast } from "sonner";

export default function ShoppingCart() {
	const [cartData, setCartData] = useState<{
		items: PropCart[];
		totalItems: number;
		subTotal: number;
	} | null>(null);

	const [loading, setLoading] = useState(false);
	console.log(loading)
	useEffect(() => {
		const fetchCart = async () => {
			setLoading(true);
			try {
				const res = await getAllCart();
				setCartData(res);
			} catch (err) {
				console.error("Lỗi khi load giỏ hàng:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchCart();
	}, []);

	const handleIncrease = async (id: number) => {
		setCartData((prev) => {
			if (!prev) return prev;
			const updatedItems = prev.items.map((item) =>
				item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
			);
			const subTotal = updatedItems.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
			const totalItems = updatedItems.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return { ...prev, items: updatedItems, subTotal, totalItems };
		});

		try {
			const currentItem = cartData?.items.find((item) => item.productId === id);
			if (currentItem) {
				const newCartUpdate = {
					productId: currentItem.productId,
					quantity: currentItem.quantity + 1,
				};
				const res = await updateCart(newCartUpdate);
				console.log("✅ Update success:", res.status);
			}
		} catch (err) {
			console.error("❌ Update failed:", err);
		}
	};

	const handleDecrease = async (id: number) => {
		setCartData((prev) => {
			if (!prev) return prev;
			const updatedItems = prev.items.map((item) => {
				if (item.productId === id) {
					// Ngăn không giảm dưới 1
					const newQuantity = Math.max(item.quantity - 1, 1);
					return { ...item, quantity: newQuantity };
				}
				return item;
			});

			const subTotal = updatedItems.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0
			);
			const totalItems = updatedItems.reduce(
				(sum, item) => sum + item.quantity,
				0
			);
			return { ...prev, items: updatedItems, subTotal, totalItems };
		});

		try {
			const currentItem = cartData?.items.find((item) => item.productId === id);
			if (currentItem && currentItem.quantity > 1) {
				const newCartUpdate = {
					productId: currentItem.productId,
					quantity: currentItem.quantity - 1,
				};
				const res = await updateCart(newCartUpdate);
				if (res.status === 200) {
					toast.success("Cập nhật giỏ hàng thành công!");
				}
			} else {
				toast.info("Số lượng tối thiểu là 1!");
			}
		} catch (err) {
			console.error("❌ Update failed:", err);
		}
	};

	const handleRemove = async (id: number) => {
		if (!cartData) return;

		try {
			const removeItem = cartData.items.find((item) => item.productId === id);
			setLoading(true);
			const res = await removeCartItem(id);
			if (res.status === 204) {
				const updatedItems = cartData.items.filter(
					(item) => item.productId !== id
				);
				const subTotal = updatedItems.reduce(
					(sum, item) => sum + item.price * item.quantity,
					0
				);
				const totalItems = updatedItems.reduce(
					(sum, item) => sum + item.quantity,
					0
				);
				setCartData({ ...cartData, items: updatedItems, subTotal, totalItems });

				toast.success(`Đã xóa ${removeItem?.productName} khỏi giỏ hàng!`);
			}
		} catch (err) {
			console.log("Error here: ", err);
		} finally {
			setLoading(false);
		}
	};

	const subtotal =
		cartData?.items?.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		) ?? 0;

	const total = subtotal;

	return (
		<div>
			<BreadcrumbHeader
				title="Giỏ hàng"
				breadcrumbs={[{ label: "Trang chủ", href: "/" }, { label: "Giỏ hàng" }]}
			/>
			<div className="container mx-auto py-16 px-4">
				<div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
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
								{cartData?.items.map((cart) => (
									<TableRow key={cart.productId}>
										<TableCell>
											<Button
												variant="ghost"
												size="icon"
												onClick={() => handleRemove(cart.productId)}
											>
												<X className="size-5 text-gray-500"/>
											</Button>
										</TableCell>

										<TableCell>
											<div className="flex items-center gap-4">
												<div
													className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
													<Image
														src={cart.productImageUrl}
														alt={cart.productName}
														fill
														className="object-cover"
														loading="lazy"
													/>
												</div>
												<div>
													<h3 className="font-medium text-gray-900">
														{cart.productName}
													</h3>
												</div>
											</div>
										</TableCell>

										<TableCell className="font-medium text-gray-800">
											{cart.price.toLocaleString()} VNĐ
										</TableCell>

										<TableCell>
											<div
												className="flex items-center gap-1 border border-gray-300 rounded-full h-9 w-fit">
												<div
													className="rounded-l-full px-2 hover:bg-gray-100 cursor-pointer border-r border-gray-300 h-full flex items-center"
													onClick={() => handleDecrease(cart.productId)}
												>
													<Minus className="size-4"/>
												</div>
												<span className="w-5 text-center">{cart.quantity}</span>
												<div
													className="rounded-r-full px-2 hover:bg-gray-100 cursor-pointer border-l border-gray-300 h-full flex items-center"
													onClick={() => handleIncrease(cart.productId)}
												>
													<Plus className="size-4"/>
												</div>
											</div>
										</TableCell>

										<TableCell className="font-semibold text-gray-900">
											{(cart.price * cart.quantity).toLocaleString()} VNĐ
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>

						<div className="flex flex-wrap items-center justify-between gap-3 border-t px-4 py-4">
							<Button
								variant="link"
								className="text-greenly underline-offset-4 underline cursor-pointer"
							>
								Xóa toàn bộ giỏ hàng
							</Button>
						</div>
					</div>

					<Card className="h-fit rounded-xl">
						<CardHeader>
							<CardTitle>Tóm tắt đơn hàng</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2 text-sm text-gray-700">
							<div className="flex justify-between">
								<span>Số lượng sản phẩm</span>
								<span>{cartData?.totalItems}</span>
							</div>
							<div className="flex justify-between">
								<span>Tạm tính</span>
								<span>{cartData?.subTotal.toLocaleString()} VNĐ</span>
							</div>
							<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
								<span>Tổng cộng</span>
								<span>{total.toLocaleString()} VNĐ</span>
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
