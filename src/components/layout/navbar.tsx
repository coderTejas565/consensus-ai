import Link from "next/link";

import { ThemeToggle } from "@/components/shared/theme-toggle";


export function Navbar() {

  return (
    <header
      className="
        sticky
        top-0
        z-50
        px-4
        pt-4
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
          border-border/60
          bg-background/70
          px-6
          shadow-sm
          backdrop-blur-xl
          transition-all
        "
      >

        <Link
          href="/"
          className="
            flex
            items-center
            gap-2
            font-heading
            text-xl
            font-semibold
            tracking-tight
          "
        >

          <span
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-primary
              text-sm
              text-primary-foreground
            "
          >
            ✦
          </span>


          Consensus AI

        </Link>



        <ThemeToggle />

      </div>

    </header>
  );
}