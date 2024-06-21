import { productDescriptions } from "data";
import { StaticImageData } from "next/image";
import { GoodsUrl } from "route-urls";
import { isStr } from "utils/js-types";

import PillowsFilters from "components/Filters/PillowsFilters";
import { CompareBanner } from "components/Goods/CompareBanner";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import PillowIMG from "components/Goods/static/pillow.jpg";

export type Product = {
  id: string;
  article?: string;
  color?: string;
  isInStock?: boolean;
  description?: string;
  size?: string[] | string;
  title: string;
  category: string;
  image: StaticImageData | string;
  price: number;
  isInCart?: boolean;
  isInCompare?: boolean;
  isFavourite?: boolean;
  count?: number;
  isSale?: boolean;
  salePrice?: number;
};

const pillows = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "pillows",
  image: PillowIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function PillowsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = searchParams;

  let activePageNum = 1;
  if (isStr(page) && !isNaN(parseInt(page))) activePageNum = parseInt(page);

  return (
    <>
      <ProductHeader
        title={"Подушки"}
        description={
          "Привіт, подушки! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <PillowsFilters count={25} />
      <CompareBanner url={GoodsUrl.getPillows()} />
      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={10}
        products={pillows}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
