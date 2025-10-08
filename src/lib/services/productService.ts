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
export const filterProductsByPrice = async (minPrice: number, maxPrice: number) => {
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
