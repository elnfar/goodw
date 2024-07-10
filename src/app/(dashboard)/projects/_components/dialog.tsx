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
    <div>

      <div className="sm:max-w-[525px] ">

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
            <Button type="submit">Create</Button>
          </div>
        </form>

      </div>
    </div>
  )
}
