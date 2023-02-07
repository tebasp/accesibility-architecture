import { FC } from 'react'

interface Props {
    children: string | JSX.Element | JSX.Element[]
}

export const ListItem: FC<Props> = ({ children }) => {
    return <li>{children}</li>
}
