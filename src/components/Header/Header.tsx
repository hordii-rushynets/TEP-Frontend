import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FiHeart,
  FiMenu,
  FiShoppingCart,
  FiTruck,
  FiUser,
  FiX,
} from "react-icons/fi";
import { MainUrl, ServicesUrl, UserUrl } from "route-urls";
import { cn } from "utils/cn";

import { ButtonBase, Container } from "common/ui";
import { AutocompleteInput } from "common/ui/Inputs/AutocompleteInput";
import { ChangeLanguage } from "components/ChangeLanguage";

import { CompanyMenu } from "./CompanyMenu";
import { GoodsMenu, categories } from "./GoodsMenu";
import { InfoMenu } from "./InfoMenu";

// import { ServicesMenu } from "./ServicesMenu";
import Logo from "./static/Logo.svg";

export function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");
    if (!body) return;
    body.style.overflow = menuIsOpen ? "hidden" : "";
  }, [menuIsOpen]);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 w-full border-b border-tep_gray-200 bg-white py-[22px] shadow-[0_4px_20px_rgba(187,187,187,0.2)]"
      }
    >
      <Container className={"2xl:max-w-[1680px]"}>
        <div
          className={
            "flex flex-wrap items-center justify-between gap-x-4 gap-y-4 md:flex-nowrap md:gap-x-8"
          }
        >
          <Link href={MainUrl.getHome()} className={"order-2 shrink-0"}>
            <Image src={Logo} alt={"Logo"} />
          </Link>
          <div
            className={
              "order-3 hidden basis-[350px] items-center justify-between gap-x-2 text-center text-sm font-bold lg:flex"
            }
          >
            <GoodsMenu />
            <CompanyMenu />
            {/* <ServicesMenu /> */}
            <InfoMenu />
          </div>
          <div
            className={
              "order-5 flex flex-1 items-center justify-end gap-4 justify-self-end md:flex-initial md:gap-8"
            }
          >
            <Link href={ServicesUrl.getTracking()}>
              <ButtonBase>
                <FiTruck
                  className={"size-6 transition-colors hover:text-tep_blue-500"}
                />
              </ButtonBase>
            </Link>
            <Link href={UserUrl._getRoot()}>
              <ButtonBase>
                <FiUser
                  className={"size-6 transition-colors hover:text-tep_blue-500"}
                />
              </ButtonBase>
            </Link>
            <Link href={UserUrl.getFavourite()}>
              <ButtonBase>
                <FiHeart
                  className={"size-6 transition-colors hover:text-tep_blue-500"}
                />
              </ButtonBase>
            </Link>
            <Link href={UserUrl.getCart()}>
              <ButtonBase>
                <FiShoppingCart
                  className={"size-6 transition-colors hover:text-tep_blue-500"}
                />
              </ButtonBase>
            </Link>
          </div>
          <ButtonBase
            className={{ button: "order-6 lg:order-1" }}
            onClick={() => setMenuIsOpen(true)}
            title={"Відкрити меню"}
          >
            <FiMenu
              className={"size-6 transition-colors hover:text-tep_blue-500"}
            />
          </ButtonBase>
          <AutocompleteInput
            className={"order-last flex-1 basis-full md:order-4 md:basis-auto"}
          />

          <div
            className={cn(
              "fixed inset-0 z-[100] flex min-w-[320px] flex-col items-start gap-y-[50px] overflow-scroll border-tep_gray-200 bg-white px-6 py-8 transition-transform sm:right-auto sm:border-r md:min-w-[372px] md:px-8 md:py-7 lg:min-w-[396px] lg:pl-[108px]",
              {
                "-translate-x-full": !menuIsOpen,
              },
            )}
          >
            <div
              className={
                "flex items-center justify-between gap-8 md:flex-row-reverse md:justify-end"
              }
            >
              <Link href={MainUrl.getHome()}>
                <Image src={Logo} alt={"Logo"} />
              </Link>
              <ButtonBase onClick={() => setMenuIsOpen(false)}>
                <FiX
                  className={"size-6 transition-colors hover:text-tep_blue-500"}
                />
              </ButtonBase>
            </div>
            <nav className={"flex flex-col gap-y-[30px]"}>
              <ul className={"flex flex-col gap-y-[18px] text-2xl font-bold"}>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`${MainUrl.getGoods()}/${category.name}`}
                      onClick={() => setMenuIsOpen(false)}
                      className={cn(
                        "transition-colors duration-200 hover:text-tep_blue-500",
                        {
                          "text-tep_blue-500":
                            pathname ===
                            `${MainUrl.getGoods()}/${category.name}`,
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
                    Акції
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
                    Компанія
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
                    Інформація для покупців
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
                    Послуги
                  </Link>
                </li>
              </ul>
            </nav>
            <ChangeLanguage />
          </div>
          {menuIsOpen && (
            <div className={"fixed inset-0 z-[95] bg-black/25"}></div>
          )}
        </div>
      </Container>
    </header>
  );
}
