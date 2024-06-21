import Link from "next/link";
import { MainUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

export type SuccessProps = {
  title?: string;
  description?: string;
  buttonTitle?: string;
  url?: string;
};

export function Success({
  title = "Ваша заявка надіслана",
  description = "Дякую за заявку! Наш менеджер зв’яжеться з Вами найближчим часом, щоб обговорити деталі.",
  buttonTitle = "На головну",
  url = MainUrl.getHome(),
}: SuccessProps) {
  return (
    <Section>
      <Container>
        <div
          className={
            "mx-auto flex min-h-[90vh] max-w-[470px] flex-col items-center justify-center pb-[10vh] text-center"
          }
        >
          <Title component={"h3"} className={"mb-5 text-3xl md:mb-6"}>
            {title}
          </Title>
          <p className={"mb-12 text-sm md:mb-[72px] lg:font-extralight"}>
            {description}
          </p>
          <Link href={url} className={"w-full sm:w-auto"}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              size={"super-large"}
              colorVariant={"black"}
            >
              {buttonTitle}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
