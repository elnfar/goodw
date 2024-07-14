import getUser from '@/app/_actions/onUser';
import { auth } from '@/auth';
import { signOut } from '@/auth/helper';
import ProjectModal from '@/components/global/modal';
import { MultiStepLoaderDemo } from '@/components/global/multi-step-loader';
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import useProjectModal from '@/hooks/useProjectModal';
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
const prisma = new PrismaClient().$extends(withAccelerate())

interface UserSession {
  name: string;
  email: string;
  image: string | null;
  id: string;
  tenant: {
    id: string;
  };
}





export default async function page() {

  const session = await auth()
  let currentTime = new Date();

  console.log(currentTime.getHours());
  
  


  if(!session) return "User session is empty/dashboard error"

  const team = await prisma.tenant.findFirst({
    where: {
      id: (session.user as UserSession).tenant.id,
    },
    include:{
      users:true,
      issues:true,
      projects:true
    },
  })


  const DONE = team?.issues.map((item) => item.category === "DONE")



  const greeting = greetUser({name: session.user?.name});
  

  const stats = [
    { name: 'Issues', value: team?.issues.length },
    { name: 'Issues Done', value: DONE?.length, },
    { name: 'Number of servers', value: '3' },
    { name: 'Success rate', value: '98.5%' },
  ]
  


  return (
    <main className=''>



    <div className="py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.name} className="px-4 py-6 sm:px-6 lg:px-8 bg-zinc-800">
              <p className="text-sm font-medium leading-6 text-gray-400">{stat.name}</p>
              <p className="mt-2 flex items-baseline gap-x-2">
                <span className="text-4xl font-semibold tracking-tight text-white">{stat.value}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </main>
  );
}



function greetUser({name}:{
  name?:string | null
}) {

  const now = new Date();

  const hours = now.getHours();

  if(hours >= 0 && hours < 6) {
    return `Good night ${name}`
  }else {
    return `Good day ${name}`
  }

}

