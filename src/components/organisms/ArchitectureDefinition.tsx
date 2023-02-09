import { ListItem, Title } from '@/components/atoms'
import { Card, List } from '@/components/molecules'

import { atom, molecule, organism, page } from '@/data'
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
                        src="/button-shell.png"
                        alt="Ejemplo de componente de átomo"
                        fill
                        className={`mx-auto`}
                    />
                </div>
            </Card>

            <div className="block sm:flex justify-between ">
                <Card className="block w-full sm:flex justify-between items-center py-16 px-12 !from-lime-600 !to-cyan-500 sm:w-1/2 mr-5 mb-5">
                    <div className="w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Molécula
                        </h2>
                        <p className="my-5 text-md sm:text-2xl">
                            Representa la agrupación de átomos
                        </p>

                        <List>
                            {molecule.map((item) => (
                                <ListItem key={item}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </Card>

                <Card className="block w-full sm:flex justify-between items-center py-16 px-12 !from-sky-500 !to-fuchsia-400 sm:w-1/2 mb-5">
                    <div className="w-full">
                        <h2 className="text-3xl sm:text-4xl font-bold">
                            Organismo
                        </h2>
                        <p className="my-5 text-md sm:text-2xl">
                            Representa la agrupación de moléculas{' '}
                        </p>

                        <List>
                            {organism.map((item) => (
                                <ListItem key={item}>{item}</ListItem>
                            ))}
                        </List>
                    </div>
                </Card>
            </div>

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
                        src="/page-shell.png"
                        alt="Ejemplo de componente de átomo"
                        fill
                        className={`mx-auto`}
                    />
                </div>
            </Card>
        </section>
    )
}
