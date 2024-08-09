"use client"

import { Container, Section, Title } from "common/ui";
import { BigGrid } from "components/Goods/BigGrid";

import { ProductService } from "app/goods/[category]/services";
import { useEffect, useState } from "react";
import { useLocalization } from "contexts/LocalizationContext";

export function Inspiration() {
  const productService = new ProductService();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    productService.getInspiration().then(images => setImages(images.slice(0, 36).map(image => image.image)))
  }, []);

  const { staticData } = useLocalization();

  return (
    <Section className={"mb-64 lg:mb-48"}>
      <Container>
        <div>
          <Title className={"mb-7"}>{staticData.home.inspirationTitle}</Title>
          <BigGrid
            images_array={images}
          />
        </div>
      </Container>
    </Section>
  );
}
