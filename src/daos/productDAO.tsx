import { fetchWithAuth, getUserIP } from "utils/helpers";

const APIurl = process.env.NEXT_PUBLIC_API_URL;

export async function getProductInfo(product_slug: string, authContext: any) : Promise<Response> {
  const ip = await getUserIP();

  return fetchWithAuth(`${APIurl}/api/store/products/${product_slug}/`, {
    method: "GET",
    headers: {
      "Real-Ip": ip
    }
  }, authContext)
}