"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Menu, X, ArrowUpRight, Sparkles} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";
import {NAV_LINKS, SOCIAL_LINKS, EMAIL} from "@/lib/constants";
import {HugeiconsIcon} from "@hugeicons/react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden flex items-center">
      <Drawer
        open={open}
        onOpenChange={setOpen}
        showSwipeHandle={true}
        swipeDirection="down">
        <DrawerTrigger
          className="relative flex items-center justify-center w-10 h-10 rounded-full border border-border/70 bg-background/80 backdrop-blur-md text-foreground hover:bg-accent hover:border-primary/40 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
          aria-label="Open navigation menu">
          <Menu className="w-5 h-5" />
        </DrawerTrigger>

        <DrawerContent className="px-6 pt-4 pb-8 max-h-[85vh]">
          {/* Header */}
          <DrawerHeader className="text-start p-0 pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <DrawerTitle className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  Navigation
                </DrawerTitle>
              </div>
              <DrawerClose
                className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Close menu">
                <X className="w-5 h-5" />
              </DrawerClose>
            </div>
            <DrawerDescription className="sr-only">
              Mobile navigation drawer
            </DrawerDescription>
          </DrawerHeader>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 py-4">
            {NAV_LINKS.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between py-3 px-4 rounded-2xl transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-foreground/80 hover:bg-accent hover:text-foreground"
                  }`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-muted-foreground/70 group-hover:text-primary transition-colors">
                      0{index + 1}.
                    </span>
                    <span className="text-2xl font-semibold tracking-tight">
                      {link.title}
                    </span>
                  </div>
                  <ArrowUpRight
                    className={`w-5 h-5 transition-all duration-200 ${
                      isActive
                        ? "text-primary opacity-100"
                        : "opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action CTA Button */}
          <div className="pt-2 pb-4">
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className={
                buttonVariants({
                  variant: "default",
                  size: "lg",
                }) +
                " w-full justify-center text-base tracking-wider py-6 shadow-md shadow-primary/20 rounded-xl cursor-pointer"
              }>
              <Sparkles className="w-4 h-4 mr-2" />
              Get in Touch
            </Link>
          </div>

          {/* Footer: Social links & Email */}
          <DrawerFooter className="p-0 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between w-full">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                Connect
              </span>
              <a
                href={`mailto:${EMAIL}`}
                className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                {EMAIL}
              </a>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-xl border border-border/60 bg-muted/40 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 cursor-pointer">
                  <HugeiconsIcon icon={link.icon} size={18} />
                </a>
              ))}
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
