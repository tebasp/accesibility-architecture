import { FC } from 'react'

interface Props {
    children: JSX.Element | JSX.Element[]
    className?: string
}

export const List: FC<Props> = ({ children, className }) => {
    return (
        <ul className={`list-disc list-inside text-sm sm:text-lg ${className}`}>
            {children}
        </ul>
    )
}
