import React from "react";
import { FEATURES } from "@/context";
import Image from "next/image";

export const CommitSection = () => {
	return (
		<div className="container mx-auto">
			<div className="py-8 lg:py-16 px-8 lg:px-4">
				<div className="flex items-center justify-between gap-12">
					{FEATURES.map((item) => (
						<div key={item.id} className="text-black flex flex-col lg:flex-row gap-2 items-center">
							<div>
								<Image
									src={item.impage}
									alt={item.title}
									width={500}
									height={500}
									className="size-10 lg:size-15"
								/>
							</div>
							<div className="max-lg:text-center">
								<h1 className="font-bold text-lg max-md:text-sm">{item.title}</h1>
								<p className="text-sm text-black/80 hidden lg:block">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
