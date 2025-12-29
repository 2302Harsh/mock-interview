import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import CreateInterviewDialog from '../_components/CreateInterviewDialog'

function EmptyState() {
  return (
    <div className='mt-14 flex flex-col items-center gap-5 border-4 border-dashed p-10 rounded-4xl bg-gray-50'>
        <Image  src={'/interview.jpg'} alt='interview' width={500} height={100}/>
        <h2 className='mt-2 text-lg text-gray-500'>You do not have any interview yet...</h2>
        <CreateInterviewDialog/>
    </div>
  )
}

export default EmptyState