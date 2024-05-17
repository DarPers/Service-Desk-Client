import React, {useEffect, useMemo} from 'react';
import styles from "./requestsListCard.module.css";
import {useTickets} from "./ticketStore";
import RequestCard from "./components/requestCard/requestCard";
import CircularProgress from '@mui/material/CircularProgress';
import HeaderText from "../../UI/typography/headerText";
import Filter from './components/filterComponent/filter';
import {useFilter} from "./components/filterComponent/filterStore";
import ParagraphText from "../../UI/typography/paragraphText";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const RequestsListCard = () => {
    const {tickets, fetchTickets, loading, error, setError} = useTickets((state) => ({
        tickets: state.tickets,
        fetchTickets: state.fetchTickets,
        loading: state.loading,
        error: state.error,
        setError: state.setError,
    }));

    const {searchString, ticketType} = useFilter((state) => ({
        searchString: state.searchString,
        ticketType: state.ticketType,
    }));

    let sortedTickets = useMemo(() => {
        return tickets.filter(i => i.name.includes(searchString) && (i.status.toString() == ticketType || ticketType == "All"));
    }, [searchString, ticketType, tickets]);

    useEffect(() => {
        fetchTickets();
        console.log(tickets);
    }, []);

    let isSnackBarOpen = useMemo(() => {
        return error != null;
    }, [error]);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(null);
    };

    return (
        <article className={styles.card}>
            <HeaderText>Requests</HeaderText>
            <Filter></Filter>
            <section className={styles.cards_list}>
                {loading ? <CircularProgress /> :
                    sortedTickets.length != 0 ? sortedTickets.map(ticket =>
                    <RequestCard
                        key={ticket.id}
                        name={ticket.name}
                        description={ticket.description}
                        status={ticket.status}
                        createdAt={ticket.createdAt}
                        updatedAt={ticket.updatedAt}
                        dateTimeAccepted={ticket.dateTimeAccepted}
                        id={ticket.id}/>
                )   : <ParagraphText>You don't have any requests!</ParagraphText>}
            </section>
            <Snackbar open={isSnackBarOpen} autoHideDuration={3000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {error}
                </Alert>
            </Snackbar>
        </article>
    );
};

export default RequestsListCard;