import React from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CardProductLine = () => {
	return (
		<div className="rounded-xl border-2 border-gray-300 w-[450px]">
			<div className="flex items-center gap-4 p-2">
				<div className="bg-subbg rounded-xl overflow-hidden">
					<Image
						src="/resource/product-image/1.png"
						alt=""
						width={300}
						height={400}
						className="object-contain w-[200px] h-[300px]"
					/>
				</div>
				<div className="">
					<p>Ghế</p>
					<div className="space-y-2">
						<h3 className="text-xl font-semibold">Ghế gỗ làm bằng mây</h3>
						<h3 className="text-xl font-semibold">120.000 đ</h3>
						<div className="flex items-center gap-2">
							<Star className="size-7 text-yelly " />{" "}
							<span className="text-md font-semibold">5.0</span>
						</div>
					</div>
					<p className="py-4 max-w-[200px]">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<Button variant="outline">
						Đặt hàng ngay
						<ArrowRight />
					</Button>
				</div>
			</div>
		</div>
	);
};
