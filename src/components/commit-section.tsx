import React from "react";
import { FEATURES } from "@/context";
import Image from "next/image";

export const CommitSection = () => {
	return (
		<div className="container mx-auto px-8 lg:px-0">
			<div className="py-8 lg:py-16">
				<div className="flex items-center justify-center gap-12">
					{FEATURES.map((item) => (
						<div key={item.id} className="text-black flex flex-col lg:flex-row gap-2 items-center">
							<div>
								<Image
									src={item.impage}
									alt={item.title}
									width={500}
									height={500}
									className="size-12"
								/>
							</div>
							<div className="space-y-1 max-lg:text-center">
								<h1 className="font-bold text-lg max-md:text-sm max-sm:whitespace-nowrap">{item.title}</h1>
								<p className="text-sm hidden lg:block">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
