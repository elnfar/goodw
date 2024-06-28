'use server'

import { auth } from "@/auth";
import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
import { revalidatePath } from "next/cache";
const prisma = new PrismaClient().$extends(withAccelerate())

export default async function createProject(data: FormData) {
    console.log('Project', data)
    const user = await auth();

    if(!user) return "User must be exist"

    const name = data.get('title') as string
    const description = data.get('description') as string

    const project = await prisma.project.create({
      data: {
        //@ts-ignore
        tenantId: user?.user?.tenant.id,
        name,
        description
      }
    })
    
    revalidatePath(`/projects`)
  }
