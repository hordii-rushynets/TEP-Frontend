import { Categories } from "components/Goods/Categories";
import Design from "components/Goods/Design";
import { LittleGrid } from "components/Goods/LittleGrid";
import { PopularGoods } from "components/Goods/PopularGoods";
import IMG1 from "components/Goods/static/littlegrid/img1.jpg";
import IMG2 from "components/Goods/static/littlegrid/img2.jpg";
import IMG3 from "components/Goods/static/littlegrid/img3.jpg";
import IMG4 from "components/Goods/static/littlegrid/img4.jpg";
import IMG5 from "components/Goods/static/littlegrid/img5.jpg";
import IMG6 from "components/Goods/static/littlegrid/img6.jpg";
import IMG7 from "components/Goods/static/littlegrid/img7.jpg";
import IMG8 from "components/Goods/static/littlegrid/img8.jpg";
import IMG9 from "components/Goods/static/littlegrid/img9.jpg";
import IMG10 from "components/Goods/static/littlegrid/img10.jpg";

export default function GoodsPage() {
  return (
    <>
      <Categories />
      <LittleGrid
        images={[IMG1, IMG2, IMG3, IMG4, IMG5]}
        title={"Зручна постільна білизна для кращого сну"}
        description={
          "Отримайте необхідний комфорт разом з м’якими простирадлами, ковдрами, які підходять саме вам, та подушками з правильною підтримкою. Усі вони зроблені з екологічних і якісних матеріалів, таких як органічно чиста бавовна, тому ви можете повністю їм довіритись."
        }
      />
      <Design />
      <LittleGrid
        title={"Оновлення постільної білизни без шкоди гаманцю"}
        description={
          "Затишні пледи, постільна білизна у свіжих нових дизайнах, ергономічні подушки та багато іншого, що допоможе вам добре висипатись та прокидатися сповненими енергії. А їх ціни не змусять вас не спати ночами."
        }
        images={[IMG6, IMG7, IMG8, IMG9, IMG10]}
        reversed
      />
      <PopularGoods className={"mb-40 lg:mb-[260px]"} />
    </>
  );
}
