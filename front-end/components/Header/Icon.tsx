import React from "react"
import { makeStyles } from "@mui/styles"
import MuiIcon from '@mui/material/Icon';
import * as MDI from "mdi-material-ui"
interface Props {
    icon: string;
}

const Icon:React.FC<Props> = ({ icon }) => {
    const MuiIcon = MDI[icon]
    return <MuiIcon />
}

export default Icon