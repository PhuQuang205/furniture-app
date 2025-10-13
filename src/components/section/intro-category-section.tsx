import Image from "next/image";

const chairs = [
	"Ghế gỗ",
	"Ghế nhựa",
	"Ghế xoay (ghế văn phòng)",
	"Ghế sofa",
	"Ghế armchair (ghế bành)",
	"Ghế bar",
];

const tables = ["Bàn tròn", "Bàn cổ điển", "Bàn hiện đại", "Bàn ăn"];
const cabinets = ["Kệ gỗ", "Kệ nhựa", "Tủ quần áo", "Tủ trưng bày"];

export const IntroCategorySection = () => {
	return (
		<section className="container mx-auto">
			<div className="px-6 lg:px-0 py-10 lg:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{/* Ghế */}
					<div className="lg:row-span-2 bg-subbg rounded-2xl flex justify-between items-center p-6 relative overflow-hidden">
						<div className="space-y-4 z-10">
							<div className="rounded-full bg-white inline-block px-3 py-1">
								<p className="font-semibold text-sm">
									<span className="text-yelly font-bold">1500+</span> Items
								</p>
							</div>
							<h3 className="text-3xl lg:text-4xl font-semibold text-black">
								Ghế
							</h3>
							<div className="text-gray-700 text-sm space-y-1">
								{chairs.map((item, i) => (
									<p key={i}>{item}</p>
								))}
							</div>
						</div>
						<div className="absolute right-0 bottom-0">
							<Image
								src="/resource/category-image/1.png"
								width={320}
								height={320}
								alt="Ghế"
								className="object-contain translate-x-10 translate-y-6 h-auto w-auto"
							/>
						</div>
					</div>

					{/* Bàn */}
					<div className="bg-subbg rounded-2xl flex justify-between items-center p-6 relative overflow-hidden">
						<div className="space-y-4 z-10">
							<div className="rounded-full bg-white inline-block px-3 py-1">
								<p className="font-semibold text-sm">
									<span className="text-yelly font-bold">750+</span> Items
								</p>
							</div>
							<h3 className="text-3xl lg:text-4xl font-semibold text-black">
								Bàn
							</h3>
							<div className="text-gray-700 text-sm space-y-1">
								{tables.map((item, i) => (
									<p key={i}>{item}</p>
								))}
							</div>
						</div>
						<div className="absolute right-0 bottom-0">
							<Image
								src="/resource/category-image/2.png"
								width={260}
								height={260}
								alt="Bàn"
								className="object-contain translate-x-6 translate-y-6"
							/>
						</div>
					</div>

					{/* Kệ tủ */}
					<div className="bg-subbg rounded-2xl flex justify-between items-center p-6 relative overflow-hidden">
						<div className="space-y-4 z-10">
							<div className="rounded-full bg-white inline-block px-3 py-1">
								<p className="font-semibold text-sm">
									<span className="text-yelly font-bold">450+</span> Items
								</p>
							</div>
							<h3 className="text-3xl lg:text-4xl font-semibold text-black">
								Kệ tủ
							</h3>
							<div className="text-gray-700 text-sm space-y-1">
								{cabinets.map((item, i) => (
									<p key={i}>{item}</p>
								))}
							</div>
						</div>
						<div className="absolute right-0 bottom-0">
							<Image
								src="/resource/category-image/3.png"
								width={260}
								height={260}
								alt="Kệ tủ"
								className="object-contain translate-x-6 translate-y-6"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
