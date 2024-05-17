import React from "react";
import {useNavigate} from "react-router-dom";
import styles from "./linkIcon.module.css"

interface LinkIconProps {
    link: string;
    image: string;
}

const LinkIcon = ({link, image}: LinkIconProps) => {

    const navigate = useNavigate();

    const goToPage = (link: string) => {
        navigate(link);
    }

    return (
        <img
            className={styles.icon}
            alt="icon" src={image}
            onClick={() => goToPage(link)}/>
    );
}

export default LinkIcon;