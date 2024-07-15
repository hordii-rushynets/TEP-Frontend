import { Container, Section, Title } from "common/ui";
import { Socials } from "components/Socials";

type AuthorProps = {
  author: string;
  date: string;
  tags: string[];
  socialLinks?: Socials;
};

export function Author({ author, date, tags, socialLinks }: AuthorProps) {
  return (
    <Section className={"bg-tep_gray-200"}>
      <Container>
        <div
          className={
            "flex flex-col gap-x-4 gap-y-8 py-20 md:grid md:grid-cols-2 lg:flex lg:flex-row"
          }
        >
          <div className={"lg:flex-1 lg:grow-[2]"}>
            <div className={"mb-4 lg:font-extralight"}>Автор статті</div>
            <Title component={"h5"} size={"2xl"}>
              {author}
            </Title>
          </div>

          <div className={"lg:flex-1 lg:grow-[2]"}>
            <div className={"mb-4 lg:font-extralight"}>Теги</div>
            <div className={"max-w-[288px] font-bold first-letter:uppercase"}>
              {tags?.join(", ")}
            </div>
          </div>

          <div className={"lg:flex-1"}>
            <div className={"mb-4 lg:font-extralight"}>Дата</div>
            <div className={"whitespace-nowrap font-bold"}>{date}</div>
          </div>

          <div className={"lg:flex-1"}>
            <div className={"mb-4 lg:font-extralight"}>Поділитись</div>
            <Socials links={socialLinks} className={""} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
