import { Category, useCategories } from 'contexts/CategoriesContext';
import { SimpleCard } from "common/Cards/SimpleCard";
import { MainUrl } from "route-urls";

import IMG7 from "./static/categories/cat7.jpg";

const CategoriesGrid:React.FC = () => {
    const { categories } = useCategories();

    return (
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
          }
        >
          {categories.map((category: Category) => (
            <SimpleCard
              url={`${MainUrl.getGoods()}/${category.slug}`}
              title={category.title_uk}
              source={category.image}
              isIcon={false}
              key={category.slug}
            />
          ))}
          <SimpleCard
            url={MainUrl.getSales()}
            title={"Акції"}
            source={IMG7}
            isIcon={false}
          />
        </div>
    );
}

export default CategoriesGrid