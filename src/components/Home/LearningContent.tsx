import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'
import Wrapper from '../ui/wrapper'

const LearningContent = () => {
    return (
        <Wrapper className='mt-10'>
            <div className='bg-primary rounded-4xl  text-white  flex gap-2 mx-10 overflow-hidden'>
                <div className='relative flex flex-col gap-6 flex-1 p-10 pl-16 justify-center'>
                    <h1 className='font-semibold text-2xl z-10'>Ready to Shape the Future of Tech?</h1>
                    <p className='z-10 text-sm'>Be part of an innovative journey, collaborate with industry experts, and make a real impact.</p>

                    <Button className='bg-white w-fit text-primary-text rounded-2xl hover:bg-white '>Start Learning
                        <Image alt='' src={'/LearningPathImage.svg'} width={300} height={300} className='absolute top-5 rotate-[4deg] left-40 w-[70%] -z-0' />
                    </Button>
                </div>
                <div className='max-w-[300px] flex-1 p-0 flex items-end'>
                    <Image alt='Learning Image' src={"/learningImage.png"} width={300} height={300} className='object-contain' />
                </div>
            </div>
        </Wrapper>
    )
}

export default LearningContent