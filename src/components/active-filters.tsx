"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ActiveFilter {
	id: string;
	label: string;
}

interface ActiveFiltersProps {
	filters: ActiveFilter[];
	onRemove: (id: string) => void;
	onClearAll: () => void;
}

const ActiveFilters = ({
	filters,
	onRemove,
	onClearAll,
}: ActiveFiltersProps) => {
	if (filters.length === 0) return null;

	return (
		<div className="flex flex-wrap items-center gap-2">
			<span className="text-sm font-medium">Active Filter</span>
			{filters.map((filter) => (
				<Badge
					key={filter.id}
					variant="secondary"
					className="gap-1 bg-accent px-3 py-1.5 text-accent-foreground"
				>
					{filter.label}
					<button
						onClick={() => onRemove(filter.id)}
						className="ml-1 rounded-full hover:bg-accent-foreground/20"
					>
						<X className="h-3 w-3" />
					</button>
				</Badge>
			))}
			<Button
				variant="ghost"
				size="sm"
				onClick={onClearAll}
				className="h-auto p-0 text-sm font-normal text-muted-foreground hover:text-foreground"
			>
				Clear All
			</Button>
		</div>
	);
};

export default ActiveFilters;
