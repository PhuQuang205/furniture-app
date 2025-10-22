"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import BreadcrumbHeader from "@/components/breadcrumb-header";

import { PROVINCES, Province } from "@/context/provinces";
import {
	PAYMENT_METHODS,
	CheckoutData,
	orderItems,
} from "@/lib/services/orderService";
import { WARDS, Ward } from "@/context/wards";
import {
	getAllSummary,
	getShippingFee,
	Summary,
} from "@/lib/services/orderService";
import { CommitSection } from "@/components/section/commit-section";
import { toast } from "sonner";
import { checkoutServiceStripe } from "@/lib/services/checkoutService";
const API_BASE = "http://localhost:80/api/checkout";

export default function Checkout() {
	const route = useRouter();
	const [sumary, setSumary] = useState<Summary | null>(null);
	const [filteredWards, setFilteredWards] = useState<Ward[]>([]);
	const [loading, setLoading] = useState(false);
	const [shippingFee, setShippingFee] = useState<number>(0);
	const [loadingFee, setLoadingFee] = useState(false);
	const [checkoutData, setCheckoutData] = useState<CheckoutData>({
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		addressLine: "",
		provinceCode: 0,
		provinceName: "",
		wardName: "",
		paymentMethod: "COD",
		estimatedShippingFee: 0,
	});

	const handleOrder = async () => {
		setLoading(true);
		try {
			const res = await orderItems(checkoutData);

			console.log("Response:", res);

			if (res) {
				const orderId = res.orderId;
				// route.push("/order");
				// toast.success("Tạo đơn hàng thành công!");

				if (checkoutData.paymentMethod === "COD") {
					route.push("/order");
				}

				// Nếu là thanh toán Stripe → chuyển sang trang chờ thanh toán hoặc redirect sang Stripe
				else if (checkoutData.paymentMethod === "STRIPE") {
					const res = await fetch(`${API_BASE}/stripe/create`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ orderId }),
					});

					if (!res.ok) {
						const errText = await res.text();
						throw new Error(`Stripe API lỗi: ${errText}`);
					}

					const data = await res.json();

					if (data.url) {
						// Chuyển hướng sang trang thanh toán Stripe
						window.location.href = data.url;
					} else {
						alert("Không tạo được phiên thanh toán Stripe");
						console.error("Stripe response:", data);
					}
				}
			} else {
				toast.error("Khoong duoc thanh toan!");
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("Đặt hàng thất bại!");
		} finally {
			setLoading(false);
		}
	};

	const handleSelectWard = (val: string) => {
		const ward = WARDS.find((item) => item.codename === val);
		if (ward) {
			setCheckoutData((prev) => ({ ...prev, wardName: ward?.name }));
		}
	};

	const handleProvinceChange = async (value: string) => {
		// setSelectedProvince(value);

		const province = PROVINCES.find((p: Province) => p.codename === value);

		if (province) {
			const wardsByProvince = WARDS.filter(
				(w: Ward) => w.province_code === province.code
			);
			setFilteredWards(wardsByProvince);

			setLoadingFee(true);
			try {
				const res = await getShippingFee(province.code);
				setShippingFee(res.fee ?? 0);
				setCheckoutData((pre) => ({
					...pre,
					provinceCode: province.code,
					provinceName: province.name,
					estimatedShippingFee: res.fee,
				}));
			} catch (error) {
				console.log("error", error);
				setShippingFee(0);
			} finally {
				setLoadingFee(false);
			}
		} else {
			setFilteredWards([]);
			setShippingFee(0);
		}
	};

	const handleCheckoutData = (
		field: keyof CheckoutData,
		val: string | number
	) => {
		setCheckoutData((pre) => ({ ...pre, [field]: val }));
	};

	const subtotal = sumary?.subTotal ?? 0;
	const total = subtotal + shippingFee;

	useEffect(() => {
		const fetchSumary = async () => {
			setLoading(true);
			try {
				const res = await getAllSummary();
				setSumary(res);
			} catch (error) {
				console.log("Error: ", error);
			} finally {
				setLoading(false);
			}
		};

		fetchSumary();
	}, []);

	return (
		<div>
			<BreadcrumbHeader
				title="Thanh toán"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Giỏ hàng", href: "/shopping-cart" },
					{ label: "Thanh toán" },
				]}
			/>

			<div className="container mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
				<div className="">
					<h1 className="text-xl font-semibold pb-8">Chi tiết thanh toán</h1>
					<form className="space-y-6">
						<div className="grid grid-cols-2 gap-4">
							<div className="space-y-2">
								<Label
									htmlFor="firstName"
									className="text-md font-semibold text-black"
								>
									Họ
								</Label>
								<Input
									id="firstName"
									type="text"
									placeholder="Nhập họ"
									className="h-12 border-gray-300 px-5"
									onChange={(e) =>
										handleCheckoutData("firstName", e.target.value)
									}
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="lastName"
									className="text-md font-semibold text-black"
								>
									Tên
								</Label>
								<Input
									id="lastName"
									type="text"
									placeholder="Nhập tên"
									className="h-12 px-5 border-gray-300"
									onChange={(e) =>
										handleCheckoutData("lastName", e.target.value)
									}
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="email"
								className="text-md text-black font-semibold"
							>
								Email
							</Label>
							<Input
								id="email"
								type="email"
								placeholder="Nhập địa chỉ email"
								className="h-12 border-gray-300 px-5"
								onChange={(e) => handleCheckoutData("email", e.target.value)}
							/>
						</div>

						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-md text-black font-semibold"
							>
								Nhập số điện thoại
							</Label>
							<div className="relative">
								<Input
									id="phone"
									type="text"
									placeholder="Nhập số điện thoại"
									className="h-12 pr-10 border-gray-300 px-5"
									onChange={(e) =>
										handleCheckoutData("phoneNumber", e.target.value)
									}
								/>
							</div>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-md text-black font-semibold"
							>
								Địa chỉ nhận hàng
							</Label>
							<div className="relative">
								<Input
									id="phone"
									type="text"
									placeholder="Nhập địa chỉ nhận hàng"
									className="h-12 pr-10 border-gray-300 px-5"
									onChange={(e) =>
										handleCheckoutData("addressLine", e.target.value)
									}
								/>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row gap-4">
							<div className="flex-1 space-y-2">
								<Label
									htmlFor="phone"
									className="text-md text-black font-semibold"
								>
									Thành phố hoặc tỉnh
								</Label>
								<Select onValueChange={handleProvinceChange}>
									<SelectTrigger className="w-full h-12">
										<SelectValue placeholder="Chọn thành phố hoặc tỉnh" />
									</SelectTrigger>
									<SelectContent>
										{PROVINCES.map((province) => (
											<SelectItem
												key={province.phone_code}
												value={province.codename}
											>
												{province.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div className="flex-1 space-y-2 ">
								<Label
									htmlFor="phone"
									className="text-md text-black font-semibold"
								>
									Xã
								</Label>
								<Select
									disabled={!filteredWards.length}
									onValueChange={handleSelectWard}
								>
									<SelectTrigger className="w-full h-12">
										<SelectValue
											placeholder={
												filteredWards.length
													? "Chọn xã"
													: "Chọn thành phố trước"
											}
										/>
									</SelectTrigger>
									<SelectContent>
										{filteredWards.map((ward: Ward) => (
											<SelectItem
												key={`${ward.province_code}-${ward.code}`}
												value={ward.codename}
											>
												{ward.name}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="phone"
								className="text-md text-black font-semibold"
							>
								Phương thức thanh toán
							</Label>
							<RadioGroup
								defaultValue="COD"
								className="flex flex-col gap-4 lg:flex-row items-center"
								onValueChange={(val) =>
									setCheckoutData((prev) => ({ ...prev, paymentMethod: val }))
								}
							>
								{PAYMENT_METHODS.map((method) => (
									<div
										key={method.id}
										className="flex-1 flex items-center space-x-2 border border-gray-300 h-12 px-4 rounded-full cursor-pointer"
									>
										<RadioGroupItem value={method.value} id={method.id} />
										<Label
											htmlFor={method.id}
											className="text-muted-foreground font-medium"
										>
											{method.label}
										</Label>
									</div>
								))}
							</RadioGroup>
						</div>
					</form>
				</div>

				<Card className="h-fit rounded-xl">
					<CardHeader>
						<CardTitle>Tóm tắt đơn hàng</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2 text-sm text-gray-700">
						<div className="flex justify-between">
							<span>Sản phẩm</span>
							{loading ? "Đang tính ..." : <span>{sumary?.items}</span>}
						</div>
						<div className="flex justify-between">
							<span>Tạm tính</span>
							{loading ? (
								"Đang tính ..."
							) : (
								<span>{sumary?.subTotal.toLocaleString()} VNĐ</span>
							)}
						</div>
						<div className="flex justify-between">
							<span>Vận chuyển</span>
							{loadingFee ? (
								"Đang tính ..."
							) : (
								<span>{shippingFee.toLocaleString()} VNĐ</span>
							)}
						</div>
						<div className="flex justify-between font-semibold text-gray-900 border-t pt-2">
							<span>Tổng cộng</span>
							<span>${total.toLocaleString()} VNĐ</span>
						</div>
						<Button
							className="mt-4 w-full h-12 rounded-full bg-greenly text-white hover:bg-greenly/90 cursor-pointer"
							onClick={handleOrder}
						>
							Xác nhận thanh toán
						</Button>
					</CardContent>
				</Card>
			</div>
			<CommitSection />
		</div>
	);
}
