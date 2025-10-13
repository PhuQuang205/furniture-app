'use client'

import { Button } from "@/components/ui/button";
import { logout } from "@/lib/services/authService";

const LogOut = () => {
	const handleLogout = async () => {
		await logout();
	};
	return (
		<div>
			<h1 className="text-xl font-semibold">Logout</h1>
			<p className="text-sm text-black/60">Bạn có chắc chắn muốn đăng xuất?</p>
			<Button className="mt-4 h-12 cursor-pointer" onClick={handleLogout}>
				Đăng xuất
			</Button>
		</div>
	);
};

export default LogOut;
