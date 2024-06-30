import { PropsWithChildren } from "react";

import { Breadcrumbs } from "./Breadcrumbs";

export default function ProductLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
