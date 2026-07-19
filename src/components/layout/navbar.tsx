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
          relative
          mx-auto
          flex
          h-[68px]
          max-w-5xl
          items-center
          justify-between
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-background/55
          px-6
          shadow-xl
          shadow-black/5
          ring-1
          ring-black/5
          supports-[backdrop-filter]:backdrop-blur-2xl
        "
      >
        {/* subtle highlight */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
            dark:via-white/10
          "
        />

        <Link
          href="/"
          aria-label="Go to home page"
          className="
            group
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              relative
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-primary
              to-primary/80
              text-primary-foreground
              shadow-lg
              shadow-primary/20
              transition-all
              duration-300
              group-hover:-translate-y-0.5
              group-hover:shadow-xl
            "
          >
            <div
              className="
                absolute
                inset-0
                rounded-2xl
                ring-1
                ring-white/20
              "
            />

            <GitMerge className="relative h-5 w-5" />
          </div>

          <div className="leading-none">
            <h1
              className="
                font-heading
                text-[18px]
                font-semibold
                tracking-tight
              "
            >
              Consensus AI
            </h1>

            <p
              className="
                hidden
                pt-1
                text-xs
                font-medium
                tracking-wide
                text-muted-foreground
                sm:block
              "
            >
              Multiple AI perspectives
            </p>
          </div>
        </Link>

        <div
          className="
            rounded-xl
            border
            border-border/50
            bg-background/60
            p-1
            backdrop-blur
          "
        >
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}