import api from "@/lib/axios";

export interface OrderTracking {
	id: number;
	notes: string;
	updatedTime: string; 
	status: string;     
}


export const getOrderTracking = async (orderId: number) => {
	try {
		const res = await api.get(`/orders/${orderId}/track`);
		return res.data;
	} catch (error) {
		console.error("Failed to fetch order tracking:", error);
		throw error;
	}
};
