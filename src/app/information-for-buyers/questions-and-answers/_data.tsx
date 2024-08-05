import { InfoUrl, CompanyUrl, ServicesUrl } from "route-urls";
import { QAACategory } from "./page";
import { FiBookOpen, FiCreditCard, FiHome, FiMessageSquare, FiShoppingBag, FiTruck } from "react-icons/fi";
import { Basket } from "common/ui/icons/Basket";

export const qaa_categories: QAACategory[] = [
    {
      id: 1,
      url: `${InfoUrl.getQuestionsAndAnswers()}/1`,
      icon: <Basket />,
    },
    {
      id: 2,
      url: CompanyUrl.getStores(),
      icon: <FiHome />,
    },
    {
      id: 3,
      url: `${InfoUrl.getQuestionsAndAnswers()}/2`,
      icon: <FiMessageSquare />,
    },
    {
      id: 4,
      url: `${InfoUrl.getQuestionsAndAnswers()}/3`,
      icon: <FiCreditCard />,
    },
    {
      id: 5,
      url: ServicesUrl.getDelivery(),
      icon: <FiTruck />,
    },
    {
      id: 6,
      url: ServicesUrl.getTracking(),
      icon: <FiShoppingBag />,
    },
    {
      id: 7,
      url: `${InfoUrl.getQuestionsAndAnswers()}/4`,
      icon: <FiBookOpen />,
    },
    {
      id: 8,
      url: `${InfoUrl.getQuestionsAndAnswers()}/5`,
      icon: <FiHome />,
    },
  ];