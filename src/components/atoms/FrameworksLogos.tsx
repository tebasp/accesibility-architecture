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
            width={800}
            height={200}
            className={`mx-auto ${className}`}
        />
    )
}
