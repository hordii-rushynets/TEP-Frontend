"use client"

import { PropsWithChildren } from "react";

import { Container, Section, Title } from "common/ui";

import { Breadcrumbs } from "./Breadcrumbs";
import { PostServiceProvider } from "contexts/PostServiceContext";
import { useLocalization } from "contexts/LocalizationContext";

export default function PurchaseLayout({ children }: PropsWithChildren) {
  const { staticData } = useLocalization();

  return (
    <>
      <Section>
        <Container>
          <div>
            <Title className={"pb-12 pt-8 text-3xl md:py-12"}>
              {staticData.purchase.layoutTitle}
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
