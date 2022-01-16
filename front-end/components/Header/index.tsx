import React from 'react'
import { Container } from './styles'
import { Avatar, Typography } from "@mui/material"
import Icon from "./Icon"
import type { User } from "../interface"
interface Props {
    user: User,
    icons?: string[]
}   

const Header:React.FC<Props> = ({ user, icons=[] }) => {
    const { avatar, type, name } = user
    return (
        <Container items={icons.length}>
            <Avatar src={avatar} alt={!!name? name : ""} />
            {name && <Typography>{name}</Typography>}
            {icons.map(icon =><Icon icon={icon} key={icon} />)}
        </Container>
    )
}

export default Header;