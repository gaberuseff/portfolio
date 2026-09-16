import {SOCIAL_LINKS} from "@/lib/constants";
import {HugeiconsIcon} from "@hugeicons/react";

function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-6 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>Gaber Usef | Web Developer.</p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Gaber Usef on ${link.label}`}
              className="text-muted-foreground hover:text-foreground transition-colors">
              <HugeiconsIcon icon={link.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
