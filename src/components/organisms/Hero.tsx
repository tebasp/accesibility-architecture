import { HeroContent } from '@/components/molecules'
import { NeonCircle } from '@/components/atoms'

export const Hero = () => {
    return (
        <section>
            <NeonCircle className="-left-10 sm:left-[25%] md:left-[30%] lg:left-[33%] top-28" />
            <HeroContent />
        </section>
    )
}
