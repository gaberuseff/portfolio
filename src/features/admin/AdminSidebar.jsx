"use client";

import {buttonVariants} from "@/components/ui/button";
import {ROUTES} from "@/lib/constants";
import {Folder, Home} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import {cn} from "cn";
import Link from "next/link";
import {usePathname} from "next/navigation";

const navItems = [
  {
    href: ROUTES.ADMIN_DASHBOARD,
    icon: Home,
    title: "Dashboard",
  },
  {
    href: ROUTES.PROJECTS,
    icon: Folder,
    title: "Projects",
  },
];

function AdminSidebar() {
  const pathname = usePathname();

  return (
    <nav className="w-18 border-r p-3 flex flex-col items-center gap-3">
      {navItems.map((item) => {
        const isActive =
          item.href === ROUTES.ADMIN_DASHBOARD
            ? pathname === item.href
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            title={item.title}
            className={cn(
              buttonVariants({
                variant: isActive ? "default" : "ghost",
                size: "icon",
              }),
              "size-12",
            )}>
            <HugeiconsIcon icon={item.icon} size={24} className="size-6" />
          </Link>
        );
      })}
    </nav>
  );
}

export default AdminSidebar;
