"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const furnitureCategories = [
	{
		id: 1,
		title: "Phòng Khách",
		items: "25+ Items",
		price: "$1,500",
		image: "/resource/bed-room/bed-room-blue.jpg",
	},
	{
		id: 2,
		title: "Phòng Ngủ",
		items: "100+ Items",
		price: "$1,200",
		image: "/resource/bed-room/bed-room-gray.jpg",
	},
	{
		id: 3,
		title: "Phòng Bếp",
		items: "200+ Items",
		price: "$900",
		image: "/resource/bed-room/bed-room-green.jpg",
	},
];

export const BannerSection = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [swiperInstance, setSwiperInstance] = useState<any>(null);

	return (
		<section className="relative bg-subbg py-16 lg:py-24 overflow-hidden">
			<div className="container mx-auto px-8 lg:px-4">
				<div className="flex flex-col lg:flex-row justify-between gap-16">
					<div className="space-y-8">
						<div className="space-y-6">
							<div className="inline-flex items-center px-4 py-2 rounded-full bg-white gap-2 ">
								<div className="p-2 bg-subbg rounded-full">
									<Image
										src="/resource/chair-small.png"
										width={500}
										height={500}
										className="size-5"
										alt="chair small"
									/>
								</div>
								<p className="text-md font-medium">
									Cửa hàng nội thất trực tuyến tốt nhất
								</p>
							</div>

							<div>
								<h1 className="text-6xl xl:text-8xl font-semibold text-black">
									Khám phá
								</h1>
								<br />
								<h1 className="text-6xl xl:text-8xl font-semibold text-greenly">
									hàng đồ nội thất
								</h1>
							</div>

							<p className="text-md text-black max-w-md lg:max-w-lg text-pretty">
								Mang đến cho bạn những thiết kế sang trọng, tiện nghi và phù hợp
								với mọi phong cách. Từ phòng khách, phòng ngủ đến văn phòng làm
								việc.
							</p>
						</div>

						<div className="">
							<div className="flex flex-col md:flex-row gap-3">
								<div className="">
									<Button className="h-12 bg-greenly w-full md:w-full text-white px-16 text-base hover:bg-greenly/80 rounded-full">
										Vào cửa hàng ngay bây giờ
										<ArrowRight className="size-5" />
									</Button>
								</div>

								<div>
									<Button
										variant="ghost"
										className="text-black px-8 py-3 text-base underline decoration-3 decoration-gray-700 w-full md:w-full underline-offset-4"
									>
										Xem tất cả các sản phẩm
									</Button>
								</div>
							</div>
						</div>

						<div className="flex items-center gap-4 max-sm:justify-between">
							<div className="flex -space-x-4">
								{[1, 2, 3, 4].map((i) => (
									<div
										key={i}
										className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white flex items-center justify-center text-white text-sm font-medium"
									>
										{String.fromCharCode(64 + i)}
									</div>
								))}
								<div className="size-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
									<Plus className="size-5" />
								</div>
							</div>
							<div>
								<div className="font-semibold text-gray-900">4.9 Đáng giá+</div>
								<div className="text-sm text-gray-600">
									Được 500+ khách hàng tin tưởng
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col">
						<div className="w-[800px]">
							<Swiper
								modules={[Navigation]}
								spaceBetween={20}
								slidesPerView={2}
								onSwiper={setSwiperInstance}
								className="furniture-hero-swiper"
							>
								{furnitureCategories.map((category) => (
									<SwiperSlide key={category.id}>
										<div className="relative rounded-xl bg-white border-2 border-gray-300 ">
											<div className="flex-none">
												<div className="p-2">
													<Image
														src={category.image}
														alt={category.title}
														width={400}
														height={300}
														className="object-cover rounded-xl w-auto h-auto"
														loading="lazy"
													/>
												</div>
												<div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
													{category.price}
												</div>
												{/* Nội dung */}
												<div className="p-2 flex items-center justify-between">
													<div>
														<h3 className="text-xl font-bold text-gray-900 mb-1">
															{category.title}
														</h3>
														<p className="text-gray-600">{category.items}</p>
													</div>
													<div className="">
														<button className="size-10 bg-greenly text-white rounded-full flex items-center justify-center">
															<ArrowUpRight className="size-6" />
														</button>
													</div>
												</div>
											</div>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						</div>

						<div className="flex items-center justify-start gap-4 mt-4">
							<button
								onClick={() => swiperInstance?.slidePrev()}
								className="size-10 bg-greenly text-white rounded-full flex items-center justify-center"
							>
								<ArrowLeft className="size-6" />
							</button>
							<button
								onClick={() => swiperInstance?.slideNext()}
								className="size-10 bg-greenly text-white rounded-full flex items-center justify-center"
							>
								<ArrowRight className="size-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
