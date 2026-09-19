import {ModeToggle} from "@/components/ModeToggle";
import {buttonVariants} from "@/components/ui/button";
import LogoutBtn from "@/features/auth/LogoutBtn";
import {ROUTES} from "@/lib/constants";
import {Home} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import Link from "next/link";

function AppHeader() {
  return (
    <header
      className="sticky top-0 z-30 h-16 border-b border-border/80 px-4 md:px-6 
        flex items-center justify-between bg-background/80 backdrop-blur-md">
      <div className="flex items-center ml-auto gap-4">
        <Link
          href={ROUTES.HOME}
          className={buttonVariants({size: "icon", variant: "secondary"})}>
          <HugeiconsIcon icon={Home} />
        </Link>
        <ModeToggle />
        <LogoutBtn />
      </div>
    </header>
  );
}

export default AppHeader;
