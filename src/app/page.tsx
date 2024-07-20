import Featured from "@/components/global/featured";
import Navbar from "@/components/global/navbar";
import { WaitList } from "./hero-waitlist";




export default function page() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <WaitList />
      <Featured/>
    </main>
  );
}

