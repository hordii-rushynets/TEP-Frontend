import { productDescriptions } from "data";
import { isStr } from "utils/js-types";

import CoveredFilters from "components/Filters/CoveredFilters";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import CoveredIMG from "components/Goods/static/covered.jpg";
import { CompareBanner } from "components/Goods/CompareBanner";
import { GoodsUrl } from "route-urls";

const covered = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "covered",
  image: CoveredIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function CoveredPage({
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
        title={"Покривала"}
        description={
          "Привіт, Покривала! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <CoveredFilters count={covered?.length} />
      <CompareBanner url={GoodsUrl.getCovered()} />
      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={8}
        products={covered}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
