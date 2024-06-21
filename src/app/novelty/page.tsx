import { isStr } from "utils/js-types";

import { PopularGoods } from "components/Goods/PopularGoods";
import ProductHeader from "components/Goods/ProductHeader";
import { Images } from "components/Novelty/Images";
import { NewGoods } from "components/Novelty/NewGoods";

import { Breadcrumbs } from "./Breadcrumbs";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function NoveltyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = searchParams;

  let activePageNum = 1;
  if (isStr(page) && !isNaN(parseInt(page))) activePageNum = parseInt(page);

  return (
    <>
      <Breadcrumbs />
      <ProductHeader
        title={"Новинки"}
        description={
          "Привіт, подушки! Привіт, комфорт! Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла. Покладіть їх на диван, крісло або ліжко — і кімната одразу набуде стильного вигляду. Ознайомтесь з нашим широким асортиментом подушок різних кольорів і з різними візерунками та деталями, такими як китиці і ґудзики."
        }
      />
      <Images />
      <NewGoods activePage={activePageNum} pages={12} />
      <PopularGoods />
    </>
  );
}
