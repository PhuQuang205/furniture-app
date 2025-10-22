import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Order } from "@/lib/services/orderService";
import Link from "next/link";

interface PropOrder {
	order: Order;
}

export const OrderCard = ({ order }: PropOrder) => {
	return (
		<div className="rounded-2xl overflow-hidden border border-gray-300">
			<div className="bg-yelly">
				<div className="p-4 flex justify-between flex-wrap">
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">ID đơn hàng</p>
						<h3 className="text-black text-sm lg:text-md font-medium">
							#{order.id}
						</h3>
					</div>
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">Tổng giá</p>
						<h3 className="text-black text-sm lg:text-md font-medium">
							{order.total.toLocaleString()} VNĐ
						</h3>
					</div>
					<div className="flex flex-col pr-4 gap-2 border-r border-black/10">
						<p className="text-sm text-black/60">Phương thức thanh toán</p>
						<h3 className="text-black text-sm lg:text-md font-medium">
							{order.paymentMethod}
						</h3>
					</div>
					<div className="flex flex-col gap-2">
						<p className="text-sm text-black/60">Dự kiến ngày giao hàng</p>
						<h3 className="text-black text-sm lg:text-md font-medium">
							{order.deliverDays} ngày
						</h3>
					</div>
				</div>
			</div>

			<div className="p-4">
				<div className="border-b not-last:border-b-gray-300 py-2">
					{order.details.map((item) => (
						<div key={item.productId} className="flex items-center gap-4">
							<div className="size-24 flex items-center justify-center bg-subbg rounded-lg">
								<Image
									src={
										item.imageUrl ??
										"https://i.pinimg.com/1200x/fe/72/50/fe725093cc70ce613ee7269ac25a1bab.jpg"
									}
									alt={item.productName}
									width={50}
									height={50}
									loading="lazy"
									className="size-18 object-contain"
								/>
							</div>
							<div className="flex flex-col">
								<h3 className="font-medium text-md">{item.productName}</h3>
								<p className="text-sm text-black/60">
									Số lượng: {item.quantity}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="p-4">
				{order.paymentStatus === "PENDING" && (
					<div className="flex gap-2">
						<Badge
							variant="outline"
							className="rounded-full bg-yellow-100 text-yellow-800 border-yellow-300"
						>
							Đang chờ thanh toán
						</Badge>
						<p className="text-sm text-greenly">
							Đơn hàng của bạn đang chờ thanh toán
						</p>
					</div>
				)}

				{order.paymentStatus === "PAID" && (
					<div className="flex gap-2">
						<Badge
							variant="outline"
							className="rounded-full bg-green-100 text-green-800 border-green-300"
						>
							Đã thanh toán
						</Badge>
						<p className="text-sm text-green-700">Thanh toán thành công</p>
					</div>
				)}

				{order.paymentStatus === "FAILED" && (
					<div className="flex gap-2">
						<Badge
							variant="outline"
							className="rounded-full bg-red-100 text-red-800 border-red-300"
						>
							Thanh toán thất bại
						</Badge>
						<p className="text-sm text-red-700">
							Vui lòng thử lại hoặc chọn phương thức khác
						</p>
					</div>
				)}
				
				<div className="mt-4">
					{order.status === "NEW" && (
						<p className="text-sm text-blue-600">
							Đơn hàng của bạn đang chờ duyệt
						</p>
					)}
					{order.status === "RETURN_REQUESTED" && (
						<p className="text-sm text-orange-600">
							Đơn hàng của bạn yêu cầu hủy
						</p>
					)}					
				</div>

				<div className="mt-8 flex justify-between items-center">
					<div className="flex gap-1.5">
						<Button>
							<Link href={`/order/${order.id}/track-order`}>Theo dõi</Link>
						</Button>
						<Button variant="outline">Hóa đơn</Button>
					</div>

					{order.paymentStatus === "PENDING" && order.status !== "RETURN_REQUESTED" ? (
						<Button
							variant="empty"
							className="cursor-pointer hover:bg-white/10"
						>
							Hủy đơn
						</Button>
					): ""}
				</div>
			</div>
		</div>
	);
};
