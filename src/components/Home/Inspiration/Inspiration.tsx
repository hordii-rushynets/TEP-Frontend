import { Container, Section, Title } from "common/ui";
import { BigGrid } from "components/Goods/BigGrid";

import IMG1 from "./static/img1.jpg";
import IMG2_1 from "./static/img2-1.jpg";
import IMG2_2 from "./static/img2-2.jpg";
import IMG2_3 from "./static/img2-3.jpg";
import IMG2_4 from "./static/img2-4.jpg";
import IMG2_5 from "./static/img2-5.jpg";
import IMG2_6 from "./static/img2-6.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import IMG4 from "./static/img4.jpg";
import IMG5 from "./static/img5.jpg";
import IMG6 from "./static/img6.jpg";

export function Inspiration() {
  return (
    <Section className={"mb-64 lg:mb-48"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Натхнення</Title>
          <BigGrid
            images_array={[
              IMG1,
              IMG2,
              IMG2_1,
              IMG2_2,
              IMG2_3,
              IMG2_4,
              IMG2_5,
              IMG2_6,
              IMG3,
              IMG4,
              IMG5,
              IMG6,
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
