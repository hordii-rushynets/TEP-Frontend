"use client";

import { Tab } from "@headlessui/react";
import { useLocalization } from "contexts/LocalizationContext";
import { ReactNode } from "react";
import { cn } from "utils/cn";

export type AccountTabsProps = {
  tabsContent: ReactNode[];
};

export function AccountTabs({ tabsContent }: AccountTabsProps) {
  const { staticData } = useLocalization();

  return (
    <Tab.Group>
      <Tab.List
        className={
          "flex w-full flex-nowrap overflow-x-scroll border-b border-tep_gray-200"
        }
      >
        {staticData.account.accountTabs.map((tab: string) => (
          <Tab key={tab} className={"flex-1 outline-none"}>
            {({ selected }) => (
              <span
                className={cn(
                  "block whitespace-nowrap px-6 py-4 text-lg font-bold text-tep_gray-700/50",
                  {
                    "border-b-2 border-black text-black": selected,
                  },
                )}
              >
                {tab}
              </span>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {tabsContent.map((panel, Idx) => (
          <Tab.Panel className={"pb-40 pt-12 lg:pb-64"} key={Idx}>
            {panel}
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
}
