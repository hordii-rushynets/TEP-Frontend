import { StaticImageData } from "next/image";

export interface Tag {
  title_uk: string;
  title_en: string;
}

export type Article = {
  id: string;
  slug: string;
  title_uk: string;
  title_en: string;
  tags: Tag[];
  image: StaticImageData | string;
  created_at: string;
  complexity?: {
    title_uk: string;
    title_en: string;
    description_uk: string;
    description_en: string;
    photo: StaticImageData | string;
  };
  requirements?: {
    title_uk: string;
    title_en: string;
    description_uk: string[];
    description_en: string[];
  };
  what_materials?: {
    title_uk: string;
    title_en: string;
    description_uk:  string[];
    description_en:  string[];
    photo: StaticImageData | string;
  };
  for_children?: {
    additional_description_uk: string;
    additional_description_en: string;
    description_uk: string;
    description_en: string;
    photo: StaticImageData | string;
  };

  author: {
    name: string;
    social_networks?: {
      instagram?: string;
      facebook?: string;
      youtube?: string;
      pinterest?: string;
      linkedin?: string;
    };
  };
};

export const ArticleDefault : Article = {
  id: "",
  slug: "",
  title_uk: "",
  title_en: "",
  tags: [],
  image: "",
  created_at: "",

  author: {
    name: "",
  }
}
