import { FrameworksLogos } from '@/components/atoms'

export const SupportFrameworks = () => {
    return (
        <div className="relative text-center mt-20 px-3 sm:px-0 sm:mt-32">
            <h2 className="text-xl mb-5 text-emerald-300 font-bold sm:text-2xl">
                No importa con que framework o template engine trabajes
            </h2>
            <p className="text-md sm:text-lg">
                La <span className="font-bold text-violet-400">semántica</span>{' '}
                HTML es los más importante
            </p>
            <div className="relative w-full h-12 mt-8 sm:mt-14">
                <FrameworksLogos className="max-w-3xl" />
            </div>
        </div>
    )
}
