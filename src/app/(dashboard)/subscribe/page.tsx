import React from 'react'
import Component from './component'
import { PrismaClient } from '@prisma/client'
import { currentUser } from '@clerk/nextjs/server';


const prismaClient = new PrismaClient();

export default async function page() {

    const userClerk = await currentUser();
    
    
    
  return (
    <Component />
  )
}
