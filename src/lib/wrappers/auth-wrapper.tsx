import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import { ReactNode } from 'react'
import { prismaClient } from '../prisma';

export default async function AuthenticationWrapper({children}:{
    children:ReactNode
}) {


    const sessionUser = await auth();

    if(!sessionUser) {
        redirect('https://goodw.vercel.app/api/auth/signin')
    }

    const usr = await prismaClient.user.findUnique({
        where:{
            id:sessionUser?.user?.id
        }
    })

    const projects = await prismaClient.project.findMany({
        where: {
            //@ts-ignore
            tenantId:sessionUser?.user.tenantId
        }
    })

    if(projects.length > 0)  redirect('https://goodw.vercel.app/dashboard');

    if(usr?.role !== "OWNER") {
        redirect('https://goodw.vercel.app/onboarding');
    }
    



  return <>{children}</>
}
