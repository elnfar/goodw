import { Project } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

export default function ProjectSingle({project}:{
    project:Project
}) {
  return (
    <Link href={`/projects/${project.id}`} className='w-[300px] h-[150px] bg-[rgb(25,25,25)] p-5 text-white block'>
        <div >
        {project.name}
        </div>

        <div>
            {project.industry}
        </div>
    </Link>
  )
}
