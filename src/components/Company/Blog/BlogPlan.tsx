import { Title } from "common/ui";

export function BlogPlan() {
  return (
    <div className={"mb-24 mt-12 bg-tep_gray-200 px-6 py-10 md:mt-16 md:px-10"}>
      <Title className={"mb-6 md:mb-4"}>План блогу:</Title>
      <ol
        className={
          "list flex list-inside list-decimal flex-col gap-y-2.5 pl-1 text-lg font-light md:text-xl"
        }
      >
        <li>Наповнювач для ковдри</li>
        <li>Особливості використання дитячої ковдри</li>
        <li>Спосіб прання ковдри</li>
        <li>Поради по догляду</li>
        <li>Вибір ковдри під сезон</li>
      </ol>
    </div>
  );
}
