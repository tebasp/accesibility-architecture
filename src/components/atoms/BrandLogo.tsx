import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'

interface Props {
    src: string
    url: string
}

export const BrandLogo: FC<Props> = ({ url, src }) => {
    return (
        <Link href={url}>
            <Image
                src={src}
                alt="Logotipo arquitectura accesibilidad"
                width={50}
                height={50}
            />
        </Link>
    )
}
