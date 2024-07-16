'use client';

import createProject from "@/app/_actions/createProject"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useProjectModal from "@/hooks/useProjectModal"
import { useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

// export function ProjectDialog() {


//   return (
//     // <Form {...form}>
//     <div className="bg-white p-4 rounded-md">
//       <div className="sm:max-w-[525px]">

//         <div>
//           <h1>Add your project here</h1>
//           <p>
//             You can add your projects in order, no worries, you will have option to edit your project later.
//           </p>
//         </div>
//         <form className=" flex flex-col gap-4" action={createProject}>
//           <div className="">
//             <Input id="title" name="title" placeholder="New project" className="col-span-3" />
//           </div>
//           <div className="">
//             <textarea id="description" name="description" placeholder="Project description" className=" w-full p-4 border focus-within:normal-case active:normal-case" rows={12} cols={48}/>
//           </div>
//           <div>
//             <Button type="submit" variant="secondary" className="bg-zinc-800 text-white">Create</Button>
//             {/* <MultiStepLoader loadingStates={loadingStates} loading /> */}
//           </div>
//         </form>

//       </div>
//     </div>
//     // </Form>
//   )
// }






export function CardWithForm() {

  const router = useRouter();

  const {onClose} = useProjectModal()


  async function onCreate(data:FormData) {

    await createProject(data);

    router.push("/projects")
    router.refresh();
    onClose();
  }


  
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create a project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <form action={onCreate}>
      <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="industry">Industry</Label>
              <Select name="industry" required>
                <SelectTrigger id="industry">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="IT">IT</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Customer Service">Customer Service</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">Create</Button>
        <Button type="button" onClick={onClose}>Cancel</Button>
      </CardFooter>
      </form>
    </Card>
  )
}
