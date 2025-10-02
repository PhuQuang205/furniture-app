import { CONTACT_INFO } from "@/context";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { CommitSection } from "@/components/section/commit-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const ContactPage = () => {
	return (
		<div>
			{/* Phần tiêu đề page */}
			<div className="h-70 bg-subbg flex flex-col items-center justify-center gap-4">
				<h1 className="text-5xl lg:text-7xl font-semibold">Liên hệ</h1>
				<div>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink asChild>
									<Link href="/">Trang chủ</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>Liên hệ</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</div>
			</div>
			<div className="container mx-auto">
				<div className="py-8 lg:py-16 flex flex-col lg:flex-row gap-2 lg:gap-8 px-8 lg:px-4">
					{/* Phần điền form */}
					<div className="flex-1">
						<div className="mb-8">
							<h1 className="text-3xl font-medium mb-4">
								Liên hệ với chúng tôi
							</h1>
							<p className="text-sm text-black/80">
								Địa chỉ email của bạn sẽ không được công khai. Các trường bắt
								buộc được đánh dấu *
							</p>
						</div>
						<form className="space-y-6">
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label
										htmlFor="name"
										className="text-md font-semibold text-black"
									>
										Họ và tên*
									</Label>
									<Input
										id="name"
										type="text"
										placeholder="Nhập vào"
										className="h-12 border-gray-300 px-5  mt-4"
									/>
								</div>
								<div className="space-y-2">
									<Label
										htmlFor="email"
										className="text-md font-semibold text-black"
									>
										Email*
									</Label>
									<Input
										id="lastName"
										type="text"
										placeholder="Nhập email"
										className="h-12 px-5 border-gray-300 mt-4"
									/>
								</div>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="subject"
									className="text-md font-semibold text-black"
								>
									Tiêu đề*
								</Label>
								<Input
									id="subject"
									type="text"
									placeholder="Nhập tiêu đề"
									className="h-12 px-5 border-gray-300 mt-4"
								/>
							</div>
							<div className="space-y-2">
								<Label
									htmlFor="message"
									className="text-md font-semibold text-black"
								>
									Tin nhắn của bạn*
								</Label>
								<Textarea
									placeholder="Nhập tin nhắn tại đây..."
									className="rounded-2xl mt-4 h-52 px-4 py-4"
								/>
							</div>

							<div className="flex flex-col lg:inline-flex">
								<Button className="bg-greenly mb-6 h-12 text-md cursor-pointer hover:bg-greenly/90">
									Gửi tin nhắn
								</Button>
							</div>
						</form>
					</div>
					{/* Phần thông tin */}
					<div className="bg-greenly rounded-2xl flex-1">
						<div className="text-white space-y-24 p-6 w-full">
							<div className="">
								<h3 className="font-semibold text-lg">Địa chỉ</h3>
								<p>{CONTACT_INFO.address}</p>
							</div>
							<div>
								<h3 className="mt-4 font-semibold text-lg">Liên hệ</h3>
								<p>Điện thoại: {CONTACT_INFO.contact.phone}</p>
								<p>Email: {CONTACT_INFO.contact.email}</p>
							</div>

							<div>
								<h3 className="mt-4 font-semibold text-lg">Giờ mở cửa</h3>
								{CONTACT_INFO.openTime.map((item, i) => (
									<p key={i}>
										{item.day}: {item.time}
									</p>
								))}
							</div>

							<div>
								<h3 className="mt-4 font-semibold text-lg">
									Kết nối với chúng tôi
								</h3>
								<div className="flex gap-3 mt-2">
									{CONTACT_INFO.socialLinks.map((social) => (
										<Link
											key={social.id}
											href={social.url}
											className="text-yellow-400 text-xl"
										>
											<Image src={`${social.image}`} className="size-10" alt={social.name} width={500} height={500}/>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Phần map */}
			<div className="h-96 w-full bg-greenly/40 text-yelly flex items-center justify-center">
				{/* <Image
					src="/map.png"
					alt="map-address"
					className="object-contain size-full"
					width={500}
					height={500}
				/> */}
				<div>Bản đồ địa chỉ cửa hàng</div>
			</div>
			{/* Phần cam kết sp */}
			<CommitSection />
		</div>
	);
};

export default ContactPage;
