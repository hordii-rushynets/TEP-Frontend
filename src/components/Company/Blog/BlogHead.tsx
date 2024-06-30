import { Article } from "app/company/blog/page";

import { Container, Section, Title } from "common/ui";

import BlogGrid from "./BlogGrid";

export type TopicsHeaderProps = {
  articles: Article[];
};

export default function BlogHead({ articles = [] }: TopicsHeaderProps) {
  return (
    <Section>
      <Container>
        <div className={"mb-24 mt-12"}>
          <Title className={"mb-3.5 text-3xl"}>Блог</Title>
          <p className={"mb-7 text-sm lg:mb-12 lg:font-extralight"}>
            Ми починали як невелика чернівецька компанія, що відправляє поштою
            замовлення через каталог і стали одним із найбільш відомих в Україні
            брендів текстильних товарів. Сьогодні у різних країнах починають
            працювати магазини ТЕП, і ми плануємо збільшити цю кількість.
            Дізнайтесь більше про нашу захопливу історію – з самого початку до
            сьогодення.
          </p>
          <BlogGrid articles={articles} />
        </div>
      </Container>
    </Section>
  );
}
