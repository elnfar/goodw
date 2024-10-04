'use client';

import { Button } from '../ui/button'

export default function Navbar() {
  

  return (
    <nav className='fixed z-50 text-white w-full p-5'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-x-12'>
           <h1 className='text-2xl font-extrabold'>Siizz</h1>
        </div>  

        <div>
          <Button variant="outline" className='rounded-full text-white z-50'>
              <a href="https://app.siizz.xyz" target="_blank">Get started</a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
