"use client"

import { Disclosure as BaseDisclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMapPin, FiPhone } from "react-icons/fi";
import { InfoUrl, MainUrl, SocialMediaUrl } from "route-urls";
import { cn } from "utils/cn";

import { Disclosure } from "common/Disclosure";
import { Container, Title } from "common/ui";
import { ChangeLanguage } from "components/ChangeLanguage";
import { companyLinks } from "components/Header/CompanyMenu";
import { useCategories, Category } from 'contexts/CategoriesContext';
import { servicesLinks } from "components/Header/ServicesMenu";
import { Socials } from "components/Socials";

import MaestroIMG from "./static/maestro.svg";
import MastercardIMG from "./static/mastercard.svg";
import VisaIMG from "./static/visa.svg";
import { useLocalization } from "contexts/LocalizationContext";

const companyFooterLinks = [
  {
    name: "about"
  },
  {
    name: "cooperation-and-partnership"
  },
  {
    name: "vacancies"
  },
  {
    name: "stores"
  },
  {
    name: "technologies"
  },
  {
    name: "blog"
  }
]

// companyFooterLinks.splice(3, 0, {
//   name: "stores",
//   title: "Магазини ТЕП",
// });

const servicesFooterLinks = [
  {
    name: "tracking"
  },
  {
    name: "delivery"
  },
  {
    name: "gifts"
  }
]

const infoFooterLinks = [
  { url: InfoUrl.getQuestionsAndAnswers() },
  { url: InfoUrl.getFAQ() },
  { url: InfoUrl.getProductReturn() },
  { url: InfoUrl.getContactUs() },
  { url: InfoUrl.getFeedbacks() },
  { url: InfoUrl.getCare() },
];

