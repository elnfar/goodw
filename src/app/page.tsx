
import Navbar from "@/components/global/navbar";
import Link from "next/link";
import React, { useState } from "react"; 
import axios from 'axios';
import { WaitList } from "@/components/ui/hero-waitlist";
import { auth } from "@/auth";






export default async function Home() {


  


  return (
    <>
      <Navbar/>
      <WaitList/>

      {/* <form onSubmit={onSubmit}>
        <input type="text" value={state.content}/>
        <input type="text" value={state.title}/>

        <button type="submit">Submit</button>
      </form> */}
    </>
  );
}

// export function HeroBackground() {
//   return (
//     <>
//     <div className="flex md:items-center justify-center min-h-screen">
//     <Spotlight
//         className="-top-40 left-0 md:-top-20"
//         fill="white"
//       />
//       <div className="flex items-center justify-between gap-12">

//       <div className="max-w-5xl relative z-10  w-full pt-20 md:pt-0 space-y-4">
//         <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
//           Show a fancy loading <br /> screen to your users!
//         </h1>
//         <p className="mt-4 font-normal text-neutral-300 max-w-lg">
//           Find tons of placeholders, loading icons, skeletons for your application without wasting your time.
//         </p>

//         <div className="space-x-4">
//           <Button asChild variant="secondary" className="bg-white rounded-full hover:bg-gray-400"><Link href="/"> Get started</Link></Button>
//           <Button variant="secondary" className="bg-black border text-white rounded-full hover:bg-gray-400"><Link href="/components">Components</Link></Button>
//         </div>      
//       </div>
    

//       </div>
//     </div>
//     </>  
//   );
// }











// function RevealSkeleton() {
//   return (
//     <div className="flex items-center space-x-4">
//             <Skeleton className="h-12 w-12 rounded-full bg-black/20" />
//             <div className="space-y-2">
//               <Skeleton className="h-4 w-[450px] bg-zinc-800" />
//               <Skeleton className="h-4 w-[200px] bg-zinc-800" />
//             </div>
//        </div>
//   )
// }



// function StaticText(){
//   return (
//     <div className="flex items-center space-x-4">
//             <div>
//             <Avatar>
//               <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar>
//             </div>
//             <div className="space-y-2">
//               <div className="h-4 w-[450px] bg-gray-400" ></div>
//               <div className="h-4 w-[200px] bg-gray-400" />
//             </div>
//        </div>
//   )
// }