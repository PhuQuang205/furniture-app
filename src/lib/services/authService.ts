import api from "@/lib/axios";

export interface Customer {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	avatarUrl?: string | null;
}

export interface CustomerRequest {
	id: number;
	firstName: string;
	lastName: string;
	gender: string;
	phoneNumber: string;
}

export const login = async (email: string, password: string) => {
	const res = await api.post("/oauth/login", { email, password });
	const { accessToken, customer } = res.data;

	// Lưu accessToken vào localStorage
	localStorage.setItem("accessToken", accessToken);
	localStorage.setItem("customer", JSON.stringify(customer));
	return res.data;
};

export const logout = () => {
	localStorage.removeItem("accessToken");
	window.location.href = "/login";
};

export const updateCustomer = async (customer: CustomerRequest, avatar?: File) => {
  const formData = new FormData();

  // 🧩 Thêm JSON vào phần "customer"
  formData.append("customer", new Blob([JSON.stringify(customer)], { type: "application/json" }));

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


