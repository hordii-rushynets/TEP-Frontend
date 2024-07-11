import { ImageSquare } from "common/ImageSquare";
import { Tip } from "common/Tip";
import { Container, Section } from "common/ui";

import IMG1 from "./static/image1.jpg";
import IMG2 from "./static/image2.jpg";

export const Images = () => {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div className={"flex flex-col gap-6 md:flex-row"}>
          <div className={"relative flex-1"}>
            <ImageSquare
              source={IMG1}
              classes={{ wrapper: "pb-[147%] lg:pb-[110%]" }}
            />
            <Tip
              product={{
                id: "1",
                category_title: "Ковдра",
                category_slug: "sheets",
                title: "Velure",
                price: 1299,
                image: "",
                number_of_views: 1,
                date: ""
              }}
              className={"absolute right-[20%] top-[45%]"}
            />
          </div>
          <div className={"relative flex-1"}>
            <ImageSquare
              source={IMG2}
              classes={{ wrapper: "pb-[147%] lg:pb-[110%]" }}
            />
            <Tip
              product={{
                id: "2",
                category_title: "Ковдра",
                category_slug: "sheets",
                title: "Velure",
                price: 1299,
                image: "",
                number_of_views: 1,
                date: ""
              }}
              className={"absolute right-[30%] top-[30%]"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
