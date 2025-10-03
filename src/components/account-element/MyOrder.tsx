import { OrderCard } from "@/components/OrderCard";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import React from "react";

export const MyOrder = () => {
	return (
		<div className="">
			<div className="flex items-center justify-between">
				<div className="font-semibold">Đơn hàng (1)</div>
				<div className="flex items-center gap-2">
					<p className="text-sm text-black/60">Sắp xếp theo</p>
					<div className="relative">
						<Select>
							<SelectTrigger className="rounded-full">
								<SelectValue placeholder="Tất cả" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="blueberry">Blueberry</SelectItem>
									<SelectItem value="grapes">Grapes</SelectItem>
									<SelectItem value="pineapple">Pineapple</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>					
				</div>
			</div>
			<div className="p-4 mt-8 rounded-2xl h-96 border-2 border-red-500">
				<OrderCard/>
			</div>
		</div>
	);
};
