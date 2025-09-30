"use client";

import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
	{
		id: 1,
		name: "Leslie Alexander",
		role: "Architecture",
		rating: 5.0,
		image: "/images/client-image/client1.jpg",
		testimonial:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
	},
	{
		id: 2,
		name: "Jenny Wilson",
		role: "Interior Designer",
		rating: 5.0,
		image: "/images/client-image/client2.jpg",
		testimonial:
			"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa",
	},
];

export const TestimonialSection = () => {
	return (
		<section className="bg-subbg">
			<div className="container mx-auto">
				<div className="py-8 lg:py-16 px-8 lg:px-4">
					<div className="flex justify-center items-center flex-col gap-4 my-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Lời đánh giá</p>
						</div>
						<h2 className="text-4xl font-bold text-black">
							<span className="text-greenly">Khách hàng</span> của chúng tôi nói
							gì?
						</h2>
					</div>
					<div className="mx-20 my-8">
						{/* Testimonials Swiper */}
						<Swiper
							modules={[Navigation, Pagination]}
							spaceBetween={30}
							slidesPerView={1}
							// breakpoints={{
							// 	768: {
							// 		slidesPerView: 2,
							// 	},
							// }}
							className="testimonials-swiper"
						>
							{testimonials.map((testimonial) => (
								<SwiperSlide key={testimonial.id}>
									<div className="flex gap-8">
									  <div className="p-4 rounded-xl bg-white">
  										{/* Nội dung trên */}
  										<div className="flex items-center pb-4 gap-8">
  											{/* <div className="absolute -top-2 right-8 text-6xl text-green-700 font-serif opacity-20"></div> */}
                        {/* Phần ảnh khách hàng */}
  											<div className="relative">
  												<div className="rounded-full overflow-hidden">
  													<Image
  														src={testimonial.image || "/placeholder.svg"}
  														alt={testimonial.name}
  														width={80}
  														height={80}
  														className="size-25 object-cover"
  													/>
  												</div>
  											</div>
                        {/* Phần nội dung đánh giá */}
  											<div className="">
  												<div className="mb-3">
  													<h4 className="text-lg font-semibold text-gray-900">
  														{testimonial.name}
  													</h4>
  													<p className="text-gray-500 text-sm">
  														{testimonial.role}
  													</p>
  												</div>
  
  												<div className="flex items-center gap-1 mb-4">
  													{[...Array(5)].map((_, i) => (
  														<Star
  															key={i}
  															className="w-4 h-4 fill-yellow-400 text-yellow-400"
  														/>
  													))}
  													<span className="ml-2 font-medium text-gray-900">
  														{testimonial.rating}
  													</span>
  												</div>
  											</div>
                        {/* Phần icon quote */}
                        <div className="flex size-15 items-center justify-center p-4 rounded-full bg-subbg">
                          <Quote className="size-full text-greenly"/>
                        </div>
  										</div>
  										{/* Nội dung dưới */}
  										<div>
  											<p className="text-black max-w-[350px] text-md leading-relaxed">
  												{testimonial.testimonial}
  											</p>
  										</div>
  									</div>
                    {/* Item 2 */}
									  <div className="p-4 rounded-xl bg-white">
  										{/* Nội dung trên */}
  										<div className="flex items-center pb-4 gap-8">
  											{/* <div className="absolute -top-2 right-8 text-6xl text-green-700 font-serif opacity-20"></div> */}
                        {/* Phần ảnh khách hàng */}
  											<div className="relative">
  												<div className="rounded-full overflow-hidden">
  													<Image
  														src={testimonial.image || "/placeholder.svg"}
  														alt={testimonial.name}
  														width={80}
  														height={80}
  														className="size-25 object-cover"
  													/>
  												</div>
  											</div>
                        {/* Phần nội dung đánh giá */}
  											<div className="">
  												<div className="mb-3">
  													<h4 className="text-lg font-semibold text-gray-900">
  														{testimonial.name}
  													</h4>
  													<p className="text-gray-500 text-sm">
  														{testimonial.role}
  													</p>
  												</div>
  
  												<div className="flex items-center gap-1 mb-4">
  													{[...Array(5)].map((_, i) => (
  														<Star
  															key={i}
  															className="w-4 h-4 fill-yellow-400 text-yellow-400"
  														/>
  													))}
  													<span className="ml-2 font-medium text-gray-900">
  														{testimonial.rating}
  													</span>
  												</div>
  											</div>
                        {/* Phần icon quote */}
                        <div className="flex size-15 items-center justify-center p-4 rounded-full bg-subbg">
                          <Quote className="size-full text-greenly"/>
                        </div>
  										</div>
  										{/* Nội dung dưới */}
  										<div>
  											<p className="text-black max-w-[350px] text-md leading-relaxed">
  												{testimonial.testimonial}
  											</p>
  										</div>
  									</div>
                    {/* Iamte3 */}
                     <div className="p-4 rounded-xl bg-white">
  										{/* Nội dung trên */}
  										<div className="flex items-center pb-4 gap-8">
  											{/* <div className="absolute -top-2 right-8 text-6xl text-green-700 font-serif opacity-20"></div> */}
                        {/* Phần ảnh khách hàng */}
  											<div className="relative">
  												<div className="rounded-full overflow-hidden">
  													<Image
  														src={testimonial.image || "/placeholder.svg"}
  														alt={testimonial.name}
  														width={80}
  														height={80}
  														className="size-25 object-cover"
  													/>
  												</div>
  											</div>
                        {/* Phần nội dung đánh giá */}
  											<div className="">
  												<div className="mb-3">
  													<h4 className="text-lg font-semibold text-gray-900">
  														{testimonial.name}
  													</h4>
  													<p className="text-gray-500 text-sm">
  														{testimonial.role}
  													</p>
  												</div>
  
  												<div className="flex items-center gap-1 mb-4">
  													{[...Array(5)].map((_, i) => (
  														<Star
  															key={i}
  															className="w-4 h-4 fill-yellow-400 text-yellow-400"
  														/>
  													))}
  													<span className="ml-2 font-medium text-gray-900">
  														{testimonial.rating}
  													</span>
  												</div>
  											</div>
                        {/* Phần icon quote */}
                        <div className="flex size-15 items-center justify-center p-4 rounded-full bg-subbg">
                          <Quote className="size-full text-greenly"/>
                        </div>
  										</div>
  										{/* Nội dung dưới */}
  										<div>
  											<p className="text-black max-w-[350px] text-md leading-relaxed">
  												{testimonial.testimonial}
  											</p>
  										</div>
  									</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};
