"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Alert02Icon, RefreshIcon} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import Link from "next/link";

export default function Error({error, reset}) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <Card className="flex w-full max-w-5xl flex-col items-center gap-4 p-8 text-center shadow-none">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
          <HugeiconsIcon icon={Alert02Icon} size={28} />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Something went wrong!
          </h2>
          <p className="text-sm font-light text-muted-foreground">
            {error?.message ||
              "An unexpected error occurred. Please try again."}
          </p>
        </div>

        <div className="flex w-full flex-wrap items-center justify-center gap-3 pt-2">
          <Button
            type="button"
            onClick={() => reset()}
            variant="default"
            className="gap-2 tracking-wider">
            <HugeiconsIcon icon={RefreshIcon} size={16} />
            Try again
          </Button>

          <Link
            href="/"
            className={
              buttonVariants({variant: "secondary"}) + " tracking-wider"
            }>
            Go to Home
          </Link>
        </div>
      </Card>
    </div>
  );
}
