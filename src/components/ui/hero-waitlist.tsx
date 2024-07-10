import { BackgroundBeams } from "./background-bims";

export function WaitList() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            You do not need Jira to manage your tasks and users
        </h1>



        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Create your projects, invite your users & team members and manage your work effectively for free!
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
