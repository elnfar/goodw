import getUser from '@/app/_actions/onUser';
import { auth } from '@/auth';
import { signOut } from '@/auth/helper';
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
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


  if(!session) return "User session is empty/dashboard error"

  const team = await prisma.tenant.findFirst({
    where: {
      id: (session.user as UserSession).tenant.id,
    },
    include:{
      users:true
    }
  })

  



  return (
    <main className=''>

    <div className=' max-w-6xl mx-auto'>
      

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