import { productDescriptions } from "data";
import { GoodsUrl } from "route-urls";
import { isStr } from "utils/js-types";

import BlanketsFilters from "components/Filters/BlanketsFilters";
import { CompareBanner } from "components/Goods/CompareBanner";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import BlanketIMG from "components/Goods/static/blanket.jpg";

const blankets = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "blankets",
  image: BlanketIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function BlanketsPage({
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
        title={"Ковдри"}
        description={
          "Привіт, подушки! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <BlanketsFilters count={24} />
      <CompareBanner url={GoodsUrl.getBlankets()} />
      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={8}
        products={blankets}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
