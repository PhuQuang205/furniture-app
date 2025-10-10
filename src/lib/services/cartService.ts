import api from "@/lib/axios";

export interface PropsCart {
    productId: number,
    quantity: number
}

export const getCart = async () => {
  const res = await api.get("/cart");
  return res.data;
};

export const addToCart = async (data: PropsCart) => {
  const res = await api.post("/cart", data);
  return res.data;
};

export const updateCart = async (data: PropsCart) => {
  const res = await api.put("/cart", data);
  return res.data;
};

export const removeCartItem = async (productId: number) => {
  const res = await api.delete(`/cart/${productId}`);
  return res.data;
};
