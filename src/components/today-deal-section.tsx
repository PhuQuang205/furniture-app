import { CardProductLine } from "@/components/card-product-line";

export const TodayDealSection = () => {
	return (
		<section className="container mx-auto">
			<div className="py-8 lg:py-16 px-8 lg:px-4 overflow-clip">
				{/* Phần tiêu đề */}
				<div className="flex items-center justify-between my-4">
					<div className="space-y-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Ưu đã hôm nay</p>
						</div>
						<h1 className="text-4xl font-semibold">
							<span className="text-greenly">Ưu đãi</span> trong ngày
						</h1>
					</div>
					<div className="max-w-82">
						<p className="text-sm">
							Nhanh tay săn ngay Ưu đãi trong ngày – số lượng có hạn, hết hôm
							nay là mất!
						</p>
					</div>
				</div>
				{/* Phần sản phẩm */}
				<div className="my-8 flex gap-4">
					<div className="max-md:flex-none flex gap-4">
						<CardProductLine />
						<CardProductLine />
						<CardProductLine />
						<CardProductLine />
					</div>
				</div>
			</div>
		</section>
	);
};
