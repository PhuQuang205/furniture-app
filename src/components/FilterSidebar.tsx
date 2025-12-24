"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { BrushCleaning } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

import {
	filterProductsByCategory,
	filterProductsByStock,
	getAllProducts,
} from "@/lib/services/productService";
import { PropsCategory } from "@/lib/services/categoryService";
import { getCategories } from "@/lib/services/categoryService";
import { PropsProducts } from "@/lib/services/productService";

interface FilterSidebarProps {
	onCheckedChange: (products: PropsProducts[]) => void;
}

const FilterSidebar = ({ onCheckedChange }: FilterSidebarProps) => {
	const [categories, setCategories] = useState<PropsCategory[]>([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
		null
	);
	const [stockFilter, setStockFilter] = useState<
		"in-stock" | "out-of-stock" | null
	>(null);
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

	// 🔸 Lọc theo danh mục
	const handleCategorySelect = async (categoryId: number) => {
		try {
			setSelectedCategoryId(categoryId);
			setLoading(true);
			const res = await filterProductsByCategory(categoryId);
			onCheckedChange(res.data);
			toast.success("Đã lọc sản phẩm theo danh mục");
		} catch (error) {
			console.error("Lỗi khi lọc sản phẩm:", error);
			toast.error("Không thể lọc sản phẩm");
		} finally {
			setLoading(false);
		}
	};

	// 🔸 Lọc theo tình trạng hàng
	const handleStockFilterChange = async (
		value: "in-stock" | "out-of-stock"
	) => {
		try {
			setStockFilter(value);
			setLoading(true);

			const inStock = value === "in-stock";
			const res = await filterProductsByStock(inStock);
			console.log(res);
			onCheckedChange(res.data);

			if (res) {
				toast.success(
					inStock ? "Đã lọc sản phẩm còn hàng" : "Đã lọc sản phẩm hết hàng"
				);
			}
		} catch (error) {
			console.error("Lỗi khi lọc theo tình trạng hàng:", error);
			toast.error("Không thể lọc theo tình trạng hàng");
		} finally {
			setLoading(false);
		}
	};

	// 🔸 Xoá tất cả bộ lọc
	const handleClearFilters = async () => {
		try {
			setSelectedCategoryId(null);
			setStockFilter(null);
			setLoading(true);

			const res = await getAllProducts();
			onCheckedChange(res.data);

			toast.success("Đã xoá tất cả bộ lọc");
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

			{/* Danh mục */}
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
											if (checked) handleCategorySelect(category.id);
											else setSelectedCategoryId(null);
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

			{/* Khoảng giá (chưa triển khai) */}
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Khoảng giá</h3>
				<Slider />
				<div className="flex justify-between text-sm text-muted-foreground">
					<span>22</span>
					<span>344</span>
				</div>
			</div>

			{/* Tình trạng hàng */}
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Tình trạng</h3>
				<RadioGroup
					value={stockFilter || ""}
					onValueChange={(val) =>
						handleStockFilterChange(val as "in-stock" | "out-of-stock")
					}
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

			{/* Nút xoá bộ lọc */}
			<div className="absolute top-4 right-4">
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
};

export default FilterSidebar;
