import { MainLayout } from '@/layouts/MainLayout'
import {
    Architecture,
    ArchitectureDefinition,
    Hero,
    Support,
} from '@/components/organisms'

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Support />
            <Architecture />
            <ArchitectureDefinition />
        </MainLayout>
    )
}
