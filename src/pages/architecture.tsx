import { MainLayout } from '@/layouts/MainLayout'
import {
    ArchitectureContent,
    ArchitectureDesign,
    ArchitectureHero,
    ArchitectureImplementation,
    ArchitectureTest,
} from '@/components/organisms'

export default function Architecture() {
    return (
        <MainLayout title="Propuesta de arquitectura">
            <ArchitectureHero />
            <ArchitectureDesign />
            <ArchitectureContent className="mt-20" />
            <ArchitectureImplementation className="mt-20" />
            <ArchitectureTest className="mt-20" />
        </MainLayout>
    )
}
