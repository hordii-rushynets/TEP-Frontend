import { productDescriptions } from "data";
import { GoodsUrl } from "route-urls";
import { isStr } from "utils/js-types";

import ToppersFilters from "components/Filters/ToppersFilters";
import { CompareBanner } from "components/Goods/CompareBanner";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import ToppersIMG from "components/Goods/static/topper.jpg";

const toppers = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "toppers",
  image: ToppersIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function ToppersPage({
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
        title={"Наматрацники"}
        description={
          "Привіт, Наматрацники! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <ToppersFilters count={toppers?.length} />
      <CompareBanner url={GoodsUrl.getToppers()} />
      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={8}
        products={toppers}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
