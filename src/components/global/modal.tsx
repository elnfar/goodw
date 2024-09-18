'use client';

import useModal from '@/hooks/useProjectModal';

interface ProjectModalInterface {

  title: string;
  body: React.ReactElement;
  disabled?: boolean;
}

export default function Modal({
  body,
}: ProjectModalInterface) {
  
  const {isOpen} = useModal();  


  return (
    <div aria-modal className={`${isOpen ? 'fixed inset-0 flex justify-center items-center z-50 bg-black/30 backdrop-blur-sm' : 'hidden'}`}>
      {isOpen && (
       body
      )}
    </div>
  );
}
