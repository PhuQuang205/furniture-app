import api from "@/lib/axios";

export interface PropsCategory {
    id: number,
    name: string,
    alias: string,
    image?: string,
}

/**
 * Lấy danh sách tất cả danh mục sản phẩm
 * @returns Mảng các category
 */

export const getCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    throw error;
  }
};
