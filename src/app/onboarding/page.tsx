

import OnboardingClient from './_components/onboarding-client'
import { auth } from '@/auth'
import { prismaClient } from '@/lib/prisma';
import { redirect } from 'next/navigation';

export default async function page() {


   const session = await auth();


  const user = await prismaClient.user.findUnique({
    where:{
      id:session?.user?.id,
    },
    include: {
      tenant:true
    }
  })

  if(user?.isOnboarded) redirect(`/${user.tenant.name}/dashboard`);
  

  
  return (
    <div>
       <OnboardingClient />
      </div>
  )
}
