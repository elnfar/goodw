'use server'
import { RedirectToSignIn } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server"
import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

const client = new PrismaClient();

export const getSessionUser = async () => {


    try
     {

    
    const user = await currentUser()

    if(!user) {
        return
    }
}catch(err) {
    return err
}

  }