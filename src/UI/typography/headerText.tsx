import React from "react";
import styles from "./typography.module.css";
import {Typography} from "@mui/material";

interface IHeaderText {
    children?: React.ReactElement |React.ReactNode;
}

const HeaderText: React.FC<IHeaderText> = ({children}) => {
    return (
        <Typography className={styles.header_text} variant="h5">{children}</Typography>
    );
}

export default HeaderText;