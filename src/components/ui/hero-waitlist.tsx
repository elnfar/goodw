import React from "react";
import { BackgroundBeams } from "./background-bims";
import { Input } from "./input";
import { Button } from "./button";
import Component from "@/app/(dashboard)/subscribe/component";

export function WaitList() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 space-y-6">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join my newsletter
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Join our newsletter, we will teach you all you need to be at top 1%. You will receive tips, tricks and daily news.
        </p>

        <Component/>
      </div>
      <BackgroundBeams />
    </div>
  );
}
