import api from "@/lib/axios";

export type MethodPayment = "COD" | "STRIPE" | "ZALOPAY";

export const PAYMENT_METHODS: {
	id: string;
	value: MethodPayment;
	label: string;
}[] = [
	{ id: "option-one", value: "COD", label: "Thanh toán khi nhận hàng" },
	{ id: "option-two", value: "STRIPE", label: "Thanh toán qua Stripe" },
	{ id: "option-three", value: "ZALOPAY", label: "Thanh toán qua Zalo Pay" },
];

export interface Summary {
	items: number;
	subTotal: number;
}

export interface CheckoutData {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	addressLine: string;
	provinceCode: number;
	provinceName: string;
	wardName: string;
	paymentMethod: string;
	estimatedShippingFee: number;
}


export interface OrderDetail {
	productId: number;
	productName: string;
	imageUrl: string;
	price: number;
	quantity: number;
}

export interface Order {
	id: number;
	firstName: string;
	lastName: string;
	provinceName: string;
	wardName: string;
	orderTime: string; 
	addressLine: string;
	phoneNumber: string;
	email: string;
	shippingCost: number;
	productCost: number;
	subtotal: number;
	total: number;
	deliverDays: number;
	deliverDate: string | null;
	status: "NEW" | "PROCESSING"| "CANCELLED" | "PICKED" | "PACKAGED" | "SHIPPING" | "DELIVERED" | "RETURN_REQUESTED" | "RETURNED" | "RETURN_REJECTED"; 
	paymentMethod: MethodPayment;
	paymentStatus: "PENDING" | "PAID" | "FAILED";
	details: OrderDetail[];
}

export type OrdersResponse = Order[];



export const getAllSummary = async () => {
	const res = await api.get("/orders/summary");
	return res.data;
};

export const getShippingFee = async (provinceCode: number) => {
	try {
		const res = await api.get(`/shipping/fee?provinceCode=${provinceCode}`);
		return res.data;
	} catch (error) {
		console.error("Error fetching shipping fee:", error);
		throw error;
	}
};

export const orderItems = async (order: CheckoutData) => {
	try {
		const res = await api.post("/orders", order);
		return res.data;
	} catch (error) {
		console.log("Error: ", error)
		throw error;
	}
};

export const getOrderItemsLatest = async () => {
	try {
		const res = await api.get("/orders");
		return res.data;
	} catch (error) {
		console.log("Error: ", error)
		throw error;
	}
};
