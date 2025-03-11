import { Calendar, Laptop, List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'
import Wrapper from '../ui/wrapper'

const HowItWorks = () => {
    return (
        <Wrapper className="flex gap-10 pt-20 md:flex-row flex-col">
            <div className="flex-1 flex flex-col gap-5 justify-center">
                <h1 className="text-3xl font-semibold">
                    Here's How It <span className='text-primary'> Works!</span>
                </h1>
                <div className="text-primary-text flex flex-col gap-5">
                    <div className='flex p-4 items-center gap-5 small-drop-shadow rounded-2xl'>
                        <Button className='rounded-full bg-[#5488f2] h-14 w-14 flex items-center justify-center'><List /></Button>
                        <div className='flex flex-col gap-1 text-primary-text'>
                            <h1 className='font-semibold'>Register</h1>
                            <p className='text-sm' >Click on the Enroll button and complete your registration form.</p>
                        </div>
                    </div>
                    <div className='flex p-4 items-center gap-5 small-drop-shadow rounded-2xl'>
                        <Button className='rounded-full bg-[#5488f2] h-14 w-14 flex items-center justify-center'><Calendar /></Button>
                        <div className='flex flex-col gap-1 text-primary-text'>
                            <h1 className='font-semibold'>Choose your course</h1>
                            <p className='text-sm'>Choose the best course for you.</p>
                        </div>
                    </div>
                    <div className='flex p-4 items-center gap-5 small-drop-shadow rounded-2xl'>
                        <Button className='rounded-full bg-[#5488f2] h-14 w-14 flex items-center justify-center'><Laptop /></Button>
                        <div className='flex flex-col gap-1 text-primary-text'>
                            <h1 className='font-semibold'>Start Learning</h1>
                            <p className='text-sm' >You’re on the way to become a professional personal.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center"><Image src={"/HowItWorksImage.png"} height={500} width={500} className="w-full h-full max-w-[80%] md:max-w-full md:max-h-[400px] object-contain" alt="How it works image" /></div>
        </Wrapper>
    )
}

export default HowItWorks