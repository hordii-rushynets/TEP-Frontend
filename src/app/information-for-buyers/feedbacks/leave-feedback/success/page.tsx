import { InfoUrl } from "route-urls";

import { Success } from "components/Forms/Success";

export default function SuccessPage() {
  return (
    <>
      <Success
        title={"Дякуємо за відгук!"}
        description={
          "Ви можете побачити його в списку відгуків, а також переглянути відгуки інших клієнтів."
        }
        buttonTitle={"Перейти до відгуків"}
        url={InfoUrl.getFeedbacks()}
      />
    </>
  );
}
