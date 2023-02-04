import Link from 'next/link'
import { useState } from 'react'

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {} from '@heroicons/react/24/outline'

import { Avatar, BrandLogo, Button } from '@/components/atoms'
import { MobilMenu } from '@/components/molecules'

export interface INavigation {
    name: string
    url: string
}

const navigation: INavigation[] = [
    { name: 'Inicio', url: '/' },
    { name: 'Arquitectura', url: '#' },
    { name: 'Diseño atómico', url: '#' },
]

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header
            tabIndex={-1}
            className="flex justify-between items-center relative px-3 py-10"
        >
            <Button
                className="sm:hidden bg-none transition-all"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? (
                    <XMarkIcon width={24} height={24} />
                ) : (
                    <Bars3Icon width={24} height={24} />
                )}
            </Button>

            <BrandLogo url="./" src="/logo.png" />

            <nav className="hidden sm:block">
                <ul className="flex space-x-5">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.url}
                                className="hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-color duration-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <Avatar />

            {isMenuOpen ? (
                <MobilMenu navigation={navigation} action={setIsMenuOpen} />
            ) : (
                ''
            )}
        </header>
    )
}
