import { ReactNode } from "react";

export default function GradientBorder({
    children,
    color,
    top = true,
    right = true,
    bottom = true,
    left = true,
    radius = "3xl"
}: {
    children: ReactNode
    color: string
    top?: boolean
    right?: boolean
    bottom?: boolean
    left?: boolean
    radius?: string
}) {
    return (
        <div className={`relative rounded-${radius} overflow-hidden w-full`}>
            {children}
            {bottom && <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${color} to-transparent`}></div>}
            {top && <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-${color} to-transparent`}></div>}
            {right && <div className={`absolute bottom-0 top-0 right-0 w-[1px] bg-gradient-to-b from-transparent via-${color} to-transparent`}></div>}
            {left && <div className={`absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-${color} to-transparent`}></div>}
    </div>
    )
}