import { ProductToShow, VariantInfo } from "./page";

const randomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const VariantInfoDefault : VariantInfo = {
  id: 0,
  material_and_care: "",
  material_and_care_uk: "",
  material_and_care_en: "", 
  ecology_and_environment: "",
  ecology_and_environment_uk: "",
  ecology_and_environment_en: "",
  packaging: "",
  packaging_uk: "",
  packaging_en: "",
  last_modified: "",
  product_variant: 0,
}
  
export const sortings : { [key: string]: (a: ProductToShow, b: ProductToShow) => number }  = {
  "suitable": (a: ProductToShow, b: ProductToShow) => {
    return randomInt(-1, 1);
    //TO DO: Needs logic for sorting products from most suitable for user to less suitable
  },
  "asc": (a: ProductToShow, b: ProductToShow) => {
    return a.price - b.price;
  },
  "desc": (a: ProductToShow, b: ProductToShow) => {
    return b.price - a.price;
  },
  "new": (a: ProductToShow, b: ProductToShow) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  },
  "title": (a: ProductToShow, b: ProductToShow) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  },
  "popular": (a: ProductToShow, b: ProductToShow) => {
    return b.number_of_views - a.number_of_views;
  },
}