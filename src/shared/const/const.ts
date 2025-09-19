export const navbar = [
  {
    name: "О нас",
    path: "/about",
  },
  {
    name: "Преимущества",
    path: "/advantages",
  },
  {
    name: "Услуги",
    path: "/services",
  },
  {
    name: "Наши кейсы",
    path: "/cases",
  },
  {
    name: "Контакты",
    path: "/contacts",
  },
];

type Social = "tg" | "mail" | "phone";

export const social: { id: Social; name: string; link: string }[] = [
  {
    id: "tg",
    name: "Telegram",
    link: "https://t.me/da_web",
  },
  {
    id: "mail",
    name: "web-da@mail.ru",
    link: "web-da@mail.ru",
  },
  {
    id: "phone",
    name: "Telegram",
    link: "8 (989) 292-07-17",
  },
];
