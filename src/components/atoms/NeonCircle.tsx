import { FC } from 'react'

interface Props {
    className?: string
}

export const NeonCircle: FC<Props> = ({ className }) => {
    return (
        <div
            className={`absolute w-screen neon-circle opacity-20 ${className}`}
        ></div>
    )
}
