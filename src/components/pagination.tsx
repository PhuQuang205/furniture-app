"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

const Pagination = ({
	currentPage,
	totalPages,
	onPageChange,
}: PaginationProps) => {
	const pages = [];

	// Always show first page
	pages.push(1);

	// Show current page and surrounding pages
	if (currentPage > 3) {
		pages.push(-1); // Ellipsis
	}

	for (
		let i = Math.max(2, currentPage - 1);
		i <= Math.min(totalPages - 1, currentPage + 1);
		i++
	) {
		pages.push(i);
	}

	// Show ellipsis and last page
	if (currentPage < totalPages - 2) {
		pages.push(-2); // Ellipsis
	}

	if (totalPages > 1) {
		pages.push(totalPages);
	}

	return (
		<div className="flex items-center justify-center gap-1">
			<Button
				variant="ghost"
				size="icon"
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className="h-9 w-9"
			>
				<ChevronLeft className="h-4 w-4" />
			</Button>

			{pages.map((page, index) => {
				if (page < 0) {
					return (
						<span
							key={`ellipsis-${index}`}
							className="px-2 text-muted-foreground"
						>
							...
						</span>
					);
				}

				return (
					<Button
						key={page}
						variant={currentPage === page ? "default" : "ghost"}
						size="icon"
						onClick={() => onPageChange(page)}
						className="h-9 w-9"
					>
						{page}
					</Button>
				);
			})}

			<Button
				variant="ghost"
				size="icon"
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className="h-9 w-9"
			>
				<ChevronRight className="h-4 w-4" />
			</Button>
		</div>
	);
};

export default Pagination;
