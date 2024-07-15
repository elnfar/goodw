


import { auth } from '@/auth'

import ProjectSingle from './_components/project-single'
import { prismaClient as prisma } from '@/lib/prisma'
import ButtonClient from '@/components/global/ButtonClient'

export default async function page() {


  const session = await auth()

  
  const projects = await prisma.project.findMany({
    where: {
      //@ts-ignore
      tenantId: session?.user?.tenantId
    }
  })
  




  if(projects.length === 0) return (
     <p className='p-4 text-white text-2xl'>No project found</p>
  )

  


  return (
    <div>
      <ButtonClient title='Create'/>
      <div className='py-10'>
        {projects.map((project) => <ProjectSingle key={project.id} project={project}/>)}
      </div>
    </div>
  )
}
