"use client";
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from './ui/button'

const NavBar = () => {
    return (
        <div className='fixed z-50 top-0 w-full m-0 p-2 flex h-[70px] px-10 items-center justify-between bg-white'>
            <Image alt='logo' src={"/CM-logo.png"} width={50} height={50} className='h-full w-auto' />
            <ul className='flex items-center gap-6 h-full justify-center'>
                <Nav to='/'>Home</Nav>
                <Nav to='/about-us'>About us</Nav>
                <Nav to='/courses'>Courses</Nav>
                <Nav to='/careers'>Careers</Nav>

            </ul>
            <div className='flex gap-5'>
                <Button className='py-2' varient='outline'>Login</Button>
                <Button className='py-2'>Sign Up</Button>
            </div>
        </div>
    )
}


const Nav = ({ children, to }: { children: ReactNode, to: string }) => {
    const pathName = usePathname()

    const selected = pathName === to;
    return <Link href={to} className={twMerge(selected ? 'text-primary font-medium' : "", 'relative hover:text-primary group transition-all duration-1000 cursor-pointer')}>
        {children}
        <hr className={twMerge('absolute border-[1.5px] w-0 transition-all rounded-full', selected ? "border-primary w-[80%]" : 'border-transparent group-hover:border-primary group-hover:w-[80%]')} />
    </Link>

}

export default NavBar