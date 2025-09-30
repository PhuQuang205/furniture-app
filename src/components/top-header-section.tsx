import { FacebookIcon, YoutubeIcon } from "lucide-react";

export const TopHeaderSection = () => {
	return (
		<section className="bg-greenly max-lg:hidden py-1">
			<div className="container mx-auto">
				<div className="flex items-center justify-between px-8 lg:px-4">
					<div className="text-white text-sm">SĐT: 0987.399.056</div>
					<div className="text-white text-sm hidden md:block">
						Đăng ký và nhận giảm giá 25% cho đơn hàng đầu tiên của bạn:{" "}
						<span className="text-yelly underline underline-offset-4">
							Đăng ký ngay
						</span>
					</div>
					<div className="flex gap-0.5 items-center text-yelly">
						<div className="">
							<YoutubeIcon className="size-5" />
						</div>
						<div className="">
							<FacebookIcon className="size-5" />
						</div>
						<div className="font-bold border border-yelly px-1 rounded-sm">Zalo</div>
					</div>
				</div>
			</div>
		</section>
	);
};
