import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface PropBlog {
	blog: {
		id: number;
		title: string;
		image: string;
		description: string;
		date: string;
	};
	className?: string;
}

export const CardBlog = ({ blog, className }: PropBlog) => {
	return (
		<div className={cn("w-full", className)}>
			<div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-xl overflow-hidden">
				<Image
					src={blog.image || "/placeholder.svg"}
					alt={blog.title}
					width={400}
					height={250}
					className="w-full h-full object-cover"
				/>
				<div className="absolute bg-yelly bottom-0 left-1/2 -translate-x-1/2 border-2 rounded-t-xl border-white px-4 pt-2">
					<p className="text-black px-3 py-1 text-sm font-medium">
						{blog.date}
					</p>
				</div>
			</div>

			<div className="py-4">
				<h3 className="text-2xl font-semibold text-black mb-3 leading-tight">
					{blog.title}
				</h3>
				<p className="text-black/80 text-sm mb-4 leading-relaxed">
					{blog.description}
				</p>
				<Link
					href="#"
					className="underline text-greenly hover:text-greenly/80 font-medium underline-offset-4"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};
