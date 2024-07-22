import { fetchWithAuth } from "utils/helpers";

const APIurl = process.env.NEXT_PUBLIC_API_URL;

export function getProductInfo(product_slug: string, authContext: any) : Promise<Response> {
  return fetchWithAuth(`${APIurl}/api/store/products/${product_slug}/`, {}, authContext)
}