import React from "react";
import Link from "next/link";
import { FurnitureLogo } from "@/components/furniture-logo";
import { Heart, Menu, Search, ShoppingBagIcon, User } from "lucide-react";

const NAV_LINK = [
	{
		title: "Trang chủ",
		path: "/",
	},
	{
		title: "Cửa hàng",
		path: "/shop",
	},
	{
		title: "Danh mục",
		path: "/category",
	},
	{
		title: "Giới thiệu",
		path: "/introduce",
	},
	{
		title: "Liên hệ",
		path: "/contact",
	},
	{
		title: "Bài viết",
		path: "/blog",
	},
];

export const HeaderSection = () => {
	return (
		<section className="flex items-center">
			<div className="flex items-center justify-between container mx-auto px-8 py-4 lg:px-0">
				<div className="text-white text-sm">
					<FurnitureLogo />
				</div>
				<div className="text-balck text-sm font-semibold gap-4 lg:gap-8 hidden lg:flex">
					{NAV_LINK.map((item, index) => {
						return (
							<div key={index}>
								<Link href={item.path}>{item.title}</Link>
							</div>
						);
					})}
				</div>

				<div className="gap-4 hidden lg:flex">
					<Search className="size-5" />
					<Heart className="size-5" />
					<ShoppingBagIcon className="size-5" />
					<User className="size-5" />
				</div>

				<div className="flex lg:hidden p-2 bg-greenly rounded-sm">
					<Menu className="size-5 text-yelly" />
				</div>
			</div>
		</section>
	);
};
