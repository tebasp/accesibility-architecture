import { MainLayout } from '@/layouts/MainLayout'
import { Hero, Support } from '@/components/organisms'

export default function Home() {
    return (
        <MainLayout>
            <Hero />
            <Support />
        </MainLayout>
    )
}
