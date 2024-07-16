


import { auth } from '@/auth'

import ProjectSingle from './_components/project-single'
import { prismaClient as prisma } from '@/lib/prisma'
import ButtonClient from '@/components/global/ButtonClient'

export default async function page() {


  const session = await auth()

  console.log(session?.expires);
  

  
  const projects = await prisma.project.findMany({
    where: {
      //@ts-ignore
      tenantId: session?.user?.tenant.id
    }
  })
  




  if(projects.length === 0) return (
    <div className='px-8 py-12 space-y-4'> 
      <p className=' text-white text-2xl'>No project found</p>
      <ButtonClient title='create'/>
     </div>
  )

  


  return (
    <div>
      <div className='py-10'>
        {projects.map((project) => <ProjectSingle key={project.id} project={project}/>)}
      </div>
    </div>
  )
}
