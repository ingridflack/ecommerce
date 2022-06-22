import { IProductItem, IProductStock } from "../interfaces";
import { api } from "./api";

export const getProducts = () => {
  return api.get("/products");
};

export const checkProductStock = (productId: string) =>
  api.get<IProductStock>(`/products/stock/${productId}`);

interface OrderBody {
  name: string;
  date: string;
  products: IProductItem[];
}

export const order = (body: OrderBody) => {
  return api.post("/orders", body);
};
