import { productDescriptions } from "data";
import { GoodsUrl } from "route-urls";
import { isStr } from "utils/js-types";

import SheetsFilters from "components/Filters/SheetsFilters";
import { CompareBanner } from "components/Goods/CompareBanner";
import { PopularGoods } from "components/Goods/PopularGoods";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import ProductHeader from "components/Goods/ProductHeader";
import ProductsList from "components/Goods/ProductsList";
import SheetIMG from "components/Goods/static/sheet.jpg";

const sheets = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "sheets",
  image: SheetIMG,
  price: 1199,
}));

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function SheetsPage({
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
        title={"Простирадла"}
        description={
          "Привіт, Простирадла! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <SheetsFilters count={sheets?.length} />
      <CompareBanner url={GoodsUrl.getSheets()} />
      <ProductsList
        className={"mt-12"}
        activePage={activePageNum}
        pages={8}
        products={sheets}
      />
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
