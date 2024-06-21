import { InfoUrl, CompanyUrl, ServicesUrl } from "route-urls";
import { QAACategory } from "./page";
import { FiBookOpen, FiCreditCard, FiHome, FiMessageSquare, FiShoppingBag, FiTruck } from "react-icons/fi";
import { Basket } from "common/ui/icons/Basket";

export const qaa_categories: QAACategory[] = [
    {
      topic: "Наявність товару",
      data: [
        {
          question:
            "Товар, який мене цікавить, був доступний онлайн, але пізніше його не виявилося в магазині. Чому так сталося?",
          answer: [
            "Ми пропонуємо нашим клієнтам асортимент із 1000 стильних, функціональних і доступних за ціною виробів ТЕП для облаштування вашої спальної кімнати. Приблизно 200 з них можна придбати в магазині, а решту  виробів — переважно оптові товари можна замовити з доставкою до одного з наших пунктів видачі, —oдин із яких знаходиться просто в магазині, або додому за окрему плату.",
            "Хоча ми намагаємося вчасно оновлювати інформацію про наявність товару на сайті, трапляється, що з моменту перевірки наявності товару онлайн і до прибуття у магазин виріб стає недоступним. Ми докладаємо зусиль, щоб підтримувати наявну кількість товарів відповідно до потреб споживачів, але у зв’язку з пандемією COVID 19, ми можемо зіткнутися з труднощами під час закупівлі та доставки товарів від постачальників.",
          ],
        },
        {
          question: "Як перевірити наявність товару?",
          answer: ["Як перевірити наявність товару?"],
        },
        {
          question: "Яку гарантію на придбані вироби ви пропонуєте?",
          answer: ["Яку гарантію на придбані вироби ви пропонуєте?"],
        },
        {
          question: "Чи можна придбати товари ТЕП за кордоном?",
          answer: ["Чи можна придбати товари ТЕП за кордоном?"],
        },
        {
          question: "Як дізнатися, коли товар знову надійде у продаж?",
          answer: ["Як дізнатися, коли товар знову надійде у продаж?"],
        },
        {
          question: "Що якщо товар приїхав пошкодженим?",
          answer: ["Що якщо товар приїхав пошкодженим?"],
        },
        {
          question: "Коли певні товари знову надійдуть у продаж?",
          answer: ["Коли певні товари знову надійдуть у продаж?"],
        },
        {
          question: "Де можна знайти інформацію про товар онлайн?",
          answer: ["Де можна знайти інформацію про товар онлайн?"],
        },
        {
          question: "Коли можна очікувати нові знижки на певні товари?",
          answer: ["Коли можна очікувати нові знижки на певні товари?"],
        },
      ],
      url: `${InfoUrl.getQuestionsAndAnswers()}/1`,
      icon: <Basket />,
    },
    {
      topic: "Магазини ТЕП",
      url: CompanyUrl.getStores(),
      icon: <FiHome />,
    },
    {
      topic: "Поширені запитання",
      data: [
        {
          question: "Question 1",
          answer: ["Answer 1"],
        },
        {
          question: "Question 2",
          answer: ["Answer 2"],
        },
        {
          question: "Question 3",
          answer: ["Answer 3"],
        },
      ],
      url: `${InfoUrl.getQuestionsAndAnswers()}/2`,
      icon: <FiMessageSquare />,
    },
    {
      topic: "Оплата",
      data: [
        {
          question: "Question 1",
          answer: ["Answer 1"],
        },
      ],
      url: `${InfoUrl.getQuestionsAndAnswers()}/3`,
      icon: <FiCreditCard />,
    },
    {
      topic: "Доставка",
      url: ServicesUrl.getDelivery(),
      icon: <FiTruck />,
    },
    {
      topic: "Як відстежити замовлення",
      url: ServicesUrl.getTracking(),
      icon: <FiShoppingBag />,
    },
    {
      topic: "Загальна інформація",
      data: [
        {
          question: "Question 1",
          answer: ["Answer 1"],
        },
        {
          question: "Question 2",
          answer: ["Answer 2"],
        },
        {
          question: "Question 3",
          answer: ["Answer 3"],
        },
      ],
      url: `${InfoUrl.getQuestionsAndAnswers()}/4`,
      icon: <FiBookOpen />,
    },
    {
      topic: "Повернення та обмін",
      data: [
        {
          question: "Question 1",
          answer: ["Answer 1"],
        },
        {
          question: "Question 2",
          answer: ["Answer 2"],
        },
      ],
      url: `${InfoUrl.getQuestionsAndAnswers()}/5`,
      icon: <FiHome />,
    },
  ];