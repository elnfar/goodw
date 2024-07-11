'use server'

import { auth } from "@/auth";
import { ProjectSchema } from "@/lib/project.type";
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient().$extends(withAccelerate())


 

export default async function createProject(data: FormData) {
    const user = await auth();

    if(!user) return "User must be exist"


    const validatedFields = ProjectSchema.safeParse({
      name:data.get('title') as string,
      description:data.get('description') as string
    })


    if(!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      }
    }

    

    const project = await prisma.project.create({
      data: {
        //@ts-ignore
        tenantId: user?.user?.tenant.id,
        name:validatedFields.data.name,
        description:validatedFields.data.description
      }
    })
    
    revalidatePath(`/`)
  }
