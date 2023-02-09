import { FC } from 'react'
import Image from 'next/image'

import { Card, List } from '@/components/molecules'
import { ListItem } from '@/components/atoms'

import { content } from '@/data'

interface Props {
    className?: string
}

export const ArchitectureContent: FC<Props> = ({ className }) => {
    return (
        <section className={`px-2 ${className}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-10">
                Contenido
            </h2>
            <Card className="block sm:flex justify-between items-center py-16 px-12 mb-5 !bg-none !bg-slate-900">
                <div className="w-full sm:w-1/2">
                    <p className="my-5 text-md sm:text-2xl">
                        El contenido debe ser claro y conciso, acorde al público
                        al que va dirigido
                    </p>

                    <List>
                        {content.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </div>

                <div className="hidden sm:flex justify-center items-center w-1/2 h-[300px]">
                    <Image
                        src="/button-shell.png"
                        alt="Ejemplo de fase de contenido"
                        width={400}
                        height={400}
                    />
                </div>
            </Card>
        </section>
    )
}
