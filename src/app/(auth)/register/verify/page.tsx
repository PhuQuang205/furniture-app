"use client";

import { Button } from "@/components/ui/button";
import { FurnitureLogo } from "@/components/FurnitureLogo";
import {
	useState,
	useRef,
	type KeyboardEvent,
	type ClipboardEvent,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { verifyAccount } from "@/lib/services/authService";

const VerifyCode = () => {
	const param = useSearchParams();
	const email = param.get("email");
	const router = useRouter();

	const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
	const [loading, setLoading] = useState(false);
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	const handleChange = (index: number, value: string) => {
		if (value.length > 1) value = value.slice(-1);
		if (value && !/^\d$/.test(value)) return;

		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		if (value && index < 5) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("text").slice(0, 6);
		const digits = pastedData.split("").filter((char) => /^\d$/.test(char));

		const newCode = [...code];
		digits.forEach((digit, index) => {
			if (index < 6) newCode[index] = digit;
		});
		setCode(newCode);

		const nextEmptyIndex = newCode.findIndex((digit) => !digit);
		const focusIndex = nextEmptyIndex === -1 ? 5 : nextEmptyIndex;
		inputRefs.current[focusIndex]?.focus();
	};

	const handleVerify = async () => {
		if (!email) {
			toast.error("Không tìm thấy email xác thực!");
			return;
		}

		const otp = code.join("");
		if (otp.length !== 6) {
			toast.error("Vui lòng nhập đầy đủ 6 chữ số OTP!");
			return;
		}

		try {
			setLoading(true);
			const res = await verifyAccount(email, otp);
			toast.success(res.message || "Xác thực thành công!");
			router.push("/login"); 
		} catch (error) {
			toast.error("Xác thực thất bại. Vui lòng thử lại!");
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const handleResendCode = () => {
		toast.info("Đang gửi lại mã...");
		// TODO: Gọi API resend nếu backend hỗ trợ
	};

	return (
		<div className="flex items-center justify-center p-8 bg-white">
			<div className="w-full max-w-md space-y-8">
				<div className="space-y-2">
					<FurnitureLogo active={false} />
				</div>

				<div className="space-y-2">
					<h1 className="text-4xl font-bold text-foreground">Xác thực mã</h1>
					<p className="text-muted-foreground">
						Vui lòng nhập mã chúng tôi vừa gửi đến email{" "}
						<span className="text-foreground font-semibold">{email}</span>
					</p>
				</div>

				<div className="space-y-6">
					<div className="space-y-3">
						<label className="text-sm font-medium text-foreground">
							Nhập mã <span className="text-destructive">*</span>
						</label>
						<div className="flex gap-3 justify-between my-8">
							{code.map((digit, index) => (
								<input
									key={index}
									ref={(el) => {
										inputRefs.current[index] = el;
										return; 
									}}
									type="text"
									inputMode="numeric"
									maxLength={1}
									value={digit}
									onChange={(e) => handleChange(index, e.target.value)}
									onKeyDown={(e) => handleKeyDown(index, e)}
									onPaste={handlePaste}
									className="size-14 text-center text-2xl font-semibold rounded-full border border-gray-200 bg-background text-foreground focus:border-greenly focus:outline-none focus:ring-2 focus:ring-greenly/20 transition-colors"
									placeholder="–"
								/>
							))}
						</div>
					</div>

					<Button
						onClick={handleVerify}
						disabled={loading}
						className="w-full h-12 text-base font-medium bg-[#2d5016] hover:bg-[#234012] text-white rounded-full"
					>
						{loading ? "Đang xác thực..." : "Verify"}
					</Button>

					<p className="text-center text-sm text-foreground">
						Chưa nhận được mã?{" "}
						<button
							onClick={handleResendCode}
							className="underline font-medium hover:text-[#2d5016] transition-colors"
						>
							Gửi lại mã
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default VerifyCode;
