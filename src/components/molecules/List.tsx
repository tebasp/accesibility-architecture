interface Props {
    children: JSX.Element | JSX.Element[]
}

export const List = ({ children }: Props) => {
    return <ul>{children}</ul>
}
