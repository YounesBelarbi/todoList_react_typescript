import { InputHTMLAttributes, forwardRef } from "react"
import cn from "classnames"

export const Input = forwardRef<
    HTMLInputElement,
    InputHTMLAttributes<HTMLInputElement>
>(({ className, ...rest }, ref) => {
    return (
        <input
            {...rest}
            ref={ref}
            // className={`w-full p-2 border border-gray-300 rounded-md ${className}`}      
            className={cn(
                "w-full p-2 border border-gray-300 rounded-md",
                className
            )}

        >
        </input>
    )
})
