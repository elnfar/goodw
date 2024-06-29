
import { CustomKanban } from '@/components/global/dnd';
import { prismaClient as prisma } from '@/lib/prisma'
import { IssueDialog } from '../_components/create-issue-dialog';
import { auth } from '@/auth';
import ProjectNavbar from '../_components/project-nav';

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


    

  return (
    <div>
        {/* <ProjectNavbar/> */}
        <CustomKanban issues={issues} projectId={params.id} users={users} projects={projects}/>
    </div>
  )
}
