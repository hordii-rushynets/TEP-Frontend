import { StaticImageData } from "next/image";

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
