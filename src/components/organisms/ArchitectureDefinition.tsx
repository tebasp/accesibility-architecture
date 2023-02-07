import { ListItem, Title } from '@/components/atoms'
import { Card, List } from '@/components/molecules'

import { atom, page } from '@/data'
import Image from 'next/image'

export const ArchitectureDefinition = () => {
    return (
        <section className="mt-28 px-2">
            <Title className="from-lime-500 to-cyan-200 !text-4xl sm:!text-5xl">
                Hitos por componente
            </Title>

            <Card className="block sm:flex justify-between items-center py-16 px-12 mb-5">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold">Átomos</h2>
                    <p className="my-5 text-md sm:text-2xl">
                        Los átomos son la unidad mínima a nivel de componente
                    </p>

                    <List>
                        {atom.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </div>

                <div className="hidden sm:block relative w-1/2 h-[300px]">
                    <Image
                        src="/button-shell.svg"
                        alt="Ejemplo de componente de átomo"
                        fill
                        className={`mx-auto`}
                    />
                </div>
            </Card>

            <Card className="block sm:flex justify-between items-center py-16 px-12 from-violet-500 !to-cyan-400">
                <div className="w-full sm:w-1/2">
                    <h2 className="text-3xl sm:text-4xl font-bold">Página</h2>
                    <p className="my-5 text-md sm:text-2xl">
                        Representa la agrupación de organismo y moléculas
                    </p>

                    <List>
                        {page.map((item) => (
                            <ListItem key={item}>{item}</ListItem>
                        ))}
                    </List>
                </div>

                <div className="hidden sm:block relative w-1/2 h-[300px]">
                    <Image
                        src="/page-shell.svg"
                        alt="Ejemplo de componente de átomo"
                        fill
                        className={`mx-auto`}
                    />
                </div>
            </Card>
        </section>
    )
}
