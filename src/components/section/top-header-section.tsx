import { FacebookIcon, Phone, YoutubeIcon } from "lucide-react";
import Link from "next/link";

const TopHeaderSection = () => {
	return (
		<section className="bg-greenly max-lg:hidden py-1">
			<div className="container mx-auto">
				<div className="flex items-center justify-between px-8 lg:px-4">
					<div className="text-white text-sm">
						<p className="flex items-center gap-2">
							<Phone className="size-4" />{" "}
							<span className="text-sm">SĐT: 0987.399.056</span>
						</p>
					</div>
					<div className="text-white text-sm hidden md:block">
						Đăng ký và nhận giảm giá 25% cho đơn hàng đầu tiên của bạn:{" "}
						<Link
							href="https://example.com"
							className="text-yelly underline underline-offset-4"
						>
							Đăng ký ngay
						</Link>
					</div>
					<div className="flex items-center text-yelly">
						<div className="">
							<YoutubeIcon className="size-5" />
						</div>
						<div className="">
							<FacebookIcon className="size-5" />
						</div>
						<div className="font-bold border border-yelly px-1 rounded-sm">
							<span className="text-sm">Zalo</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TopHeaderSection;
