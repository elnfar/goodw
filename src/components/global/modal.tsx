'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useProjectModal from '@/hooks/useProjectModal';
import { Project } from '@prisma/client';
import { ProjectDialog } from '@/app/(dashboard)/projects/_components/dialog';

interface ProjectModalInterface {

  title: string;
  body: React.ReactElement;
  disabled?: boolean;
  projects: Project[];
}

export default function ProjectModal({
  title,
  body,
  disabled,
  projects,
}: ProjectModalInterface) {
  
  const { onOpen,isOpen,onClose } = useProjectModal();
  // const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (projects.length === 0) {
      onOpen();
    }
    // setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;
    // setShowModal(false);
    onClose();
  }, [disabled, onClose]);

  console.log(isOpen);
  

  return (
    <>
      {isOpen && (
       body
      )}
    </>
  );
}
