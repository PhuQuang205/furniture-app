"use client";
import { useState } from "react";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import NavItem from "@/components/NavItem";
import { Personal } from "@/components/account-element/Personal";
import { MyOrder } from "@/components/account-element/MyOrder";

const navItems = [
	{ id: "personal", name: "Thông tin cá nhân" },
	{ id: "orders", name: "Đơn hàng của tôi" },
	{ id: "address", name: "Quản lý địa chỉ" },
	{ id: "payment", name: "Thanh toán" },
	{ id: "password", name: "Quản lý mật khẩu" },
	{ id: "logout", name: "Đăng xuất" },
];

const MyAccountPage = () => {
	const [active, setActive] = useState("personal");

	const renderContent = () => {
		switch (active) {
			case "personal":
				return <Personal />;
			case "orders":
				return <MyOrder />;
			case "address":
				return (
					<div>
						<h2 className="text-xl font-semibold">Quản lý địa chỉ</h2>
						<p>Form quản lý địa chỉ...</p>
					</div>
				);
			case "payment":
				return (
					<div>
						<h2 className="text-xl font-semibold">Phương thức thanh toán</h2>
						<p>Thông tin thanh toán...</p>
					</div>
				);
			case "password":
				return (
					<div>
						<h2 className="text-xl font-semibold">Quản lý mật khẩu</h2>
						<p>Form đổi mật khẩu...</p>
					</div>
				);
			case "logout":
				return (
					<div>
						<h2 className="text-xl font-semibold">Đăng xuất</h2>
						<p>Bạn có chắc muốn thoát?</p>
					</div>
				);
			default:
				return null;
		}
	};
	return (
		<div>
			<BreadcrumbHeader
				title="Tài khoản của tôi"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Tài khoản" },
				]}
			/>
			<div className="container mx-auto">
				<div className="px-8 lg:px-4 py-8 lg:py-16">
					<div className="flex flex-col lg:flex-row max-sm:items-center gap-8">
						<div className="flex flex-col gap-2 w-96 max-lg:w-full">
							{navItems.map((item) => (
								<NavItem
									key={item.id}
									id={item.id}
									name={item.name}
									active={active === item.id}
									onClick={() => setActive(item.id)}
									className="py-8"
								/>
							))}
						</div>
						<div className="w-full">{renderContent()}</div>
					</div>
				</div>
			</div>
			<CommitSection />
		</div>
	);
};

export default MyAccountPage;
