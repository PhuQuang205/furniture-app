import api from "@/lib/axios";

export interface PropsCart {
    productId: number,
    quantity: number
}

export interface PropCart {
  productId: number;
  productName: string;
  productImageUrl: string;
  price: number;
  quantity: number;
  subTotalItem: number;
}


export const getAllCart = async () => {
  const res = await api.get("/cart");
  return res.data;
};

export const addToCart = async (data: PropsCart) => {
  const res = await api.post("/cart", data);
  return res.data;
};

export const updateCart = async (data: PropsCart) => {
  const res = await api.put("/cart", data);
  return res;
};

export const removeCartItem = async (productId: number) => {
  const res = await api.delete(`/cart/${productId}`);
  return res;
};
