import ComplexityIMG from "components/Company/Blog/static/complexity.jpg";
import TopicIMG1 from "components/Company/Blog/static/topic-img1.jpg";
import ForChildrenIMG from "components/Company/Blog/static/for-children.jpg";
import WhatMaterialsIMG from "components/Company/Blog/static/materials.jpg";
import { Article } from "./interfaces";

export const articles: Article[] = [
  {
    id: "3",
    title_uk: "Як обрати дитячу ковдру?",
    title_en: "How to choose a baby blanket?",
    tags: [{
      'title_uk': "постільна білизна",
      'title_en': "Linens"
    },
    {
      title_uk: "діти",
      title_en: "children",
    },
    {
      title_uk: "ковдри",
      title_en: "blankets"
    },
    {
      title_uk: "екологічні матеріали",
      title_en: "environmental materials"
    }],
    image: TopicIMG1,
    created_at: "12.04.2021",
    complexity: {
      title_uk: "В чому може бути складність?",
      title_en: "What could be the difficulty?",
      description_uk:
        "Комфортне і 'правильне' дитяче ковдру забезпечить міцний сон не тільки дитині, а й батькам. Як правильно вибрати ковдру, і на що звертати увагу розглянемо нижче.",
      description_en:
        "A comfortable and 'correct' baby blanket will ensure a sound sleep not only for the child, but also for the parents. We will consider how to choose the right blanket and what to pay attention to below.",
      image: ComplexityIMG,
    },
    requirements: {
      title_uk: "Якою має бути ковдра?",
      title_en: "What should the blanket be?",
      description_uk: [
        "Отвечать сезону: зимнее, летнее, межсезонное или одеяло-трансформер на все сезоны.",
        "Лёгким в весе. Взрослому человеку одеяло может казаться совсем лёгким, а для ребёнка лишний вес может стать причиной беспокойного сна.",
        "Высокого качества. Материалы низкого качества уже после первой стирки могут 'сесть', потерять цвет или стать неприятными на ощупь из-за скатышей.",
        "Простое в уходе. Выбирайте износостойкие ткани, которые легко отстирываются и быстро сохнут.",
        "С высокой воздухопроницаемостью. При выборе одеяла обращайте внимание на его возможности циркуляции воздуха.",
        "Вологостійке. Ковдра має мати здатність швидко вбирати і випаровувати вологу.",
        "Звертайте увагу на тепловіддачу. Гарне ковдра повинна зберігати тепло при цьому пропускаючи повітря.",
        "Гипоаллергенное. Навіть якщо у дитини немає алергії, враховуйте цей момент, адже натуральний пух або якісь матеріали, можуть стати причиною нежиті або сльозливості вранці.",
      ],
      description_en: [
        "Respond to the season: winter, summer, off-season or a blanket-transformer for all seasons.",
        "Light in weight. To an adult, the blanket may seem very light, but for a child, excess weight may cause restless sleep.",
        "High quality. Low-quality materials can 'sit down' after the first wash, lose color or become unpleasant to the touch due to wrinkles.",
        "Easy to care for. Choose wear-resistant fabrics that are easy to wash and dry quickly.",
        "With high air permeability. When choosing a blanket, pay attention to its ability to circulate air.",
        "Moisture resistant. The blanket must have the ability to quickly absorb and evaporate moisture.",
        "Pay attention to heat transfer. A good blanket should retain heat while allowing air to pass through.",
        "Hypoallergenic. Even if the child does not have allergies, consider this point, because natural fluff or some materials can cause a runny nose or watery eyes in the morning.",
      ],
    },
    what_materials: {
      title_uk: "З якого матеріалу обрати ковдру?",
      title_en: "What material should a blanket be made of?",
      description_uk: [
        "1. Можливо, ви здивуєтеся, але можете сміливо вибирати синтетичні матеріали. Поліестер пух за своїми якостями схожий на натуральний пух, але на відміну від натурального, не викликає алергії! У Balak Home є спеціально пошиту для діток ковдру 'Kids Line' з колекції Luxe Collection з 100% бавовни з наповнювачем поліестер пух.",
        "2. Ковдра з антиалергенних поліефірних волокон. Такий наповнювач практичний в догляді і забезпечить дитині комфортний сон. У колекції Luxe Collection ви можете знайти ковдру для дітей 'Favourite' з поліефірних волокон 'Double Air' з зовнішньої тканиною 100% мікрофібра. Таке ковдру залишається легким, м'яким і повітряним навіть після багаторазового прання.",
        "Вибираючи ковдру для свого малюка або на подарунок, називайте консультанту не лише вік дитини, а й його зростання, щоб правильно підібрати відповідний розмір.",
      ],
      description_en: [
        "1. You may be surprised, but you can safely choose synthetic materials. Polyester down is similar to natural down in its qualities, but unlike natural down, it does not cause allergies! Balak Home has a specially made for children blanket 'Kids Line' from the collection Luxe Collection made of 100% cotton with polyester fluff filling.",
        "2. A blanket made of anti-allergenic polyester fibers. Such a filling is practical in care and will ensure a comfortable sleep for the child. In the Luxe Collection you can find a blanket for children 'Favourite' made of polyester fibers 'Double Air' with an outer fabric of 100% microfiber. Such a blanket remains light, soft and airy even after multiple washes.",
        "When choosing a blanket for your baby or as a gift, tell the consultant not only the age of the child, but also his height, in order to choose the right size.",
      ],
      image: WhatMaterialsIMG,
    },
    for_children: {
      additional_description_uk:
        "Дітки часто ховаються з головою, якщо їм наснилося щось страшне, літає муха або замерзли, тому дуже важливо вибирати ковдру з високою повітропроникністю.",
      additional_description_en:
        "Children often hide with their heads if they had a scary dream, a fly flies or they are cold, so it is very important to choose a blanket with high breathability.",
      description_uk:
        "Якщо зовнішню тканину можна розглянути, то про склад наповнювача поцікавтеся у консультанта. У дитячі ковдри до натурального пуху часто додають гусячі або качині пір'я для того, щоб додати обсяг. Такий наповнювач сильно вбирає вологу і може з часом відволожуватися, а це ідеальне середовище для появи пилових кліщів і бактерій.",
      description_en:
        "If the outer fabric can be considered, then ask a consultant about the composition of the filler. Goose or duck feathers are often added to natural down in children's blankets in order to add volume. Such a filler is highly absorbent and can become damp over time, which is ideal environment for the appearance of dust mites and bacteria.",
      image: ForChildrenIMG
    },
    author: {
      name: "Марія Балак",
      social_networks: {
        instagram: "#",
        facebook: "#",
        youtube: "#",
        pinterest: "#",
        linkedin: "#",
      },
    },
  },
];