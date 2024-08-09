"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FiX } from "react-icons/fi";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, IconButton, Section } from "common/ui";
import { useCompareContext } from "contexts/CompareContext";
import { useParams } from "next/navigation";
import { useLocalization } from "contexts/LocalizationContext";


export function CompareBanner() {
  const params = useParams();
  const url = params.category;
  const { isOpen, setIsOpen, products } = useCompareContext();
  const { staticData } = useLocalization();

  return (
    <Transition
      show={isOpen}
      enter={"transition duration-100 ease-out"}
      enterFrom={"transform scale-95 opacity-0"}
      enterTo={"transform scale-100 opacity-100"}
      leave={"transition duration-75 ease-out"}
      leaveFrom={"transform scale-100 opacity-100"}
      leaveTo={"transform scale-95 opacity-0"}
    >
      <Section>
        <Container>
          <div
            className={
              "flex flex-col justify-between gap-y-7 border-b border-tep_gray-200 py-5 md:flex-row md:items-center"
            }
          >
            <div className={"flex items-center gap-x-7"}>
              <p className={"text-sm font-bold text-tep_gray-500"}>
                {products.length} {staticData.goods.compareBanner.select}
              </p>
              <div className={"flex items-center justify-between gap-x-4"}>
                {products.map(item => (
                  <ImageSquare
                    key={item.id}
                    source={item.product_variants[0].main_image}
                    classes={{ wrapper: "size-10 pb-0 rounded" }}
                  />
                ))}
              </div>
            </div>
            <div className={"flex justify-between gap-x-2.5"}>
              <Link href={`${url}/compare`}>
                <Button
                  onClick={() => setIsOpen(false)}
                  colorVariant={"black"}
                  size={"small"}
                >
                  {staticData.goods.compareBanner.compare}
                </Button>
              </Link>
              <IconButton
                onClick={() => setIsOpen(false)}
                colorVariant={"outlined"}
                size={"large"}
              >
                <FiX className={"size-6"} />
              </IconButton>
            </div>
          </div>
        </Container>
      </Section>
    </Transition>
  );
}
