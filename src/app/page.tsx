import Featured from "@/components/global/featured";
import Navbar from "@/components/global/navbar";
import { WaitList } from "@/components/ui/hero-waitlist";





const onlineUs = navigator.onLine
console.log(onlineUs);


export default async function Home() {


  


  return (
    <main className="min-h-screen">

      <Navbar/>
      <WaitList/>
      <Featured/>
    </main>
  );
}

