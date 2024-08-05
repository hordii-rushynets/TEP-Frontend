import { Button, Container, Title } from "common/ui";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type HeroCardProps = {
    image: StaticImageData;
    title: string;
    link: string;
    buttonText: string;
}

export function HeroCard({image, title, link, buttonText} : HeroCardProps) {
    return (
    <>
      <Image
        src={image}
        alt={"Main Background image"}
        fill
        className={"select-none object-cover opacity-85"}
        aria-hidden
        sizes="100vw, 50vw, 33vw"
      />
      <Container>
        <div
          className={
            "relative z-10 flex min-h-[80vh] flex-col items-center justify-center gap-y-7 md:min-h-[90vh]"
          }
        >
          <Title
            className={"text-center text-white"}
            component={"h1"}
            size={"5xl"}
          >
            {title}
          </Title>
          <Link href={link}>
            <Button size={"large"} colorVariant={"white"}>
              {buttonText}
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
}