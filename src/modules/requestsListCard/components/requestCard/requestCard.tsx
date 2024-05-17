import React, {FC, useState} from 'react';
import {ITicket, useTickets} from "../../ticketStore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from "./requestCard.module.css";
import { Button, CardActions } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import PlainText from "../../../../UI/typography/plainText";
import HeaderText from "../../../../UI/typography/headerText";
import ParagraphText from "../../../../UI/typography/paragraphText";
import Modal from '../../../../components/modal/modal';
import ChangeTicketForm from "../updateTicketFormModal/updateTicketFormModal";

const RequestCard: FC<ITicket> = (ticket) => {

    const {deleteTicket, updateTicket} = useTickets((state) => ({
        deleteTicket: state.deleteTicket,
        updateTicket: state.updateTicket
    }));

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

    const submitDelete = () => {
        deleteTicket(ticket.id);
        setIsModalOpen(false);
    };

    const submitUpdate = (changedTicket: ITicket) => {
        updateTicket(changedTicket);
        setIsUpdateModalOpen(false);
    };

    return (
        <article className={styles.request_card}>
            <Card className={styles.card}>
                <CardActions className={styles.up_action_block}>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <ClearIcon className={styles.cross_button}></ClearIcon>
                    </Button>
                </CardActions>
                <Modal onSubmit={() => submitDelete()}
                       message="Are you sure, that you would like to delete this ticket?"
                       isOpen={isModalOpen}
                       onClose={() => setIsModalOpen(false)}></Modal>
                <CardContent>
                    <HeaderText>
                        {ticket.name}
                    </HeaderText>
                    <PlainText>{ticket.status}</PlainText>
                    <section className={styles.description}>
                        <ParagraphText>
                            {ticket.description}
                        </ParagraphText>
                    </section>
                    <PlainText>
                        Created at: {ticket.createdAt.substring(0, 16).replace("T", " ")} <br/>
                        Updated at: {ticket.updatedAt.substring(0, 16).replace("T", " ")}
                    </PlainText>
                </CardContent>
                <CardActions className={styles.down_action_block}>
                    <Button size="small" color="primary" onClick={() => setIsUpdateModalOpen(true)}>
                        Update
                    </Button>
                </CardActions>
                <ChangeTicketForm
                    onSubmit={submitUpdate}
                    isOpen={isUpdateModalOpen}
                    onClose={() => setIsUpdateModalOpen(false)}
                    ticketData={ticket}></ChangeTicketForm>
            </Card>
        </article>
    );
};

export default RequestCard;