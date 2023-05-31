import { FC } from 'react'

interface Props {
    children: string | JSX.Element | JSX.Element[]
    className?: string
}

export const Title: FC<Props> = ({ children, className = '' }) => {
    return (
        <h2
            className={`text-center text-5xl font-bold py-5 mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-300 ${className}`}
        >
            {children}
        </h2>
    )
}
