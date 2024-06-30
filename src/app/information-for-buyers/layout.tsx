import { PropsWithChildren } from "react";

import { Breadcrumbs } from "./Breadcrumbs";

export default function InformationForBuyersLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
