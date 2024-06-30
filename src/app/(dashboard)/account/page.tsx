import { auth } from '@/auth'
import { Button } from '@/components/ui/button';
import { prismaClient } from '@/lib/prisma';
import { Activity, Idle } from '@prisma/client';
import React from 'react'
import IdleSelect from './IdleSelect';
import { ActivityDuration } from './duration';




export default async function page() {
  const user = await auth();

  // @ts-ignore
  if (!user.user.id || !user.user.tenant.id) {
    throw new Error('User or tenant information is missing');
  }

  async function startWorking(data:FormData) {
    'use server';

    if(!user?.user?.id) {
      throw new Error('User or tenant information is missing');
    }

    await prismaClient.activity.create({
      data: {
        userId: user.user.id,
        // @ts-ignore
        tenantId: user?.user?.tenant.id,
        idle: Idle.NOT_WORKING,
        startTime: new Date(),
      }
    })
  }


 const userIdleActivity = await prismaClient.activity.findFirst({
    where: {
      userId:user?.user?.id,
      endTime: null,
    }
 })

  

  return (
    <div className='px-4 py-12'>

      {!userIdleActivity?.startTime && (
        <form action={startWorking}>
            <Button variant="outline" className='text-white' type='submit'>Start shift</Button>
        </form>
      )}
        
        <div>
          <IdleSelect userIdleActivity={userIdleActivity!}/>
        </div>

        <ActivityDuration startAt={userIdleActivity!.startTime}/>

    </div>
  )
}


