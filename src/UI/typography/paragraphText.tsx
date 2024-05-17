import React, {FC} from "react";
import {Typography} from "@mui/material";
import styles from "./typography.module.css";

interface IParagraphTextProps {
    children?: React.ReactElement |React.ReactNode;
}

const ParagraphText: FC<IParagraphTextProps> = ({children}) => {
    return (
        <Typography className={styles.paragraph_text} variant="h6">{children}</Typography>
    );
}

export default ParagraphText;