import React, { type ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const Wrapper = ({ children, className }: { children: ReactNode, className?: string }) => {
    return (
        <div className={twMerge('mx-auto w-full h-full max-w-[1400px] p-5', className)}>{children}</div>
    )
}

export default Wrapper