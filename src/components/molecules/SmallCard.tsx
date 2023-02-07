import { FC } from 'react'

import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Button } from '@/components/atoms'

interface Props {
    title: string
    description?: string
    image?: string
    href?: string
    children?: JSX.Element | JSX.Element[]
    color?: string
}

export const SmallCard: FC<Props> = ({
    title,
    description = '',
    image = '',
    href = '/',
    children,
    color = '#6EE7B7',
}) => {
    return (
        <div className="bg-gray-900 flex justify-between items-center p-5 rounded-2xl w-full mx-1 h-28">
            <CheckCircleIcon
                width={35}
                height={35}
                className="hidden md:block mr-3"
                color={color}
            />

            <div className="">
                <h2 className="text-lg font-bold mb-1">{title}</h2>
                <p className="text-sm text-slate-400">{description}</p>
                {children}
            </div>

            <Button
                className="px-1 py-1 bg-none !rounded-full hover:bg-none hover:-translate-y-1"
                url={href}
                ariaLabel={title}
            >
                <ArrowRightIcon
                    width={30}
                    height={30}
                    className="hover:text-orange-300"
                />
            </Button>
        </div>
    )
}
