import { Combobox, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, HTMLAttributes, useState } from "react";
import { FiArrowRight, FiGrid, FiSearch, FiStar, FiX } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { Title } from "common/ui";
import IMG from "components/Search/static/img.jpg";
import { useSearchContext } from "contexts/SearchContext";

const queries = ["постіль", "подушки", "чохли на подушку", "простинь"];

const goods = [
  {
    id: "1",
    title: "Постільна білизна",
    category: "linens",
    article: "1239931",
    rating: 3.0,
    image: IMG,
  },
  {
    id: "2",
    title: "Постільна білизна",
    category: "linens",
    article: "2133531",
    rating: 5.0,
    image: IMG,
  },
  {
    id: "3",
    title: "Постільна білизна",
    category: "linens",
    article: "2139976",
    rating: 4.4,
    image: IMG,
  },
  {
    id: "4",
    title: "Подушки",
    category: "pillows",
    article: "1239931",
    rating: 3.7,
    image: IMG,
  },
  {
    id: "5",
    title: "Подушки",
    category: "pillows",
    article: "2133531",
    rating: 5.0,
    image: IMG,
  },
  {
    id: "6",
    title: "Подушки",
    category: "pillows",
    article: "2139976",
    rating: 4.0,
    image: IMG,
  },
];

export type AutocompleteInputProps = Pick<
  HTMLAttributes<HTMLElement>,
  "className"
>;

export function AutocompleteInput({ className }: AutocompleteInputProps) {
  const [query, setQuery] = useState("");
  const { setSearchQuery } = useSearchContext();
  const router = useRouter();

  const filteredQueries =
    query === ""
      ? queries
      : queries.filter((i) => {
          return i.toLowerCase().includes(query?.toLowerCase());
        });

  const filteredGoods =
    query === ""
      ? []
      : goods.filter((p) => {
          return p.title.toLowerCase().includes(query?.toLowerCase());
        });

  return (
    <Combobox
      value={query}
      onChange={(v) => {
        if (v === undefined) {
          setSearchQuery(query);
        } else {
          setSearchQuery(v);
          setQuery(v);
        }
        router.push(MainUrl.getSearch());
      }}
    >
      {({ open }) => (
        <div className={cn("relative", className)}>
          <div
            className={cn(
              "relative z-[90] flex items-center overflow-hidden rounded-full border border-tep_gray-700/20 bg-tep_gray-200 text-sm font-light text-black outline-none transition-colors placeholder:text-sm placeholder:font-light placeholder:text-tep_gray-700 hover:border-black",
              {
                "border-black bg-white": open,
              },
            )}
          >
            <Combobox.Input
              placeholder={"Що ти шукаєш?"}
              className={"w-full bg-transparent px-6 pb-3.5 pt-4 outline-none "}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <FiX
                className={"absolute right-6 top-3 size-6"}
                onClick={() => setQuery("")}
              />
            ) : (
              <FiSearch className={"absolute right-6 top-3 size-6"} />
            )}
          </div>
          <Transition
            show={open}
            leave={"transition ease-in duration-100"}
            leaveFrom={"opacity-100"}
            leaveTo={"opacity-0"}
          >
            <Transition.Child
              as={Fragment}
              enter={"ease-out transition transform duration-300"}
              enterFrom={"opacity-0 scale-95"}
              enterTo={"opacity-100 scale-100"}
              leave={"ease-in transition transform duration-200"}
              leaveFrom={"opacity-100 scale-100"}
              leaveTo={"opacity-0 scale-95"}
            >
              <div
                className={cn("fixed inset-0 z-[60] bg-black/25")}
                aria-hidden
              />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter={"ease-out transition transform duration-300"}
              enterFrom={"opacity-0 scale-95"}
              enterTo={"opacity-100 scale-100"}
              leave={"ease-in transition transform duration-200"}
              leaveFrom={"opacity-100 scale-100"}
              leaveTo={"opacity-0 scale-95"}
            >
              <Combobox.Options
                className={
                  "absolute -left-[24px] -top-[76px] z-[70] max-h-[450px] min-h-[150px] w-[calc(100%+48px)] overflow-auto rounded-b-3xl bg-white px-6 pb-11 pt-36 text-base shadow-lg focus:outline-none sm:text-sm md:-top-6 md:pt-24"
                }
              >
                {filteredGoods.length > 0 ? (
                  filteredGoods.map((g) => (
                    <Combobox.Option
                      key={g.id}
                      value={g.title}
                      className={"rounded-lg  transition-colors"}
                    >
                      {({ active }) => {
                        return (
                          <div
                            className={cn(
                              "flex items-center justify-between gap-x-4 px-2 py-1",
                              {
                                " hover:bg-gray-200": active,
                              },
                            )}
                          >
                            <div className={"size-[73px]"}>
                              <ImageSquare
                                classes={{ wrapper: "rounded-xl" }}
                                source={g.image}
                              />
                            </div>
                            <div className={"flex-1"}>
                              <Title
                                className={"mb-1.5"}
                                component={"h4"}
                                size={"base"}
                              >
                                {g.title}
                              </Title>
                              <span className={"text-sm"}>
                                Артикул №{g.article}
                              </span>
                            </div>
                            <div
                              className={
                                "flex basis-14 items-center gap-x-0.5 self-start"
                              }
                            >
                              <FiStar className={"size-3 fill-black"} />
                              <span
                                className={
                                  "pt-0.5 text-sm font-bold leading-[0]"
                                }
                              >
                                {g.rating}
                              </span>
                            </div>
                            <FiArrowRight className={"size-6"} />
                          </div>
                        );
                      }}
                    </Combobox.Option>
                  ))
                ) : (
                  <>
                    {filteredQueries.map((q, Idx) => (
                      <Combobox.Option
                        key={Idx}
                        // onClick={() => {
                        //   setSearchQuery(q.label);
                        //   setQuery(q.label);
                        // }}
                        value={q}
                        className={
                          "rounded-lg transition-colors hover:bg-tep_blue-500 hover:text-white"
                        }
                      >
                        <div className={"flex items-center gap-x-4 px-6 py-3"}>
                          <FiSearch className={"size-6"} />
                          <span className={"text-sm font-bold"}>{q}</span>
                        </div>
                      </Combobox.Option>
                    ))}
                    <Combobox.Option
                      value={undefined}
                      className={
                        "rounded-lg transition-colors hover:bg-tep_blue-500 hover:text-white"
                      }
                    >
                      <Link
                        href={MainUrl.getGoods()}
                        className={"flex items-center gap-x-4 px-6 py-3"}
                      >
                        <FiGrid className={"size-6"} />
                        <span className={"text-sm font-bold"}>Всі товари</span>
                      </Link>
                    </Combobox.Option>
                  </>
                )}
              </Combobox.Options>
            </Transition.Child>
          </Transition>
        </div>
      )}
    </Combobox>
  );
}
