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
  ADMIN_ROLE: "admin",
  CLIENT_ROLE: "client",
  LOGIN: "/login",
  SIGNUP: "/signup",
  FORGOT_PASSWORD: "/forgot-password",
  UNAUTHORIZED: "/unauthorized",
};

export const CLIENT_ROUTES = {
  PROJECTS: "/client/projects",
};

export const getUserRole = (user) => {
  if (!user) return null;
  const metaRole = user.user_metadata?.role || user.app_metadata?.role;
  if (metaRole && metaRole !== "authenticated") return metaRole;
  return "client";
};

export const ADMIN_REDIRECT = "/admin/dashboard";
export const CLIENT_REDIRECT = "/client/projects";

export const DEFAULT_REDIRECTS = (role) => {
  switch (role) {
    case "admin":
      return ADMIN_REDIRECT;
    case "client":
      return CLIENT_REDIRECT;
    default:
      return ROUTES.HOME;
  }
};

export const EMAIL = "dev.gaber@gmail.com";
export const WHATSAPP_URL = "https://wa.me/201500223440";

export const NAV_LINKS = [
  {
    title: "Home",
    href: ROUTES.HOME,
  },
  {
    title: "Works",
    href: ROUTES.WORKS,
  },
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

export const ARAB_COUNTRIES = [
  {value: "Algeria", label: "Algeria (الجزائر)"},
  {value: "Bahrain", label: "Bahrain (البحرين)"},
  {value: "Comoros", label: "Comoros (جزر القمر)"},
  {value: "Djibouti", label: "Djibouti (جيبوتي)"},
  {value: "Egypt", label: "Egypt (مصر)"},
  {value: "Iraq", label: "Iraq (العراق)"},
  {value: "Jordan", label: "Jordan (الأردن)"},
  {value: "Kuwait", label: "Kuwait (الكويت)"},
  {value: "Lebanon", label: "Lebanon (لبنان)"},
  {value: "Libya", label: "Libya (ليبيا)"},
  {value: "Mauritania", label: "Mauritania (موريتانيا)"},
  {value: "Morocco", label: "Morocco (المغرب)"},
  {value: "Oman", label: "Oman (عُمان)"},
  {value: "Palestine", label: "Palestine (فلسطين)"},
  {value: "Qatar", label: "Qatar (قطر)"},
  {value: "Saudi Arabia", label: "Saudi Arabia (السعودية)"},
  {value: "Somalia", label: "Somalia (الصومال)"},
  {value: "Sudan", label: "Sudan (السودان)"},
  {value: "Syria", label: "Syria (سوريا)"},
  {value: "Tunisia", label: "Tunisia (تونس)"},
  {value: "United Arab Emirates", label: "United Arab Emirates (الإمارات)"},
  {value: "Yemen", label: "Yemen (اليمن)"},
];
