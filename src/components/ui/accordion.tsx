"use client"
import { Minus, Plus } from 'lucide-react'
import React, { useState, type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
interface props {
    title: string;
    children: ReactNode
};
const Accordion = ({ title, children }: props) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='flex flex-col'>
            <div
                onClick={() => setExpanded(!expanded)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        setExpanded(!expanded);
                    }
                }}
                className='flex select-none gap-4 text-primary font-bold text-xl items-center cursor-pointer hover:opacity-85 group'
            >
                {expanded ? <Minus className=' transition-all' /> : <Plus className='group-hover:rotate-180 transition-all' />}
                {title}
            </div>

            <div className={twMerge('transition-all duration-500 pl-10  overflow-hidden', expanded ? "max-h-[300px]" : "max-h-0")}>
                {children}
            </div>
        </div>
    )
}

export default Accordion