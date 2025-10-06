import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UpdatePassword = () => {
	return (
		<div>
			<form className="space-y-6">
				<div className="space-y-2">
					<Label
						htmlFor="password"
						className="text-md font-semibold text-black"
					>
						Mật khẩu<span className="text-red-500">*</span>
					</Label>
					<div className="relative">
						<Input
							id="password"
							type="password"
							placeholder="Nhập mật khẩu"
							className="h-12 px-5 border-gray-300"
						/>
					</div>
				</div>				
				<div className="space-y-2">
					<Label
						htmlFor="password"
						className="text-md font-semibold text-black"
					>
						Mật khẩu mới<span className="text-red-500">*</span>
					</Label>
					<div className="relative">
						<Input
							id="password"
							type="password"
							placeholder="Nhập mật khẩu"
							className="h-12 px-5 border-gray-300"
						/>
					</div>
				</div>				
				<div className="space-y-2">
					<Label
						htmlFor="password"
						className="text-md font-semibold text-black"
					>
						Xác nhận mật khẩu<span className="text-red-500">*</span>
					</Label>
					<div className="relative">
						<Input
							id="password"
							type="password"
							placeholder="Nhập mật khẩu"
							className="h-12 px-5 border-gray-300"
						/>
					</div>
				</div>			
        <Button className="h-12">Cập nhật mật khẩu</Button>	
			</form>
		</div>
	);
};

export default UpdatePassword;
