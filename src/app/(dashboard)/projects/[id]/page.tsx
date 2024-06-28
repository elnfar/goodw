
import { CustomKanban } from '@/components/global/dnd';
import { prismaClient as prisma } from '@/lib/prisma'
import { IssueDialog } from '../_components/create-issue-dialog';
import { auth } from '@/auth';

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

    console.log(issues);

    
    const users = await prisma.user.findMany({
        where: {
            //@ts-ignore
            tenantId: user?.user?.tenant.id
        }
    })
    

  return (
    <div>
        <CustomKanban issues={issues} projectId={params.id} users={users}/>
    </div>
  )
}
