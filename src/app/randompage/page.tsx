'use client'

import React from 'react'
import { useAppSelector } from '../hooks';

export default function page() {
    const count = useAppSelector((state) => state.counter.value);

  return (
    <div className='text-white'>{count}</div>
  )
}
    