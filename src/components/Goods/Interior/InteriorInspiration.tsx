import { Container, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import { BigGrid } from "components/Goods/BigGrid";
import IMG1 from "components/Home/Inspiration/static/img1.jpg";
import IMG2_1 from "components/Home/Inspiration/static/img2-1.jpg";
import IMG2_2 from "components/Home/Inspiration/static/img2-2.jpg";
import IMG2_3 from "components/Home/Inspiration/static/img2-3.jpg";
import IMG2_4 from "components/Home/Inspiration/static/img2-4.jpg";
import IMG2_5 from "components/Home/Inspiration/static/img2-5.jpg";
import IMG2_6 from "components/Home/Inspiration/static/img2-6.jpg";
import IMG2 from "components/Home/Inspiration/static/img2.jpg";
import IMG3 from "components/Home/Inspiration/static/img3.jpg";
import IMG4 from "components/Home/Inspiration/static/img4.jpg";
import IMG5 from "components/Home/Inspiration/static/img5.jpg";
import IMG6 from "components/Home/Inspiration/static/img6.jpg";

const images = [
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG2_1,
  IMG2_2,
  IMG2_3,
  IMG2_4,
  IMG2_5,
  IMG2_6,
];

export function InteriorInspiration() {
  return (
    <Section className={"mb-40 lg:mb-64"}>
      <Container>
        <div>
          <Title className={"mb-[38px] text-3xl"}>Більше натхнення</Title>
          <div className={"mb-6"}>
            <CategoriesFilter />
          </div>
          <BigGrid images_array={images} />
        </div>
      </Container>
    </Section>
  );
}
