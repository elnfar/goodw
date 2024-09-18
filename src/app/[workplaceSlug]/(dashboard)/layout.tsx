import { auth } from '@/auth'
import { Sidebar } from '@/components/global/sidebar'

import { prismaClient } from '@/lib/prisma';
import React, { ReactNode } from 'react'
import { CardWithForm } from './projects/_components/dialog';
import Modal from '@/components/global/modal';
import AuthenticationWrapper from '@/lib/wrappers/auth-wrapper';




export default async function DashboardLayout({children, params}:{
    children:ReactNode,
    params: { workplaceSlug: string };
}) {

  const { workplaceSlug } = params




  const session = await auth();

  const userIdleActivity = await prismaClient.activity.findFirst({
    where: {
      userId: session?.user?.id,
      endTime: null,
    },
    select:{
      idle:true
    }
 })

 const projects = await prismaClient.project.findMany({
  where: {
    //@ts-ignore
    tenantId:session?.user?.tenant.id
  }
 })


 


  return (
    <AuthenticationWrapper>
    <div className=' bg-[rgb(25,25,25)]'>
      <div className='flex justify-between'>
        <div className='overflow-y-scroll h-screen w-24'>
          <Sidebar workplaceSlug={workplaceSlug} session={session!} idle={userIdleActivity?.idle!}/>
        </div>
        
          <div className='h-screen w-full px-4'>
            <Modal
            title='New project'
            disabled
            body={<CardWithForm/>}
            />
            {children}
          </div>
      </div>
    </div>
    </AuthenticationWrapper>
  )
}


