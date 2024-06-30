import { productDescriptions } from "data";
import { GoodsUrl } from "route-urls";
import { isStr } from "utils/js-types";

import LinensFilters from "components/Filters/LinensFilters";
import { CompareBanner } from "components/Goods/CompareBanner";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import LinensIMG from "components/Goods/static/linens.jpg";

const linens = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "linens",
  image: LinensIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function LinensPage({
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
        title={"Постільна білизна"}
        description={
          "Привіт, Постільна білизна! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <LinensFilters count={linens?.length} />
      <CompareBanner url={GoodsUrl.getLinens()} />

      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={8}
        products={linens}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
