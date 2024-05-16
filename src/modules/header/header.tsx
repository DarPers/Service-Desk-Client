import React, {useState} from "react";
import {Button} from "@mui/material";
import AvatarIcon from "../../components/avatarIcon";
import logoImage from "../../assets/logo.png"
import styles from "./header.module.css"
import LinkIcon from "../../components/linkIcon/linkIcon";
import Menu from "../../components/menu";
import {deepPurple} from "@mui/material/colors";
import {IMenuItem} from "../../types";

const Header = () => {

    const itemsRequestMenu : IMenuItem[] = [{id: 1, name: "Create new one", route: "/"}, {id: 2, name: "All", route: "/requests"}];
    const itemsAccountMenu : IMenuItem[] = [{id: 1, name: "Profile", route: "/account"}, {id: 2, name: "Log out", route: "/"}];

    const [anchorElForRequestMenu, setAnchorElForRequestMenu] = useState<null | HTMLElement>(null);
    const [anchorElForAccountMenu, setAnchorElForAccountMenu] = useState<null | HTMLElement>(null);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <LinkIcon
                    link="/account"
                    image={logoImage}/>
            </div>
            <nav className={styles.buttons}>
                <Button
                    className={styles.requestButton}
                    onClick={(event) => setAnchorElForRequestMenu(event.currentTarget)}>
                    Request
                </Button>
                <Menu
                    anchorEl={anchorElForRequestMenu}
                    setAnchorEl={setAnchorElForRequestMenu}
                    items={itemsRequestMenu}/>
                <div
                    className={styles.icon}
                    onClick={(event) => setAnchorElForAccountMenu(event.currentTarget)}>
                    <AvatarIcon
                        sx={{bgcolor: deepPurple[900], width: 44, height: 44}}
                        firstName="Daria"
                        lastName="Erohova"/>
                </div>
                <Menu
                    anchorEl={anchorElForAccountMenu}
                    setAnchorEl={setAnchorElForAccountMenu}
                    items={itemsAccountMenu}/>
            </nav>
        </header>
    );
}

export default Header;