"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { FurnitureLogo } from "@/components/FurnitureLogo";
import { toast } from "sonner";
import { registerUser } from "@/lib/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegisterPage = () => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { id, value } = e.target;
		setFormData((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await registerUser(formData);
			toast.success("Đăng ký thành công!");
			router.push(`/register/verify?email=${encodeURIComponent(res.email)}`);
		} catch (error) {
			toast.error("Đăng ký thất bại. Vui lòng thử lại!");
			console.error(error);
		}finally {
			setLoading(false)
		}
	};

	return (
		<div className="flex items-center justify-center p-8 bg-white">
			<div className="w-full max-w-md space-y-8">
				<div className="space-y-2">
					<FurnitureLogo active={false} />
				</div>

				<div className="space-y-3">
					<h1 className="text-4xl font-semibold text-black">Đăng ký</h1>
					<p className="text-sm text-black">
						Điền thông tin của bạn phía bên dưới hoặc tài khoản google.
					</p>
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
								onChange={handleChange}
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
								onChange={handleChange}
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
							onChange={handleChange}
							id="email"
							type="email"
							placeholder="Nhập địa chỉ email"
							className="h-12 border-gray-300 px-5"
						/>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-md text-black font-semibold"
						>
							Mật khẩu
						</Label>
						<div className="relative">
							<Input
								onChange={handleChange}
								id="password"
								type="password"
								placeholder="Nhập mật khẩu"
								className="h-12 pr-10 border-gray-300 px-5"
							/>
						</div>
					</div>

					<div className="flex items-start space-x-2">
						<Checkbox id="terms" className="size-5 border-gray-300" />
						<Label
							htmlFor="terms"
							className="text-sm text-black leading-relaxed"
						>
							Đồng ý với{" "}
							<Link href="/terms" className="underline underline-offset-4">
								Điều khoản
							</Link>{" "}
							và{" "}
							<Link href="/privacy" className="underline underline-offset-4">
								Chính sách bảo mật
							</Link>
						</Label>
					</div>
					<Button
						className="w-full bg-greenly mb-6 h-12 text-md cursor-pointer hover:bg-greenly/90"
						onClick={handleSubmit}
					>
						{loading ? "Loading..." : "Đăng ký"}
					</Button>

					<div className="text-center">
						<span className="text-sm text-gray-600">
							Đã có tài khoản?{" "}
							<Link
								href="/login"
								className="text-md text-greenly underline underline-offset-4"
							>
								Đăng nhập
							</Link>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
