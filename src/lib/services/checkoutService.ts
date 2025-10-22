import api from "@/lib/axios";

const API_BASE = "http://localhost:80/api/checkout";

export const checkoutServiceStripe = {
	createStripeSession: async (orderId: number) => {
		const res = await api.post(`${API_BASE}/stripe/create`, { orderId });
		return res.data;
	},
};
