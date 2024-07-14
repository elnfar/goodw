'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useProjectModal from '@/hooks/useProjectModal';
import { Project } from '@prisma/client';
import { CardWithForm } from '@/app/(dashboard)/projects/_components/dialog';

interface ProjectModalInterface {

  title: string;
  body: React.ReactElement;
  disabled?: boolean;
  projects: Project | Project[];
}

export default function Modal({
  title,
  body,
  disabled,
  projects,
}: ProjectModalInterface) {
  
  const { onOpen,isOpen} = useProjectModal();  

  console.log(isOpen);


  return (
    <div className={`${isOpen ? 'fixed inset-0 flex justify-center items-center z-50 bg-zinc-400/30 backdrop-blur-sm' : 'hidden'}`}
>
      {isOpen && (
       body
      )}
    </div>
  );
}
