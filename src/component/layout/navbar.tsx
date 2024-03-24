'use client'

import { UserButton } from '@clerk/nextjs'

export default function Navbar() {
  return (
    <div className='w-full h-16 flex justify-between items-center'>
      <p>Welcome</p>
      <UserButton />
    </div>
  )
}
