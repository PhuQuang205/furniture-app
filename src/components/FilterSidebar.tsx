"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";

import { BrushCleaning } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import { filterProductsByCategory, getAllProducts } from "@/lib/services/productService";
import { PropsCategory } from "@/lib/services/categoryService";
import { getCategories } from "@/lib/services/categoryService";
import { PropsProducts } from "@/lib/services/productService";

interface FilterSidebarProps {
	onCheckedChange: (products: PropsProducts[]) => void;
}

export function FilterSidebar({ onCheckedChange }: FilterSidebarProps) {
	const [categories, setCategories] = useState<PropsCategory[]>([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				setLoading(true);
				const data = await getCategories();
				setCategories(data);
			} catch (error) {
				console.error("Lỗi khi tải danh mục:", error);
				toast.error("Không thể tải danh mục");
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	
	const handleCategorySelect = async (categoryId: number) => {
		try {
			setSelectedCategoryId(categoryId);
			setLoading(true);

			const res = await filterProductsByCategory(categoryId);
			console.log("res: ", res.data);
			onCheckedChange(res.data);

			toast.success("Đã lọc sản phẩm theo danh mục");
		} catch (error) {
			console.error("Lỗi khi lọc sản phẩm:", error);
			toast.error("Không thể lọc sản phẩm");
		} finally {
			setLoading(false);
		}
	};

	const handleClearFilters = async () => {
	try {
		setSelectedCategoryId(null);
		setLoading(true);

		const res = await getAllProducts();
		onCheckedChange(res.data);

		toast.success("Đã xoá bộ lọc");
	} catch (error) {
		console.error("Lỗi khi tải lại sản phẩm:", error);
		toast.error("Không thể tải lại sản phẩm");
	} finally {
		setLoading(false);
	}
};


	return (
		<aside className="w-64 space-y-6 rounded-lg bg-card p-6 relative">
			<h2 className="text-lg font-semibold">Bộ lọc</h2>
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Danh mục</h3>
				<div className="space-y-2">
					{loading
						? "Đang tải..."
						: categories.map((category) => (
								<div key={category.id} className="flex items-center space-x-2">
									<Checkbox
										id={`cat-${category.id}`}
										checked={selectedCategoryId === category.id}
										onCheckedChange={(checked) => {
											if (checked) {
												handleCategorySelect(category.id);
											} else {
												setSelectedCategoryId(null);
											}
										}}
									/>
									<Label
										htmlFor={`cat-${category.id}`}
										className="text-sm font-normal"
									>
										{category.name}
									</Label>
								</div>
						  ))}
				</div>
			</div>
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Khoảng giá</h3>
				<Slider />
				<div className="flex justify-between text-sm text-muted-foreground">
					<span>22</span>
					<span>344</span>
				</div>
			</div>
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Tình trạng</h3>
				<RadioGroup
				// value={filters.availability || ""}
				// onValueChange={(val) => handleChange("availability", val)}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="in-stock" id="in-stock" />
						<Label htmlFor="in-stock" className="text-sm font-normal">
							Còn hàng
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="out-of-stock" id="out-of-stock" />
						<Label htmlFor="out-of-stock" className="text-sm font-normal">
							Hết hàng
						</Label>
					</div>
				</RadioGroup>
			</div>

			<div className="absolute top-4 right-4 p-2 rounded-full w-fit flex items-center justify-center ">
				<Button
					className="size-9 rounded-xl"
					variant="outline"
					onClick={handleClearFilters}
				>
					<BrushCleaning className="size-5" />
				</Button>
			</div>
		</aside>
	);
}
