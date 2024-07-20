import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'
import { prismaClient } from '../prisma';

export default async function AuthenticationWrapper({children}:{
    children:ReactNode
}) {

    const sessionUser = await auth();
    const environment = process.env.NEXT_PUBLIC_URL

    console.log(environment);
    

    if(!sessionUser) {
        redirect(`${environment}/api/auth/signin`)
    }

    const user = await prismaClient.user.findUnique({
        where:{
            id:sessionUser?.user?.id,
        },
        include:{
            tenant:true
        }
    })

    const projects = await prismaClient.project.findMany({
        where: {
            //@ts-ignore
            tenantId:sessionUser?.user.tenantId
        }
    })

    if(user?.isOnboarded === false) {
        redirect(`${environment}/onboarding`)
    }



    // if(user?.isOnboarded) {
    //     redirect(`${environment}/${user.tenant.name}/dashboard`)
    // } 


    
    // if(projects.length > 0)  redirect('https://goodw.vercel.app/dashboard');

    // if(usr!.role === "OWNER") {
    //     redirect('https://goodw.vercel.app/onboarding');
    // }
    


  return <>{children}</>
}
