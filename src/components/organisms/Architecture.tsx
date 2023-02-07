import { SmallCard } from '@/components/molecules'
import { Title } from '@/components/atoms'

export const Architecture = () => {
    return (
        <section className="mt-20 sm:mt-32">
            <Title>Arquitectura</Title>
            <div className="flex flex-col  sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <SmallCard
                    title="Diseño"
                    description="Diseño limpio orientado al tipo se usuario"
                />
                <SmallCard
                    title="Contenido"
                    description="Contenido según el tipo de usuario"
                    color={'#F87171'}
                />
                <SmallCard
                    title="Implementación"
                    description="Independiente del entorno de trabajo"
                    color={'#60A5FA'}
                />
            </div>
        </section>
    )
}
