import Image from 'next/image'

import { Card, List } from '@/components/molecules'
import { ListItem, Title } from '@/components/atoms'

import { design } from '@/data'

export const ArchitectureDesign = () => {
    return (
        <section id="architecture-design" className="px-2">
            <Title className="text-3xl sm:text-4xl mb-6 sm:mb-10 sm:py-0 from-amber-300 to-pink-300">
                Diseño
            </Title>
            <Card className="block sm:flex justify-between items-center py-16 px-12 mb-5 !bg-none !bg-slate-900">
                <div className="w-full sm:w-1/2">
                    <p className="my-5 text-md sm:text-2xl">
                        Se debe analizar el tipo de usuario objetivo y el
                        contexto
                    </p>

                    <List>
                        {design.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </div>

                <div className="hidden sm:flex justify-center items-center relative w-1/2 h-[300px]">
                    <Image
                        src="/button-shell.png"
                        alt="Ejemplo de fase de diseño"
                        width={400}
                        height={400}
                    />
                </div>
            </Card>
        </section>
    )
}
