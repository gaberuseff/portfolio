"use client";

import {useTheme} from "next-themes";

import {Button} from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Moon02Icon, Sun01Icon} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";

export function ModeToggle() {
  const {setTheme} = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HugeiconsIcon
            icon={Sun01Icon}
            className="transition-all duration-500"
          />
          <HugeiconsIcon
            icon={Moon02Icon}
            className="absolute scale-0 rotate-90 dark:scale-100 dark:rotate-0 transition-all duration-500"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
