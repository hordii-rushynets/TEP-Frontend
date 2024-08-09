
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { useCategories, Category } from 'contexts/CategoriesContext';
import { useLocalization } from "contexts/LocalizationContext";

interface Props {
    setMenuIsOpen: any;
}

const LeftNavigation : React.FC<Props> = ({ setMenuIsOpen }) => {
    const pathname = usePathname();

    const { categories } = useCategories();
    const { staticData } = useLocalization();

    return (
        <nav className={"flex flex-col gap-y-[30px]"}>
          <ul className={"flex flex-col gap-y-[18px] text-2xl font-bold"}>
            {categories.map((category: Category) => (
              <li key={category.slug}>
                <Link
                  href={`${MainUrl.getGoods()}/${category.slug}`}
                  onClick={() => setMenuIsOpen(false)}
                  className={cn(
                    "transition-colors duration-200 hover:text-tep_blue-500",
                    {
                      "text-tep_blue-500":
                        pathname === `${MainUrl.getGoods()}/${category.slug}`,
                    },
                  )}
                >
                  {category.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={MainUrl.getSales()}
                onClick={() => setMenuIsOpen(false)}
                className={cn(
                  "transition-colors duration-200 hover:text-tep_blue-500",
                  {
                    "text-tep_blue-500":
                    pathname === `${MainUrl.getHome()}/sales`,
                  },
                )}
              >
                {staticData.header.salesTitle}
              </Link>
            </li>
          </ul>
          <ul
            className={
              "flex flex-col items-start gap-y-[18px] text-sm font-light"
            }
          >
            <li
              className={cn("transition-colors duration-200", {
                "font-semibold": pathname === MainUrl.getCompany(),
                "hover:text-tep_blue-500":
                  pathname !== MainUrl.getCompany(),
              })}
            >
              <Link
                onClick={() => setMenuIsOpen(false)}
                href={MainUrl.getCompany()}
              >
                {staticData.header.companyLabel}
              </Link>
            </li>
            <li
              className={cn("transition-colors duration-200", {
                "font-semibold": pathname === MainUrl.getInfoForBuyers(),
                "hover:text-tep_blue-500":
                  pathname !== MainUrl.getInfoForBuyers(),
              })}
            >
              <Link
                onClick={() => setMenuIsOpen(false)}
                href={MainUrl.getInfoForBuyers()}
              >
                {staticData.header.infoLabel}
              </Link>
            </li>
            <li
              className={cn("transition-colors duration-200", {
                "font-semibold": pathname === MainUrl.getServices(),
                "hover:text-tep_blue-500":
                  pathname !== MainUrl.getServices(),
              })}
            >
              <Link
                onClick={() => setMenuIsOpen(false)}
                href={MainUrl.getServices()}
              >
                {staticData.header.serviceLabel}
              </Link>
            </li>
          </ul>
        </nav>
    );
}

export default LeftNavigation