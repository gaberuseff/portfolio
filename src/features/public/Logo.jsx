import {EMAIL} from "@/lib/constants";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex flex-col">
      <p className="w-fit text-base tracking-wider text-foreground ">
        Gaber Usef
      </p>
      <a
        href={`mailto:${EMAIL}`}
        className="w-fit text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors">
        {EMAIL}
      </a>
    </div>
  );
}

export default Logo;
