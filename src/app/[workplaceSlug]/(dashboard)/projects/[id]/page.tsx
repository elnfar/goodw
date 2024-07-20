
import { CustomKanban } from '@/components/global/dnd';
import { prismaClient as prisma } from '@/lib/prisma'
import { auth } from '@/auth';
import ProjectNavbar from '../_components/project-nav';
import Modal from '@/components/global/modal';
import { IssueDialog } from '../_components/create-issue-dialog';
import ButtonClient from '@/components/global/ButtonClient';



export default async function page({params}:{
    params: {
        id:string
    }
}) {

    const user = await auth();

    const issues = await prisma.issue.findMany({
        where: {
            projectId:params.id
        }
    })

    
    const users = await prisma.user.findMany({
        where: {
            //@ts-ignore
            tenantId: user?.user?.tenant.id
        },
    })

      
  const projects = await prisma.project.findUnique({
    where: {
      //@ts-ignore
      tenantId: user!.user!.tenant.id,
      id:params.id
    }
  })


    if(!projects) {
      return "No project found"
    }

  return (
    <div className='py-4 px-4'>
        {/* <ProjectNavbar issues={issues} projectId={projects.id}/> */}
          <Modal
          title='Add issue'
          disabled
          projects={projects!}
          body={<IssueDialog projectId={projects.id} users={users || []}/>}
          />
        <CustomKanban issues={issues} projectId={params.id} users={users} projects={projects}/>
    </div>
  )
}
