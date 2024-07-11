'use client';

// ProjectNavbar.tsx
import React from 'react';
import useProjectModal from '@/hooks/useProjectModal'; // Adjust path as needed
import ProjectModal from '@/components/global/modal';
import { Issue, Project } from '@prisma/client';
import { User } from 'next-auth';

export default function ProjectNavbar({ issues, projectId, users, projects }: { issues?: Issue[], projectId?: string, users?: User[], projects?: Project | null }) {
  const { onOpen, isOpen } = useProjectModal(); // Access onOpen from Zustand store

  
  if(!projects) {
    return () => onOpen();
  }

  console.log(isOpen);
  

  return (
    <nav className='py-4 px-4'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-x-5 text-[rgb(95,95,95)]'>
          <h3 className='lowercase'>{projects?.name}</h3>
          <div className='flex gap-x-2 items-center'>
            <span>Issues {issues?.length}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
