"use client";

import type React from "react";
// import {
// 	Package,
// 	ClipboardCheck,
// 	Settings,
// 	Truck,
// 	FileCheck,
// } from "lucide-react";
import { useParams } from "next/navigation";
import { getOrderTracking, OrderTracking } from "@/lib/services/trackOrder";
import { useEffect, useState } from "react";

// interface OrderStep {
// 	id: string;
// 	label: string;
// 	icon: React.ReactNode;
// 	status: "completed" | "current" | "upcoming";
// 	date?: string;
// 	time?: string;
// 	expectedDate?: string;
// }

// const orderSteps: OrderStep[] = [
// 	{
// 		id: "placed",
// 		label: "Order Placed",
// 		icon: <Package className="h-5 w-5" />,
// 		status: "completed",
// 		date: "20 Apr 2024",
// 		time: "11:00 AM",
// 	},
// 	{
// 		id: "accepted",
// 		label: "Accepted",
// 		icon: <ClipboardCheck className="h-5 w-5" />,
// 		status: "completed",
// 		date: "20 Apr 2024",
// 		time: "11:15 AM",
// 	},
// 	{
// 		id: "progress",
// 		label: "In Progress",
// 		icon: <Settings className="h-5 w-5" />,
// 		status: "current",
// 		expectedDate: "21 Apr 2024",
// 	},
// 	{
// 		id: "way",
// 		label: "On the Way",
// 		icon: <Truck className="h-5 w-5" />,
// 		status: "upcoming",
// 		expectedDate: "22-23 Apr 2024",
// 	},
// 	{
// 		id: "delivered",
// 		label: "Delivered",
// 		icon: <FileCheck className="h-5 w-5" />,
// 		status: "upcoming",
// 		expectedDate: "24 Apr 2024",
// 	},
// ];

const OrderStatus = () => {
	const param = useParams();

	const [tracking, setTracking] = useState<OrderTracking>();
	console.log(tracking);
	useEffect(() => {
		const fetchTracking = async () => {
			try {
				const data = await getOrderTracking(Number(param.id));
				setTracking(data[0]);
			} catch (error) {
				console.error(error);
			}
		};
		fetchTracking();
	}, [param.id]);

	return (
		<div className="container mx-auto px-4 lg:px-8 py-16 lg:py-8 space-y-8">
			<div>
				<h1 className="text-2xl font-semibold text-foreground">
					Trạng thái đơn hàng
				</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Mã đơn hàng : #{`${tracking?.id}`}
				</p>
			</div>

			<div className="border-gray-300 border p-8 rounded-2xl">
				<div className="relative">
					{tracking?.status === "RETURN_REQUESTED" && (
						<h1 className="text-3xl font-semibold">
							Đơn hàng của bạn yêu cầu được hủy
						</h1>
					)}
					{/* <div className="absolute left-0 right-0 top-[30px] hidden h-0.5 bg-border md:block">
						<div className="h-full w-[40%] bg-primary transition-all duration-500" />
					</div>                     */}
					{/* <div className="grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-4">

						{orderSteps.map((step) => (
							<div
								key={step.id}
								className="relative flex flex-col items-center text-center"
							>
								<div
									className={`relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full transition-all ${
										step.status === "completed"
											? "bg-primary text-primary-foreground"
											: step.status === "current"
											? "bg-accent text-foreground ring-2 ring-primary ring-offset-2 ring-offset-background"
											: "bg-secondary text-muted-foreground"
									}`}
								>
									{step.icon}
								</div>

								<p
									className={`mt-3 text-sm font-medium ${
										step.status === "upcoming"
											? "text-muted-foreground"
											: "text-foreground"
									}`}
								>
									{step.label}
								</p>

								<div className="mt-2 text-xs text-muted-foreground">
									{step.date && (
										<>
											<p className="font-medium">{step.date}</p>
											<p>{step.time}</p>
										</>
									)}
									{step.expectedDate && (
										<>
											<p>Expected</p>
											<p className="font-medium">{step.expectedDate}</p>
										</>
									)}
								</div>
							</div>
						))}
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default OrderStatus;
