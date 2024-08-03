import { PropsWithChildren } from "react";

import { Container, Section, Title } from "common/ui";

import { Breadcrumbs } from "./Breadcrumbs";
import { PostServiceProvider } from "contexts/PostServiceContext";

export default function PurchaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Section>
        <Container>
          <div>
            <Title className={"pb-12 pt-8 text-3xl md:py-12"}>
              Оформлення покупки
            </Title>
          </div>
        </Container>
      </Section>
      <Breadcrumbs />
      <PostServiceProvider>
        {children}
      </PostServiceProvider>
    </>
  );
}
