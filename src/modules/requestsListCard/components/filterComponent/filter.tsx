import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Input} from "@mui/material";
import {useFilter} from "./filterStore";
import {TicketType} from "../../../../enums/enums";
import Select from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";
import styles from "./filter.module.css";

const Filter = () => {
    const {searchString, setSearchString, ticketType, setTicketType} = useFilter((state) => ({
        searchString: state.searchString,
        setSearchString: state.setSearchString,
        ticketType: state.ticketType,
        setTicketType: state.setTicketType
    }));

    const types = [{key: TicketType.None, name: "None"},
                            {key: TicketType.Free, name: "Free"},
                            {key: TicketType.InProgress, name: "In progress"},
                            {key: TicketType.Ready, name: "Ready"},
                            {key: TicketType.All, name: "All"}];
    const [searchRequest, setSearchRequest] = useState(searchString);

    const handleChanges = (value: string | TicketType) => {
        setTicketType(TicketType[value]);
        console.log(ticketType);
    }

    return (
        <div className={styles.filters}>
            <Input
                placeholder="Request contains..."
                value={searchRequest}
                onChange={(event) => setSearchRequest(event.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => setSearchString(searchRequest)} aria-label="delete">
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }/>
            <Select className={styles.select}
                placeholder="Status: "
                value={TicketType[ticketType]}
                onChange={(event) => handleChanges(event.target.value)}
                label="Request type"
            >
                {types.map((type) =>
                    <MenuItem value={type.key} key={type.key}>{type.name}</MenuItem>
                )}
            </Select>
        </div>
    );
};

export default Filter;