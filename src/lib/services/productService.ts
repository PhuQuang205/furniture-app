import api from "@/lib/axios";

export interface PropsProducts {
	id: number;
	name: string;
	discountPercent: number;
	finalPrice: number;
	mainImageUrl: string;
	price: number;
	categoryName: string;
}

export interface PropDetailProduct {
	id: number;
	name: string;
	alias: string;
	category: {
		id: number;
		name: string;
		alias: string;
		image: string;
	};
	shortDescription: string;
	fullDescription: string;
	enabled: boolean;
	inStock: boolean;
	cost: number;
	price: number;
	discountPercent: number;
	finalPrice: number;
	length: number;
	width: number;
	height: number;
	weight: number;
	images: {
		id: number;
		imageUrl: string;
		position: number;
	}[];
	details: {
		name: string;
		value: string;
	}[];
}


// 🟢 Lấy toàn bộ sản phẩm
export const getAllProducts = async () => {
	const res = await api.get("/products");
	return res.data;
};

// 🟢 1. Lọc theo danh mục
export const filterProductsByCategory = async (categoryId: number) => {
	const res = await api.get("/products", {
		params: { categoryId },
	});
	return res.data;
};

// 🟢 2. Lọc theo khoảng giá
export const filterProductsByPrice = async (
	minPrice: number,
	maxPrice: number
) => {
	const res = await api.get("/products", {
		params: { minPrice, maxPrice },
	});
	return res.data;
};

// 🟢 3. Lọc theo tình trạng hàng tồn
export const filterProductsByStock = async (inStock: boolean) => {
	const res = await api.get("/products", {
		params: { inStock },
	});
	return res.data;
};

// 🔵 Sắp xếp sản phẩm
export const sortProducts = async (
	sortField: string,
	sortDir: "asc" | "desc"
) => {
	const res = await api.get("/products", {
		params: {
			sortField,
			sortDir,
		},
	});
	return res.data;
};

export const getProductById = async (id: number) => {
	const res = await api.get(`/products/${id}`);
	return res.data;
};

export const getProductByCategoryId = async (categoryId: number) => {
	const res = await api.get("/products", {
		params: {
			categoryId,
		}
	});
	return res.data;
};
