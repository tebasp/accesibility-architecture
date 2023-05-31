import { SmallCard } from '@/components/molecules'
import { Title } from '@/components/atoms'

export const Architecture = () => {
    return (
        <section id="section-architecture" className="mt-20 sm:mt-32 px-2">
            <Title className="!text-4xl sm:!text-5xl">Arquitectura</Title>
            <div className="block sm:flex sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                <SmallCard
                    title="Diseño"
                    description="Diseño limpio orientado al tipo se usuario"
                    href="/architecture#architecture-design"
                />
                <SmallCard
                    title="Contenido"
                    description="Contenido según el tipo de usuario"
                    color={'#F87171'}
                    href="/architecture#architecture-content"
                />
                <SmallCard
                    title="Implementación"
                    description="Independiente del entorno de trabajo"
                    color={'#60A5FA'}
                    href="/architecture#architecture-implementation"
                />
            </div>
        </section>
    )
}
