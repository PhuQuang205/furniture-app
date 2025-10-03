'use client'

import { CommitSection } from "@/components/section/commit-section";
import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import { FilterSidebar } from "@/components/filter-sidebar";
import { ActiveFilters } from "@/components/active-filters";
import { Pagination } from "@/components/pagination";
import { products } from "@/context";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const ShopPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [activeFilters, setActiveFilters] = useState([
		{ id: "1", label: "Price: $25.00 - $225.00" },
		{ id: "2", label: "Brown" },
		{ id: "3", label: "In Stock" },
	]);

	const totalResults = 240;
	const resultsPerPage = 12;
	const totalPages = Math.ceil(totalResults / resultsPerPage);
	const startResult = (currentPage - 1) * resultsPerPage + 1;
	const endResult = Math.min(currentPage * resultsPerPage, totalResults);

	const handleRemoveFilter = (id: string) => {
		setActiveFilters(activeFilters.filter((filter) => filter.id !== id));
	};

	const handleClearAll = () => {
		setActiveFilters([]);
	};

	return (
		<div className="">
			{/* Phần tiêu đề page */}
			<div className="h-70 bg-subbg flex flex-col items-center justify-center gap-4">
				<h1 className="text-5xl lg:text-7xl font-semibold">Shop</h1>
				<div>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/">Home</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Shop</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
			{/* Phần nội dung chứa sản phẩm */}
			<div>
				<div className="min-h-screen bg-background">
					<div className="container mx-auto px-4 py-8">
						<div className="flex gap-8">
							{/* Sidebar */}
							<FilterSidebar />

							{/* Main Content */}
							<div className="flex-1 space-y-6">
								{/* Header */}
								<div className="flex items-center justify-between">
									<p className="text-sm text-muted-foreground">
										Showing {startResult}-{endResult} of {totalResults} results
									</p>
									<div className="flex items-center gap-2">
										<span className="text-sm">Sort by</span>
										<Select defaultValue="default">
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Default Sorting" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="default">Default Sorting</SelectItem>
												<SelectItem value="price-low">
													Price: Low to High
												</SelectItem>
												<SelectItem value="price-high">
													Price: High to Low
												</SelectItem>
												<SelectItem value="rating">Highest Rated</SelectItem>
												<SelectItem value="newest">Newest</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</div>

								{/* Active Filters */}
								<ActiveFilters
									filters={activeFilters}
									onRemove={handleRemoveFilter}
									onClearAll={handleClearAll}
								/>

								{/* Product Grid */}
								<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
									{products.map((product) => (
										<ProductCard key={product.id} product={product} />
									))}
								</div>

								{/* Pagination */}
								<div className="mt-8">
									<Pagination
										currentPage={currentPage}
										totalPages={totalPages}
										onPageChange={setCurrentPage}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Phần cam kết sp */}
			<CommitSection />
		</div>
	);
};

export default ShopPage;
