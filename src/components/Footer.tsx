import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'
import { PiLinkedinLogo } from 'react-icons/pi'
import Wrapper from './ui/wrapper'

const Footer = () => {
    return (
        <div className='bg-[#e3e3e3] text-primary-text mt-10'>
            <Wrapper className='flex flex-col py-16'>
                <div className='flex'>
                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold text-primary-text mb-5'>Get in touch</h1>
                        <div className='flex flex-col gap-5'>
                            <div>
                                <h3 >E-mail</h3>
                                <h3 className='font-semibold'>info@cademantra.io</h3>
                            </div>
                            <div>
                                <h3>Phone no.</h3>
                                <h2 className='font-semibold'>{"+ 1571-931-5701"}</h2>
                            </div>
                            <div>
                                <h3>Headquater</h3>
                                <h3 className='font-semibold'>Reston VA, USA</h3>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold text-primary-text mb-5'>Company</h1>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold'>Home</h3>
                            <h3 className='font-semibold'>About Us</h3>
                            <h3 className='font-semibold'>Courses</h3>
                            <h3 className='font-semibold'>Careers</h3>
                            <h3 className='font-semibold'>Contact Us</h3>
                            <h3 className='font-semibold'>Blogs</h3>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h1 className='text-xl font-semibold text-primary-text mb-5'>Courses we provide?</h1>
                        <div className='flex flex-col gap-4'>
                            <h3 className='font-semibold'>Scratch </h3>
                            <h3 className='font-semibold'>Web Development</h3>
                            <h3 className='font-semibold'>Python</h3>
                            <h3 className='font-semibold'>Game Development</h3>
                            <h3 className='font-semibold'>Robotics</h3>
                            <h3 className='font-semibold'>AI/ML</h3>
                            <h3 className='font-semibold'>Mathematics</h3>

                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center mt-10'>
                    <div className='font-semibold'>
                        &copy; CodeMantra 2025 - All rights reserved.
                    </div>
                    <div className='flex gap-4'>
                        <FaFacebook size={30} />
                        <FaInstagram size={30} />
                        <PiLinkedinLogo size={30} />
                        <FaYoutube size={30} />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Footer