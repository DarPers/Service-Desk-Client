import React from "react";
import MenuMUI from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import {IMenuItem} from "../types";

interface IMenuProps {
    items: IMenuItem[];
    anchorEl: HTMLElement | null;
    setAnchorEl: (param: HTMLElement | null) => void;
}

const Menu = ({anchorEl, setAnchorEl, items} : IMenuProps) => {

    const navigate = useNavigate();

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (route: string) => {
        navigate(route);
    }

    const open = Boolean(anchorEl);

    return (
        <MenuMUI
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {items.map(i =>
                <MenuItem key={i.id}
                          onClick={() => handleClick(i.route)}>
                    {i.name}
                </MenuItem>)}
        </MenuMUI>
    )
}

export default Menu;