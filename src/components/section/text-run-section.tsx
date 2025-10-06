import { PARTNER } from "@/context/index";
import Image from "next/image";

export const TextRunSection = () => {
	return (
		<div className="container mx-auto">
			<div className="px-8 lg:px-4">
				<div className="py-4 lg:py-8 flex flex-col items-center gap-2">
					<div className="flex justify-center items-center flex-col gap-4 my-4">
						<div className="inline-flex items-center gap-2">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Đối tác</p>
						</div>
						<h2 className="text-4xl font-bold text-black">
							<span className="text-greenly">Đối tác</span> của Hoàng Hà
						</h2>
					</div>
					<p className="text-sm font-[300] text-center">
						Kết nối và đồng hành cùng các đối tác chiến lược để tạo nên giá trị
						bền vững.
					</p>
				</div>
				<div className="flex items-center overflow-clip">
					<div className="flex-none flex gap-4 [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%]">
						{PARTNER.map((item) => (
							<div key={item.id} className="">
								<Image
									src={item.image}
									alt={item.id.toString()}
									className=""
									width={200}
									height={100}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
