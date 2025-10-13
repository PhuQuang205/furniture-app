import api from "@/lib/axios";

export interface PropsCategory {
    id: number,
    name: string,
    alias: string,
    image?: string,
}

export const getCategories = async () => {
  try {
    const res = await api.get("/categories");
    return res.data;
  } catch (error) {
    console.error("Lỗi khi lấy danh mục:", error);
    throw error;
  }
};
