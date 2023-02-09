import Link from 'next/link'
import { INavigation } from '@/components/molecules/NavBar'
import { FC } from 'react'

interface Props {
    navigation: INavigation[]
}

export const FooterMenu: FC<Props> = ({ navigation }) => {
    return (
        <nav className="">
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
    )
}
