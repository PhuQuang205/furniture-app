// components/PageHeader.tsx
import Link from "next/link";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbType {
	label: string;
	href?: string;
}

interface PageHeaderProps {
	title: string;
	breadcrumbs: BreadcrumbType[];
}

export default function BreadcrumbHeader({
	title,
	breadcrumbs,
}: PageHeaderProps) {
	return (
		<div className="h-70 bg-subbg flex flex-col items-center justify-center gap-4">
			<h1 className="text-5xl lg:text-7xl font-semibold">{title}</h1>
			<div>
				<Breadcrumb>
					<BreadcrumbList>
						{breadcrumbs.map((item, index) => {
							const isLast = index === breadcrumbs.length - 1;
							return (
								<React.Fragment key={index}>
									<BreadcrumbItem>
										{item.href && !isLast ? (
											<BreadcrumbLink asChild>
												<Link href={item.href}>{item.label}</Link>
											</BreadcrumbLink>
										) : (
											<BreadcrumbPage>{item.label}</BreadcrumbPage>
										)}
									</BreadcrumbItem>

									{!isLast && <BreadcrumbSeparator />}
								</React.Fragment>
							);
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</div>
	);
}
