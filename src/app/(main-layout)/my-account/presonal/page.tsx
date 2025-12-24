"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomerRequest, updateCustomer } from "@/lib/services/authService";
import { PhotoUpload } from "@/components";
import { Edit, X, CrossIcon } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Customer } from "@/lib/services/authService";
import { toast } from "sonner";

export default function MyAccount() {
	const [customer, setCustomer] = useState<Customer>();
	const [profile, setProfile] = useState<CustomerRequest>({
		id: 0,
		firstName: "",
		lastName: "",
		gender: "",
		phoneNumber: "",
	});

	const [avatar, setAvatar] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	useEffect(() => {
		const stored = localStorage.getItem("customer");
		if (stored) {
			const parsedCustomer = JSON.parse(stored);
			setCustomer(parsedCustomer);
			setProfile({
				id: Number(parsedCustomer?.id) || 0,
				firstName: parsedCustomer?.firstName || "",
				lastName: parsedCustomer?.lastName || "",
				gender: parsedCustomer?.gender || "",
				phoneNumber: parsedCustomer?.phoneNumber || "",
			});
		}
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProfile((prev) => ({ ...prev, [name]: value }));
	};

	const handeSubmit = async () => {
		setLoading(true);
		try {
			const res = await updateCustomer(profile, avatar ?? undefined);
			if (res.status === 200) {
				toast.success("Cập nhật thông tin thành công!");
			}
		} catch (error) {
			console.log("error: ", error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="container mx-auto py-10 px-4">
			<h2 className="text-2xl font-semibold mb-6">Thông tin tài khoản</h2>

			<PhotoUpload
				onPhotoSelect={(file) => console.log(setAvatar(file))}
				initialImage={customer?.avatarUrl}
				disabled={!isEditing}
			/>

			<div className="space-y-4 mt-6">
				<div className="flex items-center gap-2">
					<Input
						name="firstName"
						value={profile.firstName}
						onChange={handleChange}
						placeholder="Họ"
						disabled={!isEditing}
					/>
					<Input
						name="lastName"
						value={profile.lastName}
						onChange={handleChange}
						placeholder="Tên"
						disabled={!isEditing}
					/>
				</div>

				<Select
					value={profile?.gender}
					onValueChange={(e) => setProfile((prev) => ({ ...prev, gender: e }))}
					disabled={!isEditing}
				>
					<SelectTrigger className="h-12 w-full">
						<SelectValue placeholder="Chọn giới tính" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="MALE">Nam</SelectItem>
						<SelectItem value="FEMALE">Nữ</SelectItem>
					</SelectContent>
				</Select>

				<Input
					name="phoneNumber"
					value={profile.phoneNumber}
					onChange={handleChange}
					placeholder="Số điện thoại"
					disabled={!isEditing}
				/>

				<Input
					name="email"
					value={customer?.email ?? ""}
					placeholder="Email"
					disabled
				/>

				<div className="flex items-center gap-4 h-12 mt-6">
					{isEditing ? (
						<Button
							onClick={() => {
								setIsEditing(false);
								setAvatar(null);
							}}
							variant="outline"
							className="h-full w-[200px] flex items-center gap-2 cursor-pointer"
						>
							<X className="size-5" />
							Huỷ
						</Button>
					) : (
						<Button
							onClick={() => setIsEditing(true)}
							className="h-full w-[200px] flex items-center gap-2 cursor-pointer"
						>
							<Edit className="size-5" />
							Chỉnh sửa
						</Button>
					)}

					<Button
						onClick={handeSubmit}
						disabled={!isEditing || loading}
						className={`h-full bg-greenly text-white flex items-center gap-2 transition-all duration-300 ${
							!isEditing
								? "bg-gray-700 text-white border border-gray-900"
								: "cursor-pointer"
						}`}
					>
						<CrossIcon className="size-5" />
						{loading ? "Đang cập nhật..." : "Lưu thay đổi"}
					</Button>
				</div>
			</div>
		</div>
	);
}
