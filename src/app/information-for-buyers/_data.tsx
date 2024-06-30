import { InfoUrl, MainUrl, ServicesUrl } from "route-urls";

export const info_links = [
  {
    title: "Послуги",
    url: MainUrl.getServices(),
  },
  {
    title: "Зв’яжись з нами",
    url: InfoUrl.getContactUs(),
  },
  {
    title: "Повернення товару ",
    url: InfoUrl.getProductReturn(),
  },
  {
    title: "Питання та відповіді",
    url: InfoUrl.getQuestionsAndAnswers(),
  },
  {
    title: "Відстежити замовлення",
    url: ServicesUrl.getTracking(),
  },
  {
    title: "Догляд за продукцією",
    url: InfoUrl.getCare(),
  },
  {
    title: "Відгуки",
    url: InfoUrl.getFeedbacks(),
  },
  {
    title: "Умови користування",
    url: MainUrl.getTermsOfUse(),
  },
  {
    title: "Політика конфіденційності",
    url: MainUrl.getPrivacyPolicy(),
  },
];
