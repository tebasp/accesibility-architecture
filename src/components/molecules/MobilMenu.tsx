import { INavigation } from '@/components/molecules/NavBar'
import { Dispatch, FC, SetStateAction } from 'react'
import Link from 'next/link'

interface Props {
    navigation: INavigation[]
    action: Dispatch<SetStateAction<boolean>>
}

export const MobilMenu: FC<Props> = ({ navigation, action }) => {
    return (
        <div className="absolute left-0 top-28 bg-slate-800 w-full p-3 rounded fade-in">
            <nav>
                <ul className="flex flex-col divide-y divide-slate-600">
                    {navigation.map((item) => (
                        <li key={item.name}>
                            <Link
                                onClick={() => action(false)}
                                href={item.url}
                                className="hover:text-transparent block py-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 transition-color duration-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
