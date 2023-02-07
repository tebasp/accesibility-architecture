import { SupportFrameworks } from '@/components/molecules'
import { FrameworksLogos } from '@/components/atoms/'

export const Support = () => {
    return (
        <section>
            <SupportFrameworks />
            <FrameworksLogos className="mt-14 max-w-6xl" />
        </section>
    )
}
