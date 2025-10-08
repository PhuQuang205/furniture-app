"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface ProductSortProps {
	onSortChange: (value: string) => void;
}

export const ProductSort = ({ onSortChange }: ProductSortProps) => {
	return (
		<div className="flex items-center justify-end mb-6">
			<div className="flex items-center gap-2">
				<span className="text-sm">Sắp xếp:</span>
				<Select defaultValue="default" onValueChange={onSortChange}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Default Sorting" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="default">Tất cả</SelectItem>
						<SelectItem value="price-low">Giá: Thấp đến cao</SelectItem>
						<SelectItem value="price-high">Giá: Cao đến thấp</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};
