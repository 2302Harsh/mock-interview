import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Send } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Interview() {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className='max-w-3xl w-full'>
                <Image src={'/start-interview.jpg'} alt='start-interview' width={400} height={200} 
                    className='w-full object-cover'
                />
                <div className=' flex flex-col items-center space-y-5'>
                    <h2 className='font-bold text-3xl text-center'>Ready to start interview?</h2>
                    <Button>Start Interview <ArrowRight/></Button>
                    <hr />
                    <h2 className='font-semibold text-2xl'>Want to sent interview link to someone?</h2>
                    <div className='flex gap-5 w-full max-w-lg'>
                        <Input placeholder='Email' className='w-full '/>
                        <Button><Send/></Button>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Interview