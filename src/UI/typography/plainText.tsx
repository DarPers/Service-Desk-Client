import React, {FC} from "react";
import {Typography} from "@mui/material";
import styles from "./typography.module.css";

interface IPlainTextProps {
    children?: React.ReactElement |React.ReactNode;
}

const PlainText: FC<IPlainTextProps> = ({children}) => {
    return (
        <Typography className={styles.plain_text} component='p'>{children}</Typography> //variant="h8"
    );
}

export default PlainText;