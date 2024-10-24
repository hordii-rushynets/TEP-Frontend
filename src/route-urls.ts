export const MainUrl = {
  getHome: () => "/",
  getGoods: () => "/goods",
  getCompany: () => "/company",
  getServices: () => "/services/delivery",
  getInfoForBuyers: () => "/information-for-buyers",
  getNovelty: () => "/novelty",
  getInspiration: () => "/inspiration",
  getSales: () => "/akcii",
  getSearch: () => "/search",
  getPrivacyPolicy: () => "/publichnaja-oferta",
  getTermsOfUse: () => "/terms-of-use",
  // Additional
  getProductReturnPolicy: () => "/product-return-policy",
  getProductReturnForm: () => "/product-return-form",
  getCareRools: () => "https://drive.google.com/uc?export=download&id=1QzmZjhzr28qjwSKMZygLjSlUMyGLYpkc",
  getPurchase: () => "/purchase",
};

export const AuthUrl = {
  getSignIn: () => "/sign-in",
  getSignUp: () => "/sign-up",
  getResetPassword: () => "/reset-password",
  getResetSuccess: () => `${AuthUrl.getResetPassword()}/success`,
  getAccount: () => `/account`,
  getEmailConfirmation: () => "/email-confirmation"
};

export const PurchaseUrl = {
  getAddress: () => `${MainUrl.getPurchase()}/address`,
  getDelivery: () => `${MainUrl.getPurchase()}/delivery`,
  getOrderData: () => `${MainUrl.getPurchase()}/order-data`,
  getPayment: () => `${MainUrl.getPurchase()}/payment`,
  getConfirmation: () => `${MainUrl.getPurchase()}/confirmation`,
};

export const UserUrl = {
  _getRoot: () => "/account",
  getOrderHistory: () => `${UserUrl._getRoot()}/order-history`,
  getFavourite: () => `${UserUrl._getRoot()}/favourite`,
  getCart: () => `${UserUrl._getRoot()}/cart`,
};

export const GoodsUrl = {
  getPillows: () => `${MainUrl.getGoods()}/pillows`,
  getBlankets: () => `${MainUrl.getGoods()}/blankets`,
  getCovered: () => `${MainUrl.getGoods()}/covered`,
  getLinens: () => `${MainUrl.getGoods()}/linens`,
  getToppers: () => `${MainUrl.getGoods()}/toppers`,
  getSheets: () => `${MainUrl.getGoods()}/sheets`,
  getInterior: () => `${MainUrl.getGoods()}/interior`,
};

export const CompanyUrl = {
  getAbout: () => `${MainUrl.getCompany()}/about`,
  getCooperation: () => `${MainUrl.getCompany()}/cooperation-and-partnership`,
  getCooperationWholesale: () => `${MainUrl.getCompany()}/cooperation-and-partnership/wholesale`,
  getCooperationPrivateLabels: () => `${MainUrl.getCompany()}/cooperation-and-partnership/private-labels`,
  getCooperationRequest: () => `${CompanyUrl.getCooperation()}/leave-a-request`,
  getCooperationSuccess: () => `${CompanyUrl.getCooperationRequest()}/success`,
  getVacancies: () => `${MainUrl.getCompany()}/vacancies`,
  getVacanciesRequest: (slug: string) =>
    `${CompanyUrl.getVacancies()}/${slug}/leave-a-request`,
  getTechnologies: () => `${MainUrl.getCompany()}/technologies`,
  getTechnology: (slug: string) => `${CompanyUrl.getTechnologies()}/${slug}`,
  getStores: () => `${MainUrl.getCompany()}/stores`,
  getBlog: () => `${MainUrl.getCompany()}/blog`,
  getArticle: (slug: string) => `${CompanyUrl.getBlog()}/${slug}`,
};

export const ServicesUrl = {
  getGifts: () => `/services/gifts`,
  getDelivery: () => `/services/delivery`,
  getTracking: () => `/services/tracking`,
};

export const InfoUrl = {
  getContactUs: () => `${MainUrl.getInfoForBuyers()}/contact-us`,
  getContactUsRequest: () => `${InfoUrl.getContactUs()}/leave-a-request`,
  getQuestionsAndAnswers: () =>
    `${MainUrl.getInfoForBuyers()}/questions-and-answers`,
  getFAQ: () => `${InfoUrl.getQuestionsAndAnswers()}/faq`,
  getQAACategory: (slug: string) =>
    `${InfoUrl.getQuestionsAndAnswers()}/${slug}`,
  getProductReturn: () => `${MainUrl.getInfoForBuyers()}/product-return`,
  getFeedbacks: () => `${MainUrl.getInfoForBuyers()}/feedbacks`,
  getLeaveFeedback: () => `${InfoUrl.getFeedbacks()}/leave-feedback`,
  getCare: () => `${MainUrl.getInfoForBuyers()}/care`,
};

export const SocialMediaUrl = {
  getInstagram: () => "https://www.instagram.com/tepuaofficial/?hl=en",
  getPinterest: () => "https://id.pinterest.com/tepuaofficial/",
  getFacebook: () => "https://www.facebook.com/tepofficialua",
  getThreads: () => "https://www.threads.net/@tepuaofficial",
  getTikTok: () => "https://www.tiktok.com/@tepuaofficial",
  getYouTube: () => "https://www.youtube.com/@balakkom_tep",
};
