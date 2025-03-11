import type React from 'react'
import { twMerge } from 'tailwind-merge'
export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient?: 'default' | 'outline'
}

const Button = ({ className, varient, children, disabled, ...props }: ButtonProps) => {
    const varients = {
        default: "hover:bg-transparent border border-primary hover:text-primary border",
        outline: "hover:bg-primary hover:text-white bg-transparent text-primary border"
    }

    return (
        <button className={twMerge("transition-colors duration-150 bg-primary text-primary-foreground hover:opacity-90 p-4 text-sm rounded-2xl py-3 font-semibold cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed", varients[varient ?? 'default'], className)} disabled={disabled ?? false} {...props}>{children}</button>
    )
}

export default Button