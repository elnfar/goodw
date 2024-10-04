import Link from "next/link";
import { Button } from "../components/ui/button";
import { Spotlight } from "../components/ui/spotlight";

export function WaitList() {
  return (
    <div className="relative isolate overflow-hidden bg-black ">
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/10 antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full stroke-white/20 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div
          aria-hidden="true"
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-5xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Light weight and easy to use Jira alternative for managing your
              work and team.
            </h1>
            <p className="py-4 font-normal text-sm text-neutral-600 max-w-lg text-center mx-auto">
              Easy to use Open source solution to manage invite your team
              members, manage your goals and keep your targets within the
              budget.
            </p>

            <div className=" flex items-center justify-center pt-4 gap-x-4">
              <Button
                asChild
                variant="outline"
                className="text-white border-gray-700"
              >
                <a target="_blank" href={`https://app.siizz.xyz`}>
                  Get started
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-gray-700"
              >
                <Link href="/about/onboarding">How it works</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
