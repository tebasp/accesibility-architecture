import { FC } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/molecules'
import { NeonCircle } from '@/components/atoms'

interface Props {
    children: JSX.Element | JSX.Element[]
    title?: string
}

export const MainLayout: FC<Props> = ({
    children,
    title = 'Arquitectura con accesibilidad',
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name="description"
                    content="Arquitectura para desarrollar aplicaciones web con accesibilidad"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="relative h-full w-full overflow-visible text-white font-light max-w-6xl mx-auto">
                <NeonCircle className="left-10 sm:left-[25%] md:left-[30%] lg:left-[35%] top-28" />
                <NavBar />
                <main>{children}</main>
            </div>
        </>
    )
}
