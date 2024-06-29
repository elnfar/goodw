import { Button } from '@/components/ui/button'
import React from 'react'
import { ProjectDialog } from './_components/dialog'


import { auth } from '@/auth'
import { revalidatePath } from 'next/cache'

import ProjectSingle from './_components/project-single'
import { prismaClient as prisma } from '@/lib/prisma'
import ProjectNavbar from './_components/project-nav'

export default async function page() {


  const user = await auth()

  
  const projects = await prisma.project.findMany({
    where: {
      //@ts-ignore
      tenantId: user?.user?.tenant.id
    }
  })
  


  return (
    <div>

      <div className='py-10'>
        {projects.map((project) => <ProjectSingle key={project.id} project={project}/>)}
      </div>

    </div>
  )
}
