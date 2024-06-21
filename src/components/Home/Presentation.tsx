import Link from "next/link";
import { MainUrl } from "route-urls";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, Section, Title } from "common/ui";

import SharesIMG from "./static/img1.jpg";
import ProductsIMG from "./static/img2.jpg";
import NewsIMG from "./static/img3.jpg";

export function Presentation() {
  return (
    <Section className={"mb-24 mt-12 md:mt-24 lg:mt-20"}>
      <Container>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          <div>
            <ImageSquare source={SharesIMG} classes={{ wrapper: "mb-6" }} />
            <Title className={"mb-1.5"} component={"h5"} size={"2xl"}>
              Акції
            </Title>
            <p className={"mb-8 font-light text-tep_gray-700/50"}>
              Наші товари за акційною ціною
            </p>
            <Link href={MainUrl.getSales()} className={"inline-block"}>
              <Button size={"normal"} colorVariant={"outlined"}>
                Переглянути
              </Button>
            </Link>
          </div>
          <div>
            <ImageSquare source={ProductsIMG} classes={{ wrapper: "mb-6" }} />
            <Title className={"mb-1.5"} component={"h5"} size={"2xl"}>
              Товари
            </Title>
            <p className={"mb-8 font-light text-tep_gray-700/50"}>
              Ознайомся з лінійкою наших товарів
            </p>
            <Link href={MainUrl.getGoods()} className={"inline-block"}>
              <Button size={"normal"} colorVariant={"outlined"}>
                Ознайомитись
              </Button>
            </Link>
          </div>
          <div>
            <ImageSquare source={NewsIMG} classes={{ wrapper: "mb-6" }} />
            <Title className={"mb-1.5"} component={"h5"} size={"2xl"}>
              Новинки
            </Title>
            <p className={"mb-8 font-light text-tep_gray-700/50"}>
              Нові колекції та текстильні лінійки
            </p>
            <Link href={MainUrl.getNovelty()} className={"inline-block"}>
              <Button size={"normal"} colorVariant={"outlined"}>
                Переглянути
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
