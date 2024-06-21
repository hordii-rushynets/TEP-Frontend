import { PropsWithChildren } from "react";

import { Breadcrumbs } from "./Breadcrumbs";

export default function AccountLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
}
