import React, {FC} from 'react';
import Avatar from "@mui/material/Avatar"
import {SxProps} from "@mui/material";

interface IAvatarIconProps {
    firstName: string;
    lastName: string;
    sx: SxProps
}

const AvatarIcon: FC<IAvatarIconProps> = ({firstName, lastName, sx}) => {
    return (
        <Avatar
            sx={sx}>
            {firstName[0]}{lastName[0]}
        </Avatar>
    );
}

export default AvatarIcon;