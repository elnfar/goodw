'use client';


import React from 'react'
import { Button } from '../ui/button';

export default function ButtonClient({title}:{
    title:string,
}) {

  return (
   <Button  variant="secondary" className='bg-white text-black'>{title}</Button>
  )
}
