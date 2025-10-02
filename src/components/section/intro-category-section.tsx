import Image from "next/image";

const subcategories = ["Bàn tròn", "Bàn cổ điển", "Bàn hiện đại", "Bàn ăn"];

const chairs = [
	"Ghế gỗ",
	"Ghế nhựa",
	"Ghế xoay (ghế văn phòng)",
	"Ghế sofa",
	"Ghế armchair (ghế bành)",
	"Ghế bar",
];

export const IntroCategorySection = () => {
	return (
		<section className="container mx-auto">
			<div className="max-w-5xl mx-auto px-8 lg:px-0 ">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
					{/* Ghế */}
					<div className="lg:row-span-2 bg-subbg rounded-xl">
						<div className="flex flex-col relative">
							<div className="p-6 space-y-4">
								<div className="rounded-full inline-block bg-white text-center">
									<p className="font-semibold text-lg whitespace-nowrap px-2">
										<span className="text-lg font-medium text-yelly">25+</span>{" "}
										Items
									</p>
								</div>
								<h3 className="text-3xl lg:text-5xl font-medium text-black">
									Ghế
								</h3>
								<div>
									{chairs.map((item, index) => (
										<p
											key={index}
											className="text-md font-[300] whitespace-nowrap"
										>
											{item}
										</p>
									))}
								</div>
							</div>
							<div className="relative right-0 bottom-20 size-[300px]">
								<Image
									src="/resource/category-image/1.png"
									width={500}
									height={500}
									alt="dkasdl"
									className="object-contain"
								/>
							</div>
						</div>
					</div>
					{/* Bàn */}
					<div className=" bg-subbg rounded-xl">
						<div className="flex items-start">
							<div className="p-6 space-y-4">
								<div className="rounded-full bg-white text-center">
									<p className="font-semibold text-lg whitespace-nowrap px-2">
										<span className="text-lg font-medium text-yelly">25+</span>{" "}
										Items
									</p>
								</div>
								<h3 className="text-3xl lg:text-5xl font-medium text-black">
									Bàn
								</h3>
								<div>
									{subcategories.map((item, index) => (
										<p
											key={index}
											className="text-md font-[300] whitespace-nowrap"
										>
											{item}
										</p>
									))}
								</div>
							</div>
							<div className="relative overflow-hidden">
								<Image
									src="/resource/category-image/2.png"
									width={500}
									height={500}
									alt="dkasdl"
									className="relative -right-10 top-0 w-[500px] scale-150 object-contain"
								/>
							</div>
						</div>
					</div>
					{/* Kệ tủ */}
					<div className="bg-subbg rounded-xl">
						<div className="flex items-start">
							<div className="p-6 space-y-4">
								<div className="rounded-full bg-white text-center">
									<p className="font-semibold text-lg whitespace-nowrap px-2">
										<span className="text-lg font-medium text-yelly">15+</span>{" "}
										Items
									</p>
								</div>
								<h3 className="text-3xl lg:text-5xl font-medium whitespace-nowrap text-black">
									Kệ tủ
								</h3>
								<div>
									{subcategories.map((item, index) => (
										<p
											key={index}
											className="text-md font-[300] whitespace-nowrap"
										>
											{item}
										</p>
									))}
								</div>
							</div>
							<div className="relative overflow-hidden">
								<Image
									src="/resource/category-image/3.png"
									width={500}
									height={500}
									alt="dkasdl"
									className="relative -right-10 -bottom-20 w-[500px] scale-150 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
