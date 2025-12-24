import api from "@/lib/axios";

export interface LoginResponse {
	accessToken: string;
	customer: Customer;
}

export interface Customer {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	avatarUrl?: string | null;
	roles: [{ name: string; description: string }];
}

export interface AuthState {
	user: Customer | null;
	isAuthenticated: boolean;
	isLoading: boolean;
}

export interface CustomerRequest {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	phoneNumber: string;
}

export interface RegisterRequest {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface RegisterResponse {
	message: string;
	email: string;
}

export interface VerifyResponse {
	message: string;
	status?: string;
}

export const login = async (formState: {
	email: string;
	password: string;
}): Promise<LoginResponse> => {
	const res = await api.post("/oauth/login", formState);
	const { accessToken, customer } = res.data;
	localStorage.setItem("accessToken", accessToken);
	localStorage.setItem("customer", JSON.stringify(customer));
	return res.data;
};

export const logout = () => {
	localStorage.removeItem("accessToken");
	window.location.href = "/login";
};

export const updateCustomer = async (
	customer: CustomerRequest,
	avatar?: File
) => {
	const formData = new FormData();

	// 🧩 Thêm JSON vào phần "customer"
	formData.append(
		"customer",
		new Blob([JSON.stringify(customer)], { type: "application/json" })
	);

	// 🖼️ Nếu có ảnh, thêm vào
	if (avatar) {
		formData.append("avatar", avatar);
	}

	// 🚀 Gọi API với header chính xác
	const res = await api.put("/customers/information", formData, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});

	return res;
};

export const registerUser = async (
	payload: RegisterRequest
): Promise<RegisterResponse> => {
	try {
		const res = await api.post("/oauth/register", payload);
		return res.data as RegisterResponse;
	} catch (error) {
		console.error("Failed to register:", error);
		throw error;
	}
};

export const verifyAccount = async (
	email: string,
	otp: string
): Promise<VerifyResponse> => {
	try {
		const res = await api.post("/oauth/verify", { email, otp });
		return res.data as VerifyResponse;
	} catch (error) {
		console.error("Failed to verify account:", error);
		throw error;
	}
};
