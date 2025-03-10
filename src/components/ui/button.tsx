import type React from 'react'
import { twMerge } from 'tailwind-merge'
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient?: 'default' | 'outline'
}

const Button = ({ className, varient, children, ...props }: ButtonProps) => {
    const varients = {
        default: "hover:bg-transparent border border-primary hover:text-primary border",
        outline: "hover:bg-primary hover:text-white bg-transparent text-primary border"
    }

    return (
        <button className={twMerge("transition-colors duration-150 bg-primary text-primary-foreground hover:opacity-90 p-2 text-sm rounded-md px-4 cursor-pointer", varients[varient ?? 'default'], className)} {...props}>{children}</button>
    )
}

export default Button