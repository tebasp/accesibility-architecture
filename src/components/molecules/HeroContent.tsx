import { Button } from '@/components/atoms'

export const HeroContent = () => {
    return (
        <div className="z-10 flex flex-col justify-between items-center text-center mt-20 px-3 sm:px-0">
            <h1 className="text-4xl z-10 sm:text-7xl font-bold">
                Arquitectura web para desarollo con accesibilidad
            </h1>
            <p className="font-light text-md mt-10 z-10  sm:w-1/2 sm:text-xl sm:mt-18">
                Desarrolla aplicaciones web desde su concepcion hasta la puesta
                en producción aplicando la accesibilidad desde el principio.
            </p>
            <Button className="m-12" url="#">
                Comenzar
            </Button>
        </div>
    )
}
