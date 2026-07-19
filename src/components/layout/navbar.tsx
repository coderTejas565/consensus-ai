import Link from "next/link";
import { GitMerge } from "lucide-react";

import { ThemeToggle } from "@/components/shared/theme-toggle";

export function Navbar() {
  return (
    <header
      className="
        sticky
        top-0
        z-50
        px-4
        pt-5
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-5xl
          items-center
          justify-between
          rounded-2xl
          border
          border-border/40
          bg-background/70
          px-6
          shadow-lg
          shadow-black/5
          transition-all
          duration-200
          supports-[backdrop-filter]:backdrop-blur-xl
        "
      >
        <Link
          href="/"
          aria-label="Go to home page"
          className="
            group
            flex
            items-center
            gap-3
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-primary/90
              text-primary-foreground
              ring-1
              ring-primary/20
              shadow-md
              shadow-black/5
              transition-transform
              duration-200
              group-hover:scale-105
            "
          >
            <GitMerge className="h-4 w-4" />
          </span>

          <div className="leading-none">
            <p
              className="
                font-heading
                text-lg
                font-semibold
                tracking-tight
              "
            >
              Consensus AI
            </p>

            <p
              className="
                hidden
                text-xs
                text-muted-foreground
                sm:block
              "
            >
              Multiple perspectives
            </p>
          </div>
        </Link>

        <ThemeToggle />
      </div>
    </header>
  );
}