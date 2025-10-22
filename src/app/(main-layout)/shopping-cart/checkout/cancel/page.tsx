"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import React from "react";

const CancelCheckOut = () => {
	const route = useRouter();
	const handleReturn = () => {
		route.push("/order");
	};
	return (
		<div className="container mx-auto">
		    <div className="h-96  py-8 lg:py-16 mx-8 lg:mx-4">
    			<h1 className="text-3xl font-semibold py-8">Đơn hàng thanh toán không thành công !</h1>
    			<Button className="cursor-pointer" onClick={handleReturn}>
    				Trở về !
    			</Button>
    		</div>
		</div>
	);
};

export default CancelCheckOut;
