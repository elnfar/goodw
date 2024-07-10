


import { auth } from '@/auth'

import ProjectSingle from './_components/project-single'
import { prismaClient as prisma } from '@/lib/prisma'
import ProjectNavbar from './_components/project-nav'
import ProjectModal from '@/components/global/modal'
import { ProjectDialog } from './_components/dialog'

export default async function page() {


  const user = await auth()

  
  const projects = await prisma.project.findMany({
    where: {
      //@ts-ignore
      tenantId: user?.user?.tenant.id
    }
  })
  
  console.log(projects,'PR');
  


  return (
    <div>
        {/* <ProjectNavbar /> */}

        <ProjectModal
        title='Example Modal'
        projects={projects}
        body={<ProjectDialog/>}
      />  
      <div className='py-10'>
        {projects.map((project) => <ProjectSingle key={project.id} project={project}/>)}
      </div>


    </div>
  )
}
