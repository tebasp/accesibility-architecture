import Link from 'next/link'
import { FC } from 'react'

interface Props {
    children?: string | JSX.Element | JSX.Element[]
    url?: string
    className?: string
    onClick?: () => void
}

export const Button: FC<Props> = ({
    url = '#',
    className = '',
    children,
    onClick,
}) => {
    return (
        <Link
            href={url}
            onClick={onClick}
            className={`fade-in relative text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 transition-all hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-400 dark:focus:ring-slate-400 font-light rounded-lg text-sm px-5 py-2.5 text-center
            ${className}`}
        >
            {children}
        </Link>
    )
}
