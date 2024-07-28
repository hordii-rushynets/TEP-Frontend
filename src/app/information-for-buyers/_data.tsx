import { InfoUrl, MainUrl, ServicesUrl } from "route-urls";

export const info_links = [
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

export const servicesLinks = [
  {
    title: "Відстежити замовлення",
    url: ServicesUrl.getTracking(),
  },
  {
    title: "Послуги доставки",
    url: ServicesUrl.getDelivery(),
  },
  {
    title: "Подарункові картки",
    url: ServicesUrl.getGifts(),
  }
];
