import Link from "next/link";
import { GitMerge } from "lucide-react";
import { SiGithub } from "react-icons/si";

type NavbarProps = {
  variant?: "landing" | "app";
};

export function Navbar({
  variant = "landing",
}: NavbarProps) {
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
          max-w-7xl
          items-center
          justify-between
          overflow-hidden
          rounded-3xl
          border
          border-border/50
          bg-background/70
          px-6
          shadow-lg
          shadow-black/5
          backdrop-blur-xl
        "
      >
        {/* Glass shine */}
        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-foreground/20
            to-transparent
          "
        />


        {/* Logo */}
        <Link
          href="/"
          aria-label="Consensus AI home"
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
              bg-primary
              text-primary-foreground
              shadow-lg
              shadow-primary/20
              transition
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


        {/* Actions */}
        <div className="flex items-center gap-3">

          {variant === "landing" && (
            <>
              {/* Github */}
              <Link
                href="https://github.com"
                target="_blank"
                className="
                  hidden
                  items-center
                  gap-2
                  rounded-2xl
                  border
                  border-border/50
                  bg-background/50
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-md
                  sm:flex
                "
              >
                <SiGithub className="h-4 w-4" />

                GitHub
              </Link>


              {/* Try Consensus */}
              <Link
                href="/consensus"
                className="
                  rounded-2xl
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-primary-foreground
                  shadow-lg
                  shadow-primary/20
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                Try Consensus
              </Link>
            </>
          )}

        </div>
      </div>
    </header>
  );
}