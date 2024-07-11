const APIurl = process.env.NEXT_PUBLIC_API_URL;

export function getProductInfo(product_slug: string) : Promise<Response> {
  return fetch(`${APIurl}/api/store/products/${product_slug}/`)
}