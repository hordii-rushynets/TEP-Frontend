import { InfoUrl, MainUrl, ServicesUrl } from "route-urls";

export const info_links = [
  {
    url: InfoUrl.getContactUs(),
  },
  {
    url: InfoUrl.getProductReturn(),
  },
  {
    url: InfoUrl.getQuestionsAndAnswers(),
  },
  {
    url: ServicesUrl.getTracking(),
  },
  {
    url: InfoUrl.getCare(),
  },
  {
    url: InfoUrl.getFeedbacks(),
  },
  {
    url: MainUrl.getTermsOfUse(),
  },
  {
    url: MainUrl.getPrivacyPolicy(),
  },
];

export const servicesLinks = [
  {
    url: ServicesUrl.getTracking(),
  },
  {
    url: ServicesUrl.getDelivery(),
  },
  {
    url: ServicesUrl.getGifts(),
  }
];
