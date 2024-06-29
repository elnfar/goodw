import React from 'react'
import { IssueDialog } from './create-issue-dialog'
import { Issue, Project, User } from '@prisma/client'
import { Layers } from 'lucide-react'

export default function ProjectNavbar({ issues,projectId, users, projects }: { issues: Issue[],projectId:string, users:User[], projects:Project | null }) {
  return (
    <nav className='py-4 px-4'>
        <div className='flex justify-between items-center'>
            <div className='flex gap-x-5 text-[rgb(95,95,95)]'>
                <h3 className='lowercase'>{projects?.name}</h3>

                
                <div className='flex gap-x-2 items-center'><Layers /> <span className=''>Issues {issues.length}</span></div>
            </div>
            <IssueDialog projectId={projectId} users={users}/>
        </div>

    </nav>
  )
}
