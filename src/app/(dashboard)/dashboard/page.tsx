import getUser from '@/app/_actions/onUser';
import { auth } from '@/auth';
import { signOut } from '@/auth/helper';
import ProjectModal from '@/components/global/modal';
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
      users:true
    }
  })

  

  const greeting = greetUser({name: session.user?.name});
  



  return (
    <main className=''>


    <div className=' max-w-6xl mx-auto'>



      <div>{greeting}</div>

      {/* <SignOut/> */}
      <p className='text-2xl underline'>Signed in user {session?.user?.email}</p>
      

        <div>
          <p className='text-4xl'>Current team name: {team?.name}</p>

          <p>
          Team members:
           <span className=' block font-bold'>{team?.users.map((item) => <p key={item.id}>{item.name}</p>)}</span>
          </p>
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

