import { StaticImageData } from "next/image";
import { AuthContextType } from "contexts/AuthContext";

export function translateCategory(category: string) {
  switch (category) {
    case "pillows":
      return "Подушки";
    case "blankets":
      return "Ковдри";
    case "covered":
      return "Покривала";
    case "linens":
      return "Постільна білизна";
    case "toppers":
      return "Наматрацники";
    case "sheets":
      return "Простирадла";
    case "sales":
      return "Акції";
    default:
      return "Новинки";
  }
}

export function transformImagesArr(
  images: (StaticImageData | string)[],
  count: number = 6,
) {
  const imgArr = [];
  let arr: (StaticImageData | string)[] = [];
  for (let i = 0; i < images.length; i++) {
    arr.push(images[i]);
    if (arr.length === count) {
      imgArr.push(arr);
      arr = [];
    }
  }
  return imgArr;
}

export async function fetchWithAuth(url: string, options : RequestInit = {}, authContext: AuthContextType) : Promise<Response> {
  const accessToken = localStorage.getItem('TEPAccessToken');
  if (accessToken) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${accessToken}`,
      },
    };
  }
  let response = await fetch(url, options);

  if (response.status === 401) {
    let isToken = await authContext.isTokensValid();
    if (!isToken) {
      const newAccessToken = localStorage.getItem('TEPAccessToken');
      if (newAccessToken) {
        // Update options with new access token
        options = {
          ...options,
          headers: {
            ...options.headers,
            'Authorization': `Bearer ${newAccessToken}`,
          },
        }
      }
      response = await fetch(url, options);
    }
  }

  return response;
}
