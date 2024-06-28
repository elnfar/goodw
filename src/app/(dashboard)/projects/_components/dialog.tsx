import createProject from "@/app/_actions/createProject"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function ProjectDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="">Add project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">

        <DialogHeader>
          <DialogTitle>Add your project here</DialogTitle>
          <DialogDescription>
            You can add your projects in order, no worries, you will have option to edit your project later.
          </DialogDescription>
        </DialogHeader>
        <form className=" flex flex-col gap-4" action={createProject}>
          <div className="">
            <Input id="title" name="title" placeholder="New project" className="col-span-3" />
          </div>
          <div className="">
            <textarea id="description" name="description" placeholder="Project description" className=" w-full p-4 border focus-within:normal-case active:normal-case" rows={12} cols={48}/>
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
