"use client";

import { OrderCard } from "@/components/OrderCard";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	getOrderItemsLatest,
	Order as PropsOrder,
} from "@/lib/services/orderService";
import { useEffect, useState } from "react";

const Order = () => {
	const [orders, setOrders] = useState<PropsOrder[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const fetchOrders = async () => {
			try {
				const res = await getOrderItemsLatest();
				setOrders(res);
			} catch (error) {
				console.log("+ Error: ", error);
			} finally {
				setLoading(false);
			}
		};
		fetchOrders();
	}, []);
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="font-semibold">Đơn hàng ({orders.length})</div>
				<div className="flex items-center gap-2">
					<p className="text-sm text-black/60">Sắp xếp theo</p>
					<div className="relative">
						<Select>
							<SelectTrigger className="rounded-full">
								<SelectValue placeholder="Tất cả" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>
			<div className="mt-8 rounded-2xl space-y-4">
				{loading
					? "Loading..."
					: orders.map((order) => <OrderCard key={order.id} order={order} />)}
			</div>
		</>
	);
};

export default Order;
