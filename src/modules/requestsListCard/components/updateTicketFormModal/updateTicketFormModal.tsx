import React, {FC, useState} from 'react';
import styles from "../../../../components/modal/modal.module.css";
import ParagraphText from "../../../../UI/typography/paragraphText";
import {Button, TextField} from "@mui/material";
import {ITicket} from "../../ticketStore";
import {TicketType} from "../../../../enums/enums";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface IChangeTicketFormProps {
    isOpen: boolean;
    onClose: () => void;
    ticketData: ITicket;
    onSubmit: (changedTicket: ITicket) => void;
}

const ChangeTicketForm: FC<IChangeTicketFormProps> = ({ isOpen, onClose, onSubmit, ticketData}) => {

    const types = [{key: TicketType.None, name: "None"},
        {key: TicketType.Free, name: "Free"},
        {key: TicketType.InProgress, name: "In progress"},
        {key: TicketType.Ready, name: "Ready"}];

    const [ticketChanged, setTicketChanged] = useState<ITicket>(ticketData);

    console.log(ticketData.status);
    const handleTypeChanging = (value: TicketType | string) => {
        setTicketChanged({...ticketChanged, status: TicketType[value]});
    };

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <article className={styles.modal_content}>
                <div>
                    <ParagraphText>Change account information</ParagraphText>
                    <section className={styles.inputs}>
                        <TextField id="standard-basic" label="Name"
                                   value={ticketChanged.name}
                                   onChange={(event) =>
                                       setTicketChanged({...ticketChanged, name: event.currentTarget.value})}
                                   variant="standard"/>
                        <TextField id="standard-basic" label="Description"
                                   value={ticketChanged?.description}
                                   onChange={(event) =>
                                       setTicketChanged({...ticketChanged, description: event.currentTarget.value})}
                                   variant="standard"/>
                        <Select className={styles.select}
                                placeholder="Status: "
                                value={TicketType[ticketChanged.status]}
                                onChange={(event) => handleTypeChanging(event.target.value)}
                                label="Ticket type"
                        >
                            {types.map((type) =>
                                <MenuItem value={type.key} key={type.key}>{type.name}</MenuItem>
                            )}
                        </Select>
                        <section className={styles.buttons}>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={() => onSubmit(ticketChanged)}>Submit</Button>
                        </section>
                    </section>
                </div>
            </article>
        </div>
    );
};

export default ChangeTicketForm;