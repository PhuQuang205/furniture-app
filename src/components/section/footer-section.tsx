import { FurnitureLogo } from "@/components/FurnitureLogo";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const companyLinks = [
	{ name: "Về chúng tôi", href: "#" },
	{ name: "Bài viết", href: "#" },
	{ name: "Liên hệ", href: "#" },
	{ name: "Tuyển dụng", href: "#" },
];

const customerServiceLinks = [
	{ name: "Tài khoản của tôi", href: "#" },
	{ name: "Theo dõi đơn hàng của bạn", href: "#" },
	{ name: "Hoàn trả", href: "#" },
	{ name: "FAQ", href: "#" },
];

const infoLinks = [
	{ name: "Chính sách", href: "#" },
	{ name: "Điều khoản & Điều kiện của người dùng", href: "#" },
	{ name: "Chính sách hoàn trả", href: "#" },
];

const contactInfo = {
	phone: "+0123-456-789",
	email: "example@gmail.com",
	address: `3502 Preston Rd. Inglewood, Maine 90380`,
};

const FooterSection = () => {
	return (
		<footer className="bg-greenly text-white">
			<div className="container mx-auto max-lg:px-4 py-8 lg:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					<div className="">
						<div className="flex items-center gap-2 mb-6">
							<FurnitureLogo className="text-white" active={true} />
						</div>
						<p className="text-white/80 mb-8 leading-relaxed max-w-sm">
							Hoàng Hà là thương hiệu nội thất uy tín, mang đến các sản phẩm
							thiết kế tinh tế, chất lượng cao, giúp không gian sống và làm việc
							của bạn thêm hiện đại và tiện nghi.
						</p>
						<div className="flex gap-4">
							<Button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Facebook className="size-6" />
							</Button>
							<Button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Instagram className="size-6" />
							</Button>
							<Button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
								<Youtube className="size-6" />
							</Button>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">Công ty</h3>
						<ul className="space-y-4 flex flex-col">
							{companyLinks.map((item, index) => (
								<Link
									key={index}
									className="text-white/80 hover:text-white transition-colors"
									href={item}
								>
									{item.name}
								</Link>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">Dịch vụ khách hàng</h3>
						<ul className="space-y-4 flex flex-col">
							{customerServiceLinks.map((item, index) => (
								<Link
									key={index}
									className="text-white/80 hover:text-white transition-colors"
									href={item}
								>
									{item.name}
								</Link>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">
							Thông tin của chúng tôi
						</h3>
						<ul className="space-y-4 mb-8 flex flex-col">
							{infoLinks.map((item, index) => (
								<Link
									key={index}
									className="text-white/80 hover:text-white transition-colors"
									href={item}
								>
									{item.name}
								</Link>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">Thông tin liên hệ</h3>
						<div className="space-y-3">
							<p className=" text-white/80 hover:text-white transition-colors">
								{contactInfo.phone}
							</p>
							<p className="text-white/80 hover:text-white transition-colors">
								{contactInfo.email}
							</p>
							<p className="text-white/80 text-sm leading-relaxed hover:text-white transition-colors">
								{contactInfo.address.split("\n").map((line, idx) => (
									<React.Fragment key={idx}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-yelly px-8 py-4 max-sm:py-2 lg:px-4">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-black text-sm">
						Copyright © 2025 Furniture. All Rights Reserved.
					</p>
					<div className="flex items-center gap-6 text-black">
						<div className="flex items-center gap-2">
							<span className="text-sm">Tiếng việt</span>
							<svg
								className="size-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
						<div className="w-px h-4 bg-black"></div>
						<div className="flex items-center gap-2">
							<span className="text-sm">VND</span>
							<svg
								className="size-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
