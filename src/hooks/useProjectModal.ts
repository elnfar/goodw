import { create } from 'zustand'


interface Modal {
    isOpen:boolean;
    onOpen:() => void;
    onClose:() => void;
}

const useModal = create<Modal>((set) => ({
  isOpen:false,
  onToggle:() => set((state) => ({isOpen:!state.isOpen})),
  onOpen:() => set({isOpen:true}),
  onClose:() => set({isOpen:false})
}))

export default useModal;