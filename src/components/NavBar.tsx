"use client";
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { type ReactNode, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge'
import Button from './ui/button'

const NavBar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    return (
        <div className='fixed drop-shadow-sm z-50 top-0 w-full m-0 p-2 flex h-[70px] px-10 items-center justify-between bg-white text-black transition-all'>
            <Image alt='logo' src={"/CM-logo.png"} width={100} height={70} className='h-full w-auto' />
            <ul className='md:flex hidden items-center gap-6 h-full justify-center'>
                <Nav to='/'>Home</Nav>
                <Nav to='/about-us'>About us</Nav>
                <Nav to='/courses'>Courses</Nav>
                <Nav to='/careers'>Careers</Nav>
            </ul>
            <div className='md:flex hidden gap-5'>
                <Button className='py-2 rounded-lg' varient='outline'>Login</Button>
                <Button className='py-2 rounded-lg'>Sign Up</Button>
            </div>
            <div className='flex md:hidden items-center justify-center'>
                <Menu size={36} onClick={(open) => setMobileNavOpen(true)} />
            </div>
            {mobileNavOpen ? (
                <div className='absolute md:hidden top-0 right-0 left-0 h-screen bottom-0 flex justify-end items-end  bg-black/50'>
                    <div className='navbar-slide-up h-[70%] w-full rounded-t-4xl bg-white p-10 overflow-y-auto'>
                        <span className='flex justify-end'><X size={36} onClick={() => setMobileNavOpen(false)} /></span>
                        <div className='flex flex-col gap-10 text-2xl'>
                            <Nav to='/'>Home</Nav>
                            <Nav to='/about-us'>About us</Nav>
                            <Nav to='/courses'>Courses</Nav>
                            <Nav to='/careers'>Careers</Nav>
                        </div>
                        <hr className='my-10 text-gray-400' />
                        <div className='md:hidden flex gap-3 items-center flex-col'>
                            <Button className='py-2 w-fit text-xl px-10' varient='outline'>Login</Button>
                            <div>Don't have an account?</div>
                            <div className='text-primary underline'>Sign up now!</div>
                        </div>
                    </div>
                </div>
            ) : ""}
        </div>
    )
}


const Nav = ({ children, to }: { children: ReactNode, to: string }) => {
    const pathName = usePathname()

    const selected = pathName === to;
    return <Link href={to} className={twMerge(selected ? 'text-primary font-medium' : "", 'relative hover:text-primary group transition-all duration-1000 cursor-pointer')}>
        {children}
        <hr className={twMerge('absolute border-[1.5px] w-0 transition-all rounded-full', selected ? "border-primary w-full md:w-[80%]" : 'border-transparent group-hover:border-primary group-hover:w-[80%]')} />
    </Link>

}

export default NavBar