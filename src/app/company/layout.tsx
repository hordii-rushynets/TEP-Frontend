import { PropsWithChildren } from "react";

import { Breadcrumbs } from "./Breadcrumbs";

export default function CompanyLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
