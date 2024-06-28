import { auth } from '@/auth'
import { Sidebar } from '@/components/global/sidebar'
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import React, { ReactNode } from 'react'



export default async function DashboardLayout({children}:{
    children:ReactNode
}) {


  const session = await auth();



  return (
    <div className=' bg-[rgb(25,25,25)]'>
      <div className='flex justify-between'>
        <div className='overflow-y-scroll h-screen w-24'>
          <Sidebar session={session}/>
        </div>
        
          <div className='h-screen w-full px-4'>
            {/* <div className=' flex justify-end'>{!session ? <SignIn/> : <SignOut/>} </div>  */}
            {children}
          </div>
      </div>
    </div>
  )
}
