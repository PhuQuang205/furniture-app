import Image from "next/image";
import { twMerge } from "tailwind-merge";

const FurnitureLogo = ({
	className,
	active,
}: {
	className?: string;
	active: boolean;
}) => {
	return (
		<div className={twMerge("flex items-center gap-1.5")}>
			<div className="size-10 rounded-full flex items-center justify-center">
				{active ? (
					<Image
						src="/logo-white.png"
						alt="logo-wwhite"
						width={500}
						height={500}
					/>
				) : (
					<Image src="/logo.png" alt="logo" width={500} height={500} />
				)}
			</div>
			<h1 className={twMerge("text-xl font-bold text-black mb-2", className)}>
				HoangHa<span className="text-yelly text-3xl">.</span>
			</h1>
		</div>
	);
};

export default FurnitureLogo;
