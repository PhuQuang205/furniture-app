import React from "react";
import Link from "next/link";
import { FurnitureLogo } from "@/components/furniture-logo";
import { Heart, Menu, Search, ShoppingBagIcon, User } from "lucide-react";
import {NAV_LINK} from "@/context/index"


export const HeaderSection = () => {
	return (
		<section className="container mx-auto">
			<div className="flex items-center justify-between py-4 lg:py-8 px-8 lg:px-4">
				<div className="text-white text-sm">
					<FurnitureLogo active={false}/>
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
				{/* Device mobile or tablet */}
				<div className="flex lg:hidden p-2 bg-greenly rounded-sm">
					<Menu className="size-5 text-yelly" />
				</div>
			</div>
		</section>
	);
};
