"use client"

import Link from "next/link";
import { CompanyUrl } from "route-urls";
import {useState, useEffect} from "react";
import { Article, ArticleDefault } from "../../interfaces";
import {ArticleService} from "../../services"

import { Container, Section, Title } from "common/ui";
import { AuthorDetails } from "components/Company/Blog/AuthorDetails";
import { BlogPlan } from "components/Company/Blog/BlogPlan";
import { MoreArticles } from "components/Company/Blog/MoreArticles";
import { TextSection } from "components/Company/Blog/TextSection";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { GetInstructionsForm } from "components/Forms/GetInstructionsForm";
import { Socials } from "components/Socials";
import { useLocalization } from "contexts/LocalizationContext";
import { useArticles } from "contexts/ArticlesContext";

export default function PillarPage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article>(ArticleDefault);
  const articleService = new ArticleService();

  useEffect(() => {
    articleService.getArticle(params.slug).then(article => setArticle(article));
  } , []);

  const { localization } = useLocalization();

  return (
    <>
      <MainImageBlock
        image={article.image}
        className={{ image: "object-top" }}
      />
      <Section className={"pb-10 pt-24 md:pb-20 lg:pb-40 lg:pt-40"}>
        <Container className={"relative"}>
          <Socials
            links={article.author.social_networks}
            className={"absolute right-4 top-0 hidden lg:flex"}
          />
          <div className={"mx-auto max-w-[808px]"}>
            <Title size={"5xl"} className={"mb-7 md:mb-[52px]"}>
              {article[`title_${localization}` as keyof Article]?.toString()}
            </Title>
            <AuthorDetails
              author={article.author.name}
              date={article.created_at}
              socialLinks={article.author.social_networks}
            />
            <BlogPlan />
            <div className={"mb-10 flex flex-col gap-y-6 md:mb-14 lg:mb-40"}>
              <p
                className={
                  "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                }
              >
                Комфортне і &apos;правильне&apos; дитяче ковдру забезпечить
                міцний сон не тільки дитині, а й батькам. Як правильно вибрати
                ковдру, і на що звертати увагу розглянемо нижче. Комфортне і
                &apos;правильне&apos; дитяче ковдру забезпечить міцний сон не
                тільки дитині, а й батькам. Як правильно вибрати ковдру, і на що
                звертати увагу розглянемо нижче. Комфортне і
                &apos;правильне&apos; дитяче ковдру забезпечить міцний сон не
                тільки дитині, а й батькам.{" "}
                <Link
                  className={"underline"}
                  href={CompanyUrl.getArticle(params.slug)}
                >
                  Як правильно вибрати ковдру
                </Link>
                , і на що звертати увагу розглянемо нижче.
              </p>
              <p
                className={
                  "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                }
              >
                Комфортне і &apos;правильне&apos; дитяче ковдру забезпечить
                міцний сон не тільки дитині, а й батькам. Як правильно вибрати
                ковдру, і на що звертати увагу розглянемо нижче. Комфортне і
                &apos;правильне&apos; дитяче ковдру забезпечить міцний сон не
                тільки дитині, а й батькам. Як правильно вибрати ковдру, і на що
                звертати увагу розглянемо нижче. Комфортне і
                &apos;правильне&apos; дитяче ковдру забезпечить міцний сон не
                тільки дитині, а й батькам.{" "}
                <Link
                  className={"underline"}
                  href={CompanyUrl.getArticle(params.slug)}
                >
                  Як правильно вибрати ковдру
                </Link>
                , і на що звертати увагу розглянемо нижче.
              </p>
            </div>
            <GetInstructionsForm />
            <div className={"flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-24"}>
              <TextSection
                isMain
                title={"What is customer acquisition?"}
                text={[
                  "Customer acquisition refers to the activities and actions a company takes to gain new customers. A successful customer acquisition strategy helps you win new business, retain loyal customers, and improve profits.",
                  "It’s important to remember that acquisition starts at first contact with a new customer and rolls into your strategy for retention — the two work together to keep a marketing program profitable.",
                  "Customer acquisition covers each aspect of the customer journey, from lead generation to activation, customer loyalty, and conversion rate optimization.",
                  "Customers won’t always stick around — no matter how good your retention strategy is — so you need a way to fill the gaps and keep your business moving forward.",
                ]}
              />
              <TextSection
                title={"1. Identify your ideal customers"}
                text={[
                  "The first step toward customer acquisition is to gain an understanding of your customer base — both your current and target audiences. This includes studying competitors and analyzing market research done by Pew Research Center or the U.S. Census Bureau.",
                  "Learning your product-market fit will help you identify ideal customers and set marketing goals.",
                  "If you don’t have a good idea who your audience is yet, ask yourself the following questions:",
                ]}
                react_node={
                  <ul
                    className={
                      "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                    }
                  >
                    <li>
                      What do customers accomplish with your product or service?
                    </li>
                    <li>What are your customers’ struggles?</li>
                    <li>What are your customers’ demographics?</li>
                    <li>
                      What benefits do customers look for in buying your
                      product(s)?
                    </li>
                    <li>Where do your ideal customers find information?</li>
                    <li>Why wouldn’t they buy your product(s)?</li>
                    <li>
                      When does your ideal customer buy your product or service?
                    </li>
                    <li>
                      As you grow, keeping track of these customer profiles can
                      help you analyze, understand, and expand your customer
                      base. You can identify your highest-value customers’
                      different traits and behaviors, which you can use to
                      invest more or less in the best customer acquisition
                      channels.
                    </li>
                  </ul>
                }
              />
              <TextSection
                title={"2. Define your goals"}
                text={[
                  "With your ideal customers in mind, you can define your goals and objectives. Setting an end result will help you think through a customer acquisition plan and guide your efforts.",
                  "To meet revenue expectations, set goals for your customer acquisition strategy that account for customer churn and current customer growth. You could earn $20 million in new business over the next year, but you may not reach total revenue goals for the year if your industry has high turnover.",
                  "It’s not hard to prove your marketing efforts are working. By measuring customer acquisition metrics such as customer lifetime value (CLV), monthly recurring revenue (MRR), customer acquisition costs (CAC), and churn rate, you can create a strategy that aligns with overall business goals.",
                ]}
              />
              <TextSection
                title={"3. Choose your customer acquisition channels"}
                text={[
                  "Identifying your ideal customers and customer acquisition goals is a great start to creating an effective strategy, but that’s only the beginning. You’ll want to think about which channels to use based on your research and what types of content do best there.",
                  "A customer acquisition channel is any place your customers meet your brand for the first time — whether through social media, organic search, or a paid ad. Customer acquisition channels are how you bring in new customers.",
                  "Some popular customer acquisition channels include:",
                ]}
                react_node={
                  <ul
                    className={
                      "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                    }
                  >
                    <li>
                      Instagram: Visually attractive posts and short videos.
                    </li>
                    <li>
                      Facebook: Live video streaming, one-to-one messaging,
                      advertising.
                    </li>
                    <li>
                      YouTube: Longer, more informative, and entertaining video
                      content.
                    </li>
                    <li>
                      SEO: Written, long-form content that’s optimized for
                      search engines.
                    </li>
                    <li>
                      Paid social: Short, snappy ads with compelling visuals.
                    </li>
                    <li>Referrals: Discounts and loyalty rewards.</li>
                    <li>
                      We’ll discuss customer acquisition channels in more detail
                      a little later in this post.
                    </li>
                  </ul>
                }
              />
            </div>
          </div>
        </Container>
      </Section>
      <ImageBlock
        size={"large"}
        image={article.for_children?.photo || ""}
        description={article.for_children?.[`additional_description_${localization}` as keyof {}]}
      />
      <Section className={"pb-10 pt-24 md:pb-14 md:pt-24 lg:pb-40"}>
        <Container>
          <div className={"mx-auto max-w-[808px]"}>
            <div className={"flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-24"}>
              <TextSection
                isMain
                title={"What is customer acquisition?"}
                text={[
                  "Customer acquisition refers to the activities and actions a company takes to gain new customers. A successful customer acquisition strategy helps you win new business, retain loyal customers, and improve profits.",
                  "It’s important to remember that acquisition starts at first contact with a new customer and rolls into your strategy for retention — the two work together to keep a marketing program profitable.",
                  "Customer acquisition covers each aspect of the customer journey, from lead generation to activation, customer loyalty, and conversion rate optimization.",
                  "Customers won’t always stick around — no matter how good your retention strategy is — so you need a way to fill the gaps and keep your business moving forward.",
                  "Identifying your ideal customers and customer acquisition goals is a great start to creating an effective strategy, but that’s only the beginning. You’ll want to think about which channels to use based on your research and what types of content do best there.",
                  "A customer acquisition channel is any place your customers meet your brand for the first time — whether through social media, organic search, or a paid ad. Customer acquisition channels are how you bring in new customers.",
                  "Some popular customer acquisition channels include:",
                ]}
                react_node={
                  <ul
                    className={
                      "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                    }
                  >
                    <li>
                      Instagram: Visually attractive posts and short videos.
                    </li>
                    <li>
                      Facebook: Live video streaming, one-to-one messaging,
                      advertising.
                    </li>
                    <li>
                      YouTube: Longer, more informative, and entertaining video
                      content.
                    </li>
                    <li>
                      SEO: Written, long-form content that’s optimized for
                      search engines.
                    </li>
                    <li>
                      Paid social: Short, snappy ads with compelling visuals.
                    </li>
                    <li>Referrals: Discounts and loyalty rewards.</li>
                    <li>
                      We’ll discuss customer acquisition channels in more detail
                      a little later in this post.
                    </li>
                  </ul>
                }
              />
            </div>
          </div>
        </Container>
      </Section>
      <ImageBlock size={"large"} image={article.what_materials?.photo || ""} />
      <Section className={"pb-10 pt-24 md:pb-14 md:pt-24 lg:pb-40"}>
        <Container>
          <div className={"mx-auto max-w-[808px]"}>
            <div className={"flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-24"}>
              <TextSection
                isMain
                title={"What is customer acquisition?"}
                text={[
                  "Customer acquisition refers to the activities and actions a company takes to gain new customers. A successful customer acquisition strategy helps you win new business, retain loyal customers, and improve profits.",
                  "It’s important to remember that acquisition starts at first contact with a new customer and rolls into your strategy for retention — the two work together to keep a marketing program profitable.",
                  "Customer acquisition covers each aspect of the customer journey, from lead generation to activation, customer loyalty, and conversion rate optimization.",
                  "Customers won’t always stick around — no matter how good your retention strategy is — so you need a way to fill the gaps and keep your business moving forward.",
                ]}
              />
              <TextSection
                title={"1. Identify your ideal customers"}
                text={[
                  "The first step toward customer acquisition is to gain an understanding of your customer base — both your current and target audiences. This includes studying competitors and analyzing market research done by Pew Research Center or the U.S. Census Bureau.",
                  "Learning your product-market fit will help you identify ideal customers and set marketing goals.",
                  "If you don’t have a good idea who your audience is yet, ask yourself the following questions:",
                ]}
                react_node={
                  <ul
                    className={
                      "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                    }
                  >
                    <li>
                      What do customers accomplish with your product or service?
                    </li>
                    <li>What are your customers’ struggles?</li>
                    <li>What are your customers’ demographics?</li>
                    <li>
                      What benefits do customers look for in buying your
                      product(s)?
                    </li>
                    <li>Where do your ideal customers find information?</li>
                    <li>Why wouldn’t they buy your product(s)?</li>
                    <li>
                      When does your ideal customer buy your product or service?
                    </li>
                    <li>
                      As you grow, keeping track of these customer profiles can
                      help you analyze, understand, and expand your customer
                      base. You can identify your highest-value customers’
                      different traits and behaviors, which you can use to
                      invest more or less in the best customer acquisition
                      channels.
                    </li>
                  </ul>
                }
              />
              <TextSection
                title={"2. Define your goals"}
                text={[
                  "With your ideal customers in mind, you can define your goals and objectives. Setting an end result will help you think through a customer acquisition plan and guide your efforts.",
                  "To meet revenue expectations, set goals for your customer acquisition strategy that account for customer churn and current customer growth. You could earn $20 million in new business over the next year, but you may not reach total revenue goals for the year if your industry has high turnover.",
                  "It’s not hard to prove your marketing efforts are working. By measuring customer acquisition metrics such as customer lifetime value (CLV), monthly recurring revenue (MRR), customer acquisition costs (CAC), and churn rate, you can create a strategy that aligns with overall business goals.",
                ]}
              />
              <TextSection
                title={"3. Choose your customer acquisition channels"}
                text={[
                  "Identifying your ideal customers and customer acquisition goals is a great start to creating an effective strategy, but that’s only the beginning. You’ll want to think about which channels to use based on your research and what types of content do best there.",
                  "A customer acquisition channel is any place your customers meet your brand for the first time — whether through social media, organic search, or a paid ad. Customer acquisition channels are how you bring in new customers.",
                  "Some popular customer acquisition channels include:",
                ]}
                react_node={
                  <ul
                    className={
                      "text-lg !leading-relaxed md:text-sm lg:font-extralight"
                    }
                  >
                    <li>
                      Instagram: Visually attractive posts and short videos.
                    </li>
                    <li>
                      Facebook: Live video streaming, one-to-one messaging,
                      advertising.
                    </li>
                    <li>
                      YouTube: Longer, more informative, and entertaining video
                      content.
                    </li>
                    <li>
                      SEO: Written, long-form content that’s optimized for
                      search engines.
                    </li>
                    <li>
                      Paid social: Short, snappy ads with compelling visuals.
                    </li>
                    <li>Referrals: Discounts and loyalty rewards.</li>
                    <li>
                      We’ll discuss customer acquisition channels in more detail
                      a little later in this post.
                    </li>
                  </ul>
                }
              />
            </div>
          </div>
        </Container>
      </Section>
      <ImageBlock size={"large"} image={article.complexity?.photo || ""} />
      <Section className={"pb-[68px] pt-24 md:pb-14 md:pt-24 lg:pb-40"}>
        <Container>
          <div className={"mx-auto max-w-[808px]"}>
            <div className={"flex flex-col gap-y-10 md:gap-y-20 lg:gap-y-24"}>
              <TextSection
                isMain
                title={"What is customer acquisition?"}
                text={[
                  "Customer acquisition refers to the activities and actions a company takes to gain new customers. A successful customer acquisition strategy helps you win new business, retain loyal customers, and improve profits.",
                  "It’s important to remember that acquisition starts at first contact with a new customer and rolls into your strategy for retention — the two work together to keep a marketing program profitable.",
                  "Customer acquisition covers each aspect of the customer journey, from lead generation to activation, customer loyalty, and conversion rate optimization.",
                  "Customers won’t always stick around — no matter how good your retention strategy is — so you need a way to fill the gaps and keep your business moving forward.",
                ]}
              />
            </div>
          </div>
        </Container>
      </Section>
      <MoreArticles className={"mb-40"} id={params.slug} />
    </>
  );
}
