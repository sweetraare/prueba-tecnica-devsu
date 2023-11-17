import Product from "../interfaces/products";
import axios from "axios";

export async function getAllProducts(): Promise<Product[]> {
  const { VITE_BASE_URL, VITE_AUTHOR_ID } = import.meta.env;
  const USER_URL = `${VITE_BASE_URL}/bp/products`;

  const { data } = await axios.get(USER_URL, {
    headers: { authorId: VITE_AUTHOR_ID },
  });

  return data;
}

export async function addProduct(product: Product): Promise<void> {
  const { VITE_BASE_URL, VITE_AUTHOR_ID } = import.meta.env;
  const USER_URL = `${VITE_BASE_URL}/bp/products`;

  await axios.post(USER_URL, product, {
    headers: { authorId: VITE_AUTHOR_ID },
  });
}
