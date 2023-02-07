import { MainLayout } from '@/layouts/MainLayout'
import { Architecture, Hero, Support } from '@/components/organisms'

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Support />
            <Architecture />
        </MainLayout>
    )
}
