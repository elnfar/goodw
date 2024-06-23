import { Sidebar } from '@/components/global/sidebar'
import React, { ReactNode } from 'react'

export default function DashboardLayout({children}:{
    children:ReactNode
}) {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='overflow-y-scroll h-screen w-24'>
          <Sidebar/>
        </div>

          <div className='h-screen bg-white w-full'>{children}</div>
      </div>
    </div>
  )
}
