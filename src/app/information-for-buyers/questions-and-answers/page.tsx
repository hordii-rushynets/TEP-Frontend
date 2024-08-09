import AnyQuestions from "common/AnyQuestions";
import { QAACategories } from "components/Info/QuestionsAndAnswers/QAACategories";

import { qaa_categories } from "./_data";

export type QAACategory = {
  id: number;
  url: string;
  icon: React.ReactNode;
};

export default function QAAPage() {
  return (
    <>
      <QAACategories categories={qaa_categories} />
      <AnyQuestions buttonSize={"large"} />
    </>
  );
}
