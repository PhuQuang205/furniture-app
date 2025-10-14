import BreadcrumbHeader from "@/components/breadcrumb-header";
import { OrderStatus } from "@/components/OrderStatus";
import { CommitSection } from "@/components/section/commit-section";
import React from "react";

const TrackOrder = () => {
	return (
		<div>
			<BreadcrumbHeader
				title="Theo dõi đơn hàng"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Đặt hàng", href: "/order" },
					{ label: "Theo dõi đơn hàng", href: "/order/track-order" },
				]}
			/>
			<OrderStatus />

			<CommitSection />
		</div>
	);
};

export default TrackOrder;
