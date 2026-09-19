import {ModeToggle} from "@/components/ModeToggle";
import {buttonVariants} from "@/components/ui/button";
import {getDashboardRoute, ROUTES} from "@/lib/constants";
import Link from "next/link";
import MobileNav from "./MobileNav";

function Nav({profile}) {
  const navLinks = [
    {title: "Home", href: ROUTES.HOME},
    {title: "Works", href: ROUTES.WORKS},
    profile
      ? {
          title: "Dashboard",
          href: getDashboardRoute(profile?.role),
        }
      : {title: "Login", href: ROUTES.LOGIN},
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center justify-end gap-2">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              className={
                buttonVariants({
                  variant: "ghost",
                  size: "lg",
                }) + " tracking-wider"
              }
              href={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block">
        <Link
          href={ROUTES.CONTACT}
          className={
            buttonVariants({
              variant: "default",
              size: "lg",
            }) + " tracking-wider"
          }>
          Contact Me
        </Link>
      </div>

      <div>
        <ModeToggle />
      </div>

      <MobileNav navLinks={navLinks} />
    </div>
  );
}

export default Nav;
