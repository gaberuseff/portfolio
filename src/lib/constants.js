import {
  AiMail01Icon,
  Facebook,
  GithubIcon,
  Linkedin02Icon,
} from "@hugeicons/core-free-icons/index";

export const ROLES = {
  ADMIN: "admin",
  CLIENT: "client",
};

export const PROJECT_STATUS = {
  NOT_STARTED: "not-started",
  PLANNING: "planning",
  IN_PROGRESS: "in_progress",
  ON_HOLD: "on_hold",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const PROJECT_STATUSES = [
  {value: "not-started", label: "Not Started"},
  {value: "planning", label: "Planning"},
  {value: "in_progress", label: "In Progress"},
  {value: "on_hold", label: "On Hold"},
  {value: "completed", label: "Completed"},
  {value: "cancelled", label: "Cancelled"},
];

export const CURRENCIES = [
  {value: "USD", label: "USD ($) - US Dollar"},
  {value: "EGP", label: "EGP (ج.م) - Egyptian Pound"},
  {value: "SAR", label: "SAR (ر.س) - Saudi Riyal"},
  {value: "AED", label: "AED (د.إ) - UAE Dirham"},
];

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
  UNAUTHORIZED: "/unauthorized",
  ADMIN_DASHBOARD: "/admin/dashboard",
  CLIENT_DASHBOARD: "/client/projects",
  NEW_PROJECT: "/admin/projects/new",
  PROJECTS: "/admin/projects",
};

// Return the appropriate dashboard route according to user role
export const getDashboardRoute = (role) => {
  return role === ROLES.ADMIN
    ? ROUTES.ADMIN_DASHBOARD
    : ROUTES.CLIENT_DASHBOARD;
};

// Kept for backward compatibility
export const DEFAULT_REDIRECTS = getDashboardRoute;

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
