import Link from "next/link";
import { FiFrown } from "react-icons/fi";
import { MainUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

export default function NotFound() {
  return (
    <Section>
      <Container>
        <div
          className={
            "flex flex-col items-center justify-center py-24 text-center md:pb-40 lg:pb-52 lg:pt-40"
          }
        >
          <div
            className={
              "mb-5 flex justify-center gap-x-2 text-[122px] leading-none text-tep_blue-400"
            }
          >
            <span>4</span>
            <FiFrown className={"mt-1.5 size-24"} />
            <span>4</span>
          </div>
          <Title className={"mb-3 text-3xl md:mb-3.5"}>
            Сторінка не знайдена
          </Title>
          <p className={"mb-16 max-w-[604px] text-sm md:mb-20 lg:font-light"}>
            Можливо, Ви вказали не існуючу адресу, сторінка була видалена,
            переміщена або тимчасово недоступна!
          </p>
          <Link className={"w-full sm:w-auto"} href={MainUrl.getHome()}>
            <Button colorVariant={"black"} fullWidth size={"super-large"}>
              На головну
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
