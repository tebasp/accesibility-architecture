interface Props {
    children?: JSX.Element | JSX.Element[]
    className?: string
}

export const Card = ({ children, className }: Props) => {
    return (
        <div
            className={`bg-gradient-to-br from-rose-400 to-amber-500 p-5 rounded-2xl w-full ${className}`}
        >
            {children}
        </div>
    )
}
