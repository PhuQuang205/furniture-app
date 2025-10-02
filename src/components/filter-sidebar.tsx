"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";

const categories = [
	"Bedroom",
	"Living Room",
	"Office",
	"Lighting",
	"Kitchen",
	"Outdoor",
	"Decor",
];

export function FilterSidebar() {
	const [priceRange, setPriceRange] = useState([25, 125]);

	return (
		<aside className="w-64 space-y-6 rounded-lg bg-card p-6">
			<h2 className="text-lg font-semibold">Bộ lọc</h2>
			{/* Lọc theo danh mục sản phầm */}
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Lọc theo danh mục</h3>
				<div className="space-y-2">
					{categories.map((category) => (
						<div key={category} className="flex items-center space-x-2">
							<Checkbox id={category} className="border-greenly"/>
							<Label
								htmlFor={category}
								className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								{category}
							</Label>
						</div>
					))}
				</div>
			</div>

			{/* Phần lọc theo giá */}
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Lọc theo giá</h3>
				<div className="space-y-4">
					<Slider
						value={priceRange}
						onValueChange={setPriceRange}
						min={0}
						max={200}
						step={5}
						className="w-full"
					/>
					<div className="flex items-center justify-between text-sm text-muted-foreground">
						<span>${priceRange[0]}.00</span>
						<span>${priceRange[1]}.00</span>
					</div>
				</div>
			</div>

			{/* Phần lọc tồn kho */}
			<div className="space-y-3">
				<h3 className="text-sm font-medium">Availability</h3>
				<RadioGroup defaultValue="in-stock">
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="in-stock" id="in-stock" />
						<Label htmlFor="in-stock" className="text-sm font-normal">
							In Stock
						</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value="out-of-stock" id="out-of-stock" />
						<Label htmlFor="out-of-stock" className="text-sm font-normal">
							Out of Stock
						</Label>
					</div>
				</RadioGroup>
			</div>
		</aside>
	);
}
