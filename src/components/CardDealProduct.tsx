import React from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropDeal {
	deal: {
		id: number;
		name: string;
		category: string;
		price: number;
		rating: number | string;
		image: string;
		description: string;
	};
}

const CardDealProduct = ({ deal }: PropDeal) => {
	return (
		<div className="rounded-xl border border-gray-300 w-[450px] flex items-center justify-center">
			<div className="px-2 py-4">
				<div className="flex gap-4">
					<div className="bg-subbg rounded-xl overflow-hidden">
						<Image
							src={deal.image || "/placeholder.svg"}
							alt=""
							width={300}
							height={400}
							className="object-contain w-[200px] h-[300px]"
						/>
					</div>
					<div>
						<p>Ghế</p>
						<div className="space-y-2">
							<h3 className="text-xl font-semibold truncate overflow-hidden text-ellipsis max-w-[200px]">
								{deal.name}
							</h3>
							<h3 className="text-xl font-semibold">{deal.price} VND</h3>
							<div className="flex items-center gap-2">
								<Star className="size-7 text-yelly " />{" "}
								<span className="text-md font-semibold">{deal.rating}</span>
							</div>
						</div>
						<p className="py-4 max-w-[200px]">{deal.description}</p>
						<Button variant="outline">
							Đặt hàng ngay
							<ArrowRight />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardDealProduct;
