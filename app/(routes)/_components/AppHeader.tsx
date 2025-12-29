import { UserButton } from '@clerk/nextjs'
import React from 'react'

const MenuOption=[
    {
        name:'Dashborad',
        path:'/dashboard'
    },
    {
        name:'Upgrade',
        path:'/upgrade'
    },
    {
        name:'How it works?',
        path:'/how-it-works'
    },
]

function AppHeader() {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
      </div>
      <div>
        <ul className='flex gap-5'>
            {MenuOption.map((option, index)=>(
                <li key={index} className='block hover:scale-105 transition-all cursor-pointer'>{option.name}</li>
            ))}
        </ul>
      </div>
      <UserButton/>
    </nav>
  )
}

export default AppHeader