import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Personal = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="size-[150px] rounded-full overflow-hidden mb-8">
				<Image
					src="https://i.pinimg.com/736x/80/e2/30/80e230ceac7bc17d2f89eb0d2288d677.jpg"
					alt="logo"
					className="object-cover size-full"
					width={50}
					height={50}
				/>
			</div>
			<form className="space-y-6">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label
							htmlFor="firstName"
							className="text-md font-semibold text-black"
						>
							Họ
						</Label>
						<Input
							id="firstName"
							type="text"
							placeholder="Nhập họ"
							className="h-12 border-gray-300 px-5"
						/>
					</div>
					<div className="space-y-2">
						<Label
							htmlFor="lastName"
							className="text-md font-semibold text-black"
						>
							Tên
						</Label>
						<Input
							id="lastName"
							type="text"
							placeholder="Nhập tên"
							className="h-12 px-5 border-gray-300"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="email" className="text-md text-black font-semibold">
						Email
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="Nhập địa chỉ email"
						className="h-12 border-gray-300 px-5"
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone" className="text-md text-black font-semibold">
						Số điện thoại
					</Label>
					<div className="relative">
						<Input
							id="phone"
							type="text"
							placeholder="Nhập số điện thoại"
							className="h-12 pr-10 border-gray-300 px-5"
						/>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="phone" className="text-md font-semibold text-black">
						Giới tính
					</Label>
					<Select>
						<SelectTrigger className="h-12 w-full rounded-full text-sm px-5 border-gray-300">
							<SelectValue
								placeholder="Chọn giới tính"
								className="data-[placeholder]:text-gray-300"
							/>
						</SelectTrigger>
						<SelectContent>
							<SelectItem className="py-2" value="male">
								Nam
							</SelectItem>
							<SelectItem className="py-2" value="female">
								Nữ
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="w-fit">
					<Button className="h-12 cursor-pointer">Cập nhật thông tin</Button>
				</div>
			</form>
		</div>
	);
};

export default Personal;
