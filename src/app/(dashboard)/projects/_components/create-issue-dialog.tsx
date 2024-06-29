import createIssue from "@/app/_actions/createIssue"
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
import { IssueCategory, User } from "@prisma/client"




export function IssueDialog({ projectId,users }:{
    projectId:string,
    users:User[]
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="">Add issue</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white">

        <DialogHeader>
          <DialogTitle>Add your issue here</DialogTitle>
          <DialogDescription>
            You can add your issues in order, no worries, you will have option to edit your project later.
          </DialogDescription>
        </DialogHeader>
        <form className=" flex flex-col gap-4" action={createIssue}>
          <div className="">
            <Input id="title" name="title" placeholder="New project" className="col-span-3" />
          </div>

          <div className="">
            <Input id="projectId" type="hidden" name="projectId" value={projectId}/>
          </div>
          <div className="">
            <textarea id="description" name="description" placeholder="Project description" className=" w-full p-4 border focus-within:normal-case active:normal-case" rows={12} cols={48}/>
          </div>

          <select name="userId" id="userId" className="mt-2">
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name || user.email} 
                </option>
              ))}
            </select>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>

      </DialogContent>
    </Dialog>
  )
}
