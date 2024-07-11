'use client';

import createProject from "@/app/_actions/createProject"
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { MultiStepLoader } from "@/components/ui/multip-s-loader-ui";
import useProjectModal from "@/hooks/useProjectModal"
import { useCallback } from "react";
import { Form } from "react-hook-form";
const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
];

export function ProjectDialog() {

  const {isOpen, onClose} = useProjectModal();

  const handleClose = useCallback(() => {

    onClose();
  }, [isOpen, onClose]);

  return (
    // <Form {...form}>
    <div className="bg-white p-4 rounded-md">
      <div className="sm:max-w-[525px]">

        <div>
          <h1>Add your project here</h1>
          <p>
            You can add your projects in order, no worries, you will have option to edit your project later.
          </p>
        </div>
        <form className=" flex flex-col gap-4" action={createProject}>
          <div className="">
            <Input id="title" name="title" placeholder="New project" className="col-span-3" />
          </div>
          <div className="">
            <textarea id="description" name="description" placeholder="Project description" className=" w-full p-4 border focus-within:normal-case active:normal-case" rows={12} cols={48}/>
          </div>
          <div>
            <Button type="submit" variant="secondary" className="bg-zinc-800 text-white">Create</Button>
            {/* <MultiStepLoader loadingStates={loadingStates} loading /> */}
          </div>
        </form>

      </div>
    </div>
    // </Form>
  )
}
