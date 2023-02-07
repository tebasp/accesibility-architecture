import Image from 'next/image'
import { FC } from 'react'

interface Props {
    className?: string
}

export const FrameworksLogos: FC<Props> = ({ className }) => {
    return (
        <Image
            src="/logos.svg"
            alt="Frameworks logotipos"
            fill
            className={`mx-auto ${className}`}
        />
    )
}
