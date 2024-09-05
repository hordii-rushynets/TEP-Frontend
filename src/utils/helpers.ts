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
  imgArr.push(arr);
  return imgArr;
}

export async function fetchWithAuth(url: string, options : RequestInit = {}, authContext: AuthContextType) : Promise<Response> {
  const accessToken = localStorage.getItem('TEPAccessToken');
  const ip = await getUserIP();
  if (accessToken) {
    options = {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `JWT ${accessToken}`,
        'Real-Ip': ip
      },
    };
  }
  let response = await fetch(url, options);

  if (response.status === 401) {
    await authContext.refreshToken();
    const newAccessToken = localStorage.getItem('TEPAccessToken');
    if (newAccessToken) {
      // Update options with new access token
      options = {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': `JWT ${newAccessToken}`,
          'Real-Ip': ip
        },
      }
    }
    response = await fetch(url, options);
  }

  return response;
}

export const getTimeToShow = (time: string) : string => {
  const date = new Date(time);
  return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear().toString()}`
}

export function generateDictionary(keys: string[]): { [key: string]: boolean } {
  const dictionary: { [key: string]: boolean } = {};
  keys.forEach(key => {
    dictionary[key] = false;
  });
  return dictionary;
}

export function getTrueKeys(obj: { [key: string]: boolean }): string { 
  const trueKeys = Object.keys(obj).filter(key => obj[key]);
  return trueKeys.join(',');
}

export function isValidDate(date: any) {
  return date instanceof Date && !isNaN(date.getTime());
}


export const getUserIP = async () => {
  const response = await fetch('https://api.ipify.org?format=json');
  const data = await response.json();
  return data.ip;
};