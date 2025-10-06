import { Button } from "@/components/ui/button";

const LogOut = () => {
	return (
		<div>
			<h1 className="text-xl font-semibold">Logout</h1>
			<p className="text-sm text-black/60">Bạn có chắc chắn muốn đăng xuất?</p>
			<Button className="mt-4 h-12 cursor-pointer">Đăng xuất</Button>
		</div>
	);
};

export default LogOut;
