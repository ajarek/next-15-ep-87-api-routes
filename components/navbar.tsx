import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  return (
    <div className="h-16 flex items-center justify-between  px-8 border-b-2">
      <div className="h-full flex items-center gap-4 px-8 text-xl">

          <Link href='/'>Home</Link>
          <Link href='/users'>Users</Link>

      </div>
     <ModeToggle/>
        </div>
  )
}

export default Navbar