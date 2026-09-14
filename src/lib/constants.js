import {
  AiMail01Icon,
  Facebook,
  GithubIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons/index";

export const ROUTES = {
  HOME: "/",
  WORKS: "/works",
  ABOUT: "/about",
  CONTACT: "/contact",
  CERTIFICATES: "/certificates",
  WORKS_SLUG: (slug) => `/works/${slug}`,

  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
};

export const EMAIL = "dev.gaber@gmail.com";
export const WHATSAPP_URL = "https://wa.me/201500223440"; // Replace with your WhatsApp phone number

export const NAV_LINKS = [
  {
    title: "Home",
    href: ROUTES.HOME,
  },
  {
    title: "Works",
    href: ROUTES.WORKS,
  },
  // {
  //   title: "Certificates",
  //   href: ROUTES.CERTIFICATES,
  // },
  {
    title: "Login",
    href: ROUTES.LOGIN,
  },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "LinkedIn",
    icon: Linkedin02Icon,
    href: "https://www.linkedin.com/in/gaberuseff",
  },
  {
    id: 2,
    label: "GitHub",
    icon: GithubIcon,
    href: "https://github.com/gaberuseff",
  },
  {
    id: 3,
    label: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/gaberuseff",
  },
  {
    id: 4,
    label: "Email",
    icon: AiMail01Icon,
    href: `mailto:${EMAIL}`,
  },
];
