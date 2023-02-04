import { FC } from 'react'
import Head from 'next/head'
import { NavBar } from '@/components/molecules'

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

            <div className="h-full max-w-6xl overflow-visible mx-auto text-white font-light">
                <NavBar />
                <main>{children}</main>
            </div>
        </>
    )
}
