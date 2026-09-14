"use client";

import {ArrowLeftDoubleIcon} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import {useRouter} from "next/navigation";
import {Button} from "./ui/button";

function BackBtn({children, className, ...props}) {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.back()} variant="outline" {...props}>
        <HugeiconsIcon icon={ArrowLeftDoubleIcon} size={24} />
        {children}
      </Button>
    </div>
  );
}

export default BackBtn;
