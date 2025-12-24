"use client";

import Link from "next/link";
import { NAVITEMS } from "@/context/index";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavProfile = () => {
	const path = usePathname();

	return (
		<div className="flex flex-col items-center gap-2 max-lg:w-full">
			{NAVITEMS.map((item) => (
				<Link key={item.id} href={item.href} className="lg:w-[300px] w-full">
					<div
						className={cn(
							"h-12 py-8 px-5 rounded-lg text-left flex items-center font-medium transition-all duration-300 w-full text-black cursor-pointer border border-gray-200",
							path === item.href ? "bg-yelly border-yellow-400" : ""
						)}
					>
						<p className="w-full text-md lg:text-lg">{item.name}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default NavProfile;