export function Footer() {
  const { staticData } = useLocalization();

  return (
    <footer className={"bg-tep_gray-200 text-sm md:font-extralight"}>
      <Container>
        <div>
          <div className={"hidden pb-5 pt-28 md:block"}>
            <nav className={"flex items-start gap-x-4 whitespace-nowrap"}>
              <div className={"basis-1/4"}>
                <Title className={"mb-7"} component={"h4"} size={"xl"}>
                  {staticData.header.goodsLabel}
                </Title>
                <GoodsLinksList />
              </div>
              <div className={"basis-1/4"}>
                <Title className={"mb-7"} component={"h4"} size={"xl"}>
                  {staticData.header.companyLabel}
                </Title>
                <CompanyLinksList />
              </div>
              <div className={"basis-1/4 md:hidden lg:block"}>
                <Title className={"mb-7"} component={"h4"} size={"xl"}>
                {staticData.header.serviceLabel}
                </Title>
                <ServicesLinksList />
              </div>
              <div className={"flex-1 md:basis-1/2 lg:basis-auto"}>
                <Title className={"mb-7"} component={"h4"} size={"xl"}>
                {staticData.header.infoLabel}
                </Title>
                <InfoLinksList />
              </div>
            </nav>
          </div>
          <FooterDiclosureNavigation />

          {/* Additional block for tablets */}
          <div className={"hidden gap-x-4 pb-5 pt-7 md:flex lg:hidden"}>
            <div className={"basis-1/2"}>
              <Title className={"mb-7"} component={"h4"} size={"xl"}>
              {staticData.header.serviceLabel}
              </Title>
              <ServicesLinksList />
            </div>
            <div className={"flex flex-1 flex-col gap-y-[22px]"}>
              <div className={"flex items-center gap-x-2"}>
                <FiMapPin className={"size-4"} />
                <span>{staticData.footer.address}</span>
              </div>
              <div className={"flex items-center gap-x-2"}>
                <FiPhone className={"size-4"} />
                <Link
                  className={"transition-colors hover:text-tep_blue-500"}
                  href={"tel:+380503892003"}
                >
                  +38 (050) 389 20 03
                </Link>
              </div>
              <Socials
                links={{
                  facebook: "#",
                  instagram: "#",
                  linkedin: "#",
                  pinterest: "#",
                  tiktok: "#",
                  youtube: "#",
                }}
              />
            </div>
          </div>

          <div
            className={
              "flex flex-col-reverse items-start gap-x-4 gap-y-8 py-8  md:flex-row md:items-center lg:justify-between"
            }
          >
            <div
              className={
                "flex shrink-0 basis-1/4 gap-x-2 md:basis-1/2 lg:basis-auto xl:basis-1/4"
              }
            >
              <Image src={VisaIMG} alt={"Payment image"} sizes="100vw, 50vw, 33vw"/>
              <Image src={MastercardIMG} alt={"Payment image"} sizes="100vw, 50vw, 33vw"/>
              <Image src={MaestroIMG} alt={"Payment image"} sizes="100vw, 50vw, 33vw"/>
            </div>
            <div
              className={
                "flex flex-1 flex-col gap-x-4 gap-y-[22px] whitespace-nowrap md:hidden lg:flex lg:flex-row lg:justify-end xl:justify-between"
              }
            >
              <div className={"flex items-center gap-x-2"}>
                <FiMapPin className={"size-4"} />
                <span>{staticData.footer.address}</span>
              </div>
              <div className={"flex items-center gap-x-2"}>
                <FiPhone className={"size-4"} />
                <Link
                  className={"transition-colors hover:text-tep_blue-500"}
                  href={"tel:+380503892003"}
                >
                  +38 (050) 389 20 03
                </Link>
              </div>
              <Socials
                links={{
                  facebook: SocialMediaUrl.getFacebook(),
                  instagram: SocialMediaUrl.getInstagram(),
                  linkedin: "#",
                  pinterest: SocialMediaUrl.getPinterest(),
                  tiktok: SocialMediaUrl.getTikTok(),
                  youtube: SocialMediaUrl.getYouTube(),
                }}
              />
            </div>
            <ChangeLanguage />
          </div>

          <div
            className={
              "flex flex-wrap items-center justify-between gap-x-7 gap-y-4 whitespace-nowrap border-t border-tep_gray-700/20 pb-6 pt-5 text-[10px]"
            }
          >
            <span>{staticData.footer.credentials}</span>
            <div className={"flex items-center gap-x-7"}>
              <Link
                href={MainUrl.getTermsOfUse()}
                className={
                  "underline-offset-2 transition-colors hover:text-tep_blue-500 hover:underline"
                }
              >
                {staticData.footer.termsOfUse}
              </Link>
              <Link
                href={MainUrl.getPrivacyPolicy()}
                className={
                  "underline-offset-2 transition-colors hover:text-tep_blue-500 hover:underline"
                }
              >
                {staticData.footer.policyPrivacy}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export const FooterLiLink = ({
  children,
  url = "#",
}: {
  children: React.ReactNode;
  url: string;
}) => (
  <li>
    <Link
      href={url}
      className={
        "underline-offset-[3px] transition-colors hover:text-tep_blue-500 hover:underline"
      }
    >
      {children}
    </Link>
  </li>
);

export const GoodsLinksList : React.FC = () => {
  const { categories } = useCategories();
  const { staticData } = useLocalization();
  return (
  <ul className={"flex flex-col gap-y-[18px]"}>
    {categories.map((category: Category) => (
      <FooterLiLink
        key={category.slug}
        url={`${MainUrl.getGoods()}/${category.slug}`}
      >
        {category.title}
      </FooterLiLink>
    ))}
    <FooterLiLink url={MainUrl.getSales()}>{staticData.header.salesTitle}</FooterLiLink>
  </ul>
  );
};
export const CompanyLinksList : React.FC = () => {
  const { staticData } = useLocalization();
  return (
    <ul className={"flex flex-col gap-y-[18px]"}>
      {companyFooterLinks.map((link, indx) => (
        <FooterLiLink
          key={link.name}
          url={`${MainUrl.getCompany()}/${link.name}`}
        >
          {staticData.footer.companyLinks[indx]}
        </FooterLiLink>
      ))}
    </ul>
  );
};
export const ServicesLinksList : React.FC = () => {
  const { staticData } = useLocalization();

  return (
    <ul className={"flex flex-col gap-y-[18px]"}>
      {servicesFooterLinks.map((link, indx) => (
        <FooterLiLink
          key={link.name}
          url={`${MainUrl.getServices()}/${link.name}`}
        >
          {staticData.footer.servicesLinks[indx]}
        </FooterLiLink>
      ))}
    </ul>
  );
};
export const InfoLinksList : React.FC = () => {
  const { staticData } = useLocalization();

  return (
    <ul className={"flex flex-col gap-y-[18px]"}>
      {infoFooterLinks.map((link, indx) => (
        <FooterLiLink key={indx} url={link.url}>
          {staticData.footer.infoLinks[indx]}
        </FooterLiLink>
      ))}
    </ul>
  );
};

export const FooterDiclosureNavigation: React.FC = () => {
  const { staticData } = useLocalization();
  const links = [
    { triger: staticData.header.goodsLabel, list: <GoodsLinksList/> },
    { triger: staticData.header.companyLabel, list: <CompanyLinksList /> },
    { triger: staticData.header.serviceLabel, list: <ServicesLinksList /> },
    { triger: staticData.header.infoLabel, list: <InfoLinksList /> },
  ];

  return (
    <div className={"pb-14 pt-24 md:hidden"}>
      <Disclosure>
        {links.map((block) => (
          <BaseDisclosure key={block.triger}>
            {({ open }) => (
              <>
                <BaseDisclosure.Button
                  className={
                    "flex w-full items-center justify-between py-6 transition-colors hover:text-tep_blue-500"
                  }
                >
                  <Title component={"h4"} size={"xl"}>
                    {block.triger}
                  </Title>
                  <FiChevronDown
                    className={cn(
                      {
                        "rotate-180 transform": open,
                      },
                      "size-6 transition-all hover:text-tep_blue-500",
                    )}
                  />
                </BaseDisclosure.Button>
                <Transition
                  enter={"transition duration-100 ease-out"}
                  enterFrom={"transform scale-95 opacity-0"}
                  enterTo={"transform scale-100 opacity-100"}
                  leave={"transition duration-75 ease-out"}
                  leaveFrom={"transform scale-100 opacity-100"}
                  leaveTo={"transform scale-95 opacity-0"}
                >
                  <BaseDisclosure.Panel className={"py-4"}>
                    {block.list}
                  </BaseDisclosure.Panel>
                </Transition>
              </>
            )}
          </BaseDisclosure>
        ))}
      </Disclosure>
    </div>
  );
};
