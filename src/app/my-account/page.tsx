"use client";
import { useState } from "react";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import { CommitSection } from "@/components/section/commit-section";
import NavItem, { NavItemProps } from "@/components/NavItem";

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
				return (
					<div>
						<h2 className="text-xl font-semibold mb-4">Thông tin cá nhân</h2>
						{/* Form thông tin cá nhân */}
						<form className="grid grid-cols-2 gap-4">
							<div>
								<label>First Name *</label>
								<input
									type="text"
									defaultValue="Leslie"
									className="border rounded px-3 py-2 w-full"
								/>
							</div>
							<div>
								<label>Last Name *</label>
								<input
									type="text"
									defaultValue="Cooper"
									className="border rounded px-3 py-2 w-full"
								/>
							</div>
							<div className="col-span-2">
								<label>Email *</label>
								<input
									type="email"
									defaultValue="example@gmail.com"
									className="border rounded px-3 py-2 w-full"
								/>
							</div>
							<div className="col-span-2">
								<label>Phone *</label>
								<input
									type="text"
									defaultValue="+0123-456-789"
									className="border rounded px-3 py-2 w-full"
								/>
							</div>
						</form>
					</div>
				);
			case "orders":
				return (
					<div>
						<h2 className="text-xl font-semibold">Đơn hàng của tôi</h2>
						<p>Danh sách đơn hàng...</p>
					</div>
				);
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
					<div className="flex flex-col lg:flex-row gap-8">
						<div className="flex flex-col gap-2 w-60">
							{navItems.map((item) => (
								<NavItem
									key={item.id}
									id={item.id}
									name={item.name}
									active={active === item.id}
									onClick={() => setActive(item.id)}
								/>
							))}
						</div>
						<div className="flex-1 h-96 border-2 border-red-500">
							{renderContent()}
						</div>
					</div>
				</div>
			</div>
			<CommitSection />
		</div>
	);
};

export default MyAccountPage;
