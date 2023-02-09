import { FooterMenu } from '@/components/molecules'
import { useState } from 'react'
import { BrandLogo } from '@/components/atoms'

export const Footer = () => {
    const [date] = useState<Date>(new Date(Date.now()))

    return (
        <footer className="mt-20">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-5 px-3 space-y-5 sm:space-y-0">
                <BrandLogo url="./" src="/logo.png" />
                <FooterMenu />
            </div>

            <p className="text-center text-xs sm:text-sm py-7 border-t border-slate-600">
                {date.getFullYear()} WGDesign &copy; Todos los derechos
                reservados.
            </p>
        </footer>
    )
}
