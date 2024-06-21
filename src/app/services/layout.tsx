import { PropsWithChildren } from "react";

import { Breadcrumbs } from "./Breadcrumbs";

export default function ServicesLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
