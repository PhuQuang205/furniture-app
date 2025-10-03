import { CommitSection } from "@/components/section/commit-section";
import { STATS } from "@/context/index";
import Image from "next/image";
import BreadcrumbHeader from "@/components/breadcrumb-header";

const AboutUsPage = () => {
	return (
		<div>
			<BreadcrumbHeader
				title="Về chúng tôi"
				breadcrumbs={[
					{ label: "Trang chủ", href: "/" },
					{ label: "Về chúng tôi" },
				]}
			/>

			<div className="">
				<div className="py-4 lg:py-8 flex flex-col items-center gap-2">
					<div className="flex justify-center items-center flex-col gap-4 my-4">
						<div className="inline-flex items-center gap-2 ">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">
								Câu chuyện của chúng tôi
							</p>
						</div>
						<h2 className="text-4xl font-bold text-black max-w-xl text-center leading-12">
							Sự thoải mái được chế tác:{" "}
							<span className="text-greenly">
								Chất liệu cao cấp, Thiết kế bền vững
							</span>
						</h2>
					</div>
					<p className="text-sm font-[300] text-center max-w-5xl mx-auto">
						Chúng tôi tin rằng mỗi sản phẩm nội thất không chỉ đơn thuần là một
						món đồ, mà còn là sự gắn kết với không gian sống và phong cách của
						bạn. Với chất liệu được chọn lọc kỹ lưỡng và thiết kế tinh tế, chúng
						tôi mang đến những sản phẩm vừa bền vững, vừa mang lại sự thoải mái
						lâu dài.
					</p>
				</div>
			</div>
			<div className="py-12 text-center flex flex-col gap-1.5 items-center">
				<h1 className="text-2xl font-mosieur font-bold">Lê Văn Hùng</h1>
				<div className="flex items-center gap-1.5">
					<p>Lê Văn Hùng</p>
					<div className="size-1 bg-yelly rounded-full"></div>
					<p>Đại Diện Thương Hiệu</p>
				</div>
			</div>

			<div className="pb-12 container mx-auto px-8 lg:px-4 flex flex-col space-y-8">
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 h-[600px]">
					<div className="relative md:row-span-2 rounded-3xl overflow-hidden">
						<Image
							src="https://i.pinimg.com/736x/3c/0e/42/3c0e424769c7c7f2dcc2978012a1d440.jpg"
							alt="Professional carpenter with safety equipment in workshop"
							width={500}
							height={400}
							className="object-cover size-full"
							priority
						/>
					</div>
					<div className="rounded-3xl overflow-hidden">
						<Image
							src="https://i.pinimg.com/736x/1c/64/cd/1c64cd011c29cfe45ef6000d279663a7.jpg"
							alt="Carpenter operating drill press machinery"
							width={500}
							height={400}
							className="object-cover size-full"
						/>
					</div>
					<div className="rounded-3xl overflow-hidden">
						<Image
							src="https://i.pinimg.com/736x/6c/6c/66/6c6c66461b63a67929f820792bdbc105.jpg"
							alt="Detailed woodworking with tools and wood shavings"
							width={500}
							height={400}
							className="object-cover size-full"
						/>
					</div>
				</div>

				<div className="rounded-3xl bg-yelly">
					<div className="p-6 rounded-lg flex justify-between text-center">
						{STATS.map((item) => (
							<div
								key={item.id}
								className="w-full not-last:border-r border-black/10"
							>
								<h3 className="text-2xl font-bold">{item.value}</h3>
								<p className="text-sm">{item.label}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="container mx-auto px-4 py-16 lg:py-24 overflow-hidden">
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						<div className="relative">
							<div className="relative size-[700px] z-0 rounded-3xl overflow-hidden">
								{/* Phần bọc */}
								<div className="absolute inset-0 flex items-center justify-center z-10">
									<div className="size-[670px] border-3 border-white rounded-3xl"></div>
								</div>
								<Image
									src="https://i.pinimg.com/736x/2d/61/d6/2d61d6a988012f04283964729bd42c25.jpg"
									alt="Furniture craftsperson with measuring tape"
									width={500}
									height={500}
									className="object-cover size-full -left-10 bottom-0 right-0"
									priority
								/>
							</div>
						</div>
						<div className="space-y-8 bg-subbg p-16 rounded-3xl">
							<div className="py-4 lg:py-8 flex flex-col items-start gap-2 ">
								<div className="flex items-start flex-col gap-4 my-4">
									<div className="inline-flex items-center gap-2 ">
										<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
										<p className="text-base font-semibold">
											Chất lượng sản phẩm của chúng tôi
										</p>
									</div>
									<h2 className="text-4xl font-bold text-black max-w-xl text-left leading-12">
										Đặt ra{" "}
										<span className="text-greenly">
											tiêu chuẩn cho nội thất chất lượng
										</span>
									</h2>
									<p className="text-sm font-[300] max-w-xl text-left">
										Hãy để tôi trình bày một vài điều, consectetur adipiscing
										elit, nhưng do hoàn cảnh nhất định, có thể phải làm việc và
										chịu nhiều nỗi đau.
									</p>
								</div>
							</div>
							<div className="grid sm:grid-cols-2 gap-6">
								<div className="p-6">
									<div className="space-y-4">
										<div className="flex items-center justify-start">
											<Image
												src="/images/image-review/quality-wood.png"
												alt="Gỗ chất lượng tốt nhất"
												className="size-15 object-contain"
												width={500}
												height={500}
											/>
										</div>
										<h3 className="text-xl font-bold text-gray-900">
											Gỗ chất lượng tốt nhất
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Xuất phát từ bản chất, mọi lỗi lầm đều được loại bỏ để tạo
											ra sản phẩm hoàn hảo
										</p>
									</div>
								</div>
								<div className="p-6">
									<div className="space-y-4">
										<div className="flex items-center justify-start">
											<Image
												src="/images/image-review/chair-review.png"
												alt="Thiết kế hướng đến sự thoải mái"
												className="size-15 object-contain"
												width={500}
												height={500}
											/>
										</div>
										<h3 className="text-xl font-bold text-gray-900">
											Thiết kế hướng đến sự thoải mái
										</h3>
										<p className="text-gray-600 leading-relaxed">
											Mỗi sản phẩm được tạo ra với sự chú trọng đến cảm giác thư
											giãn và tiện nghi, mang lại trải nghiệm sử dụng thoải mái
											nhất cho bạn trong không gian sống.
										</p>
									</div>
								</div>
							</div>
							<div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none lg:hidden">
								<div className="grid grid-cols-4 gap-2">
									{Array.from({ length: 16 }).map((_, i) => (
										<div key={i} className="w-2 h-2 rounded-full bg-gray-400" />
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div className="py-4 lg:py-8 flex flex-col items-center gap-2">
					<div className="flex justify-center items-center flex-col gap-4 my-4">
						<div className="inline-flex items-center gap-2 ">
							<div className="w-5 h-0.5 rounded-2xl bg-yelly" />
							<p className="text-base font-semibold">Đội ngũ của chú tôi</p>
						</div>
						<h2 className="text-4xl font-bold text-black max-w-xl text-center leading-12">
							Hãy gặp{" "}
							<span className="text-greenly">đội ngũ của chúng tôi</span>
						</h2>
					</div>
					<p className="text-sm font-[300] text-center max-w-5xl mx-auto">
						Ba trong những số thành viên có kinh nghiệm lâu năm.
					</p>
				</div>
				<div className="container mx-auto pb-8 lg:pb-16 px-8 lg:px-4">
					<div className="flex justify-between gap-4">
						<div className="">
							<div className="rounded-3xl overflow-hidden">
								<Image
									src="https://i.pinimg.com/736x/56/30/98/563098bc1fb1113037daeccc51e4ffc2.jpg"
									alt="avatar-1"
									width={500}
									height={500}
									className="size-[500px] object-cover"
								/>
							</div>
							<div className="text-center mt-2">
								<h1 className="py-4 text-2xl font-semibold">Hoàng Văn Công</h1>
								<p className="text-md font-medium text-black/50">
									[ SEO, ADS ]
								</p>
							</div>
						</div>
						<div className="">
							<div className="rounded-3xl overflow-hidden">
								<Image
									src="https://i.pinimg.com/736x/56/30/98/563098bc1fb1113037daeccc51e4ffc2.jpg"
									alt="avatar-1"
									width={500}
									height={500}
									className="size-[500px] object-cover"
								/>
							</div>
							<div className="text-center mt-2">
								<h1 className="py-4 text-2xl font-semibold">Hoàng Văn Công</h1>
								<p className="text-md font-medium text-black/50">
									[ SEO, ADS ]
								</p>
							</div>
						</div>
						<div className="">
							<div className="rounded-3xl overflow-hidden">
								<Image
									src="https://i.pinimg.com/736x/56/30/98/563098bc1fb1113037daeccc51e4ffc2.jpg"
									alt="avatar-1"
									width={500}
									height={500}
									className="size-[500px] object-cover"
								/>
							</div>
							<div className="text-center mt-2">
								<h1 className="py-4 text-2xl font-semibold">Hoàng Văn Công</h1>
								<p className="text-md font-medium text-black/50">
									[ SEO, ADS ]
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CommitSection />
		</div>
	);
};

export default AboutUsPage;
