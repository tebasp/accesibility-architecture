import { NeonCircle, Title } from '@/components/atoms'

export const ArchitectureHero = () => {
    return (
        <section>
            <NeonCircle className="-left-10 sm:left-[25%] md:left-[30%] lg:left-[33%] top-28" />

            <div className="relative z-10 mb-20 sm:mb-28">
                <Title className="!from-lime-200 !to-cyan-300">
                    Propuesta de arquitectura
                </Title>

                <div className="text-center text-white font-bold space-y-3">
                    <p className="text-xl sm:text-2xl">
                        Esta arquitectura se basa en 4 pilares
                    </p>
                    <p className="text-lg sm:text-xl text-cyan-300 font-medium">
                        Diseño - Contenido - Implementación - Pruebas
                    </p>
                </div>
            </div>
        </section>
    )
}
