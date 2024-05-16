import {create} from 'zustand';
import {TicketType} from "../../enums/enums";
import {baseUrl, ticketRequest, userRequest} from "../../api";

export interface ITicket {
    id: string,
    name: string,
    description: string,
    status: TicketType,
    dateTimeAccepted: string,
    createdAt: string,
    updatedAt: string,
}

export interface IUpdatedTicket {
    name: string,
    description: string,
    status: TicketType,
    dateTimeAccepted: string,
    userId: string,
}

interface ITicketsState {
    tickets: ITicket[],
    loading: boolean,
    error: string | null,
    setError: (value: string | null) => void,
    fetchTickets: () => void,
    deleteTicket: (id: string) => void,
    updateTicket: (ticket: ITicket) => void,
}

export const useTickets = create<ITicketsState>()((set, get) => ({
    tickets: [{id: "1", name: "Ticket 1", description: "Description of ticket 1!", status: TicketType.InProgress, dateTimeAccepted: "21-05-2024T12:04", createdAt: "20-05-2024T12:04", updatedAt: "21-05-2024T12:04"},
        {id: "2", name: "Ticket 2", description: "Description of ticket 2! Description of ticket 2! Description of ticket 2! Description of ticket 2!", status: TicketType.Free, dateTimeAccepted: "21-05-2024T12:04", createdAt: "20-05-2024T12:04", updatedAt: "21-05-2024T12:04"}],
    loading: false,
    error: null,

    setError: (value) => {
        set({error: value});
    },

    deleteTicket: async (id) => {
        set ({loading: true})
        try {
            const  response = await fetch(baseUrl + ticketRequest + id, {
                method: 'DELETE',
                mode: 'cors',
            });
            set({tickets: get().tickets.filter(i => i.id != id)});
        }
        catch (error) {
            set({error: "Delete error"});
        }
        finally {
            set ({loading: false})
        }
    },

    updateTicket: async (ticket) => {
        set ({loading: true})
        const updatedTicket = <IUpdatedTicket>{name: ticket.name, description: ticket.description,
                                                             userId: "71f4366e-0a7d-4ba2-887d-b9bec30695ab", status: ticket.status, dateTimeAccepted: ticket.dateTimeAccepted};
        console.log(updatedTicket);
        try {
            const  response = await fetch(baseUrl + ticketRequest + ticket.id, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTicket),
            });
            get().fetchTickets();
        }
        catch (error) {
            set({error: "Update error"});
        }
        finally {
        }
    },

    fetchTickets: async () => {
        set({loading: true})

        try {
            const  response = await fetch(baseUrl + userRequest + '71f4366e-0a7d-4ba2-887d-b9bec30695ab', {
                method: 'GET',
                mode: 'cors'
            });
            set({tickets: await response.json()})
        }
        catch (error) {
            set({error: "Fetching error"});
        }
        finally {
            set ({loading: false})
        }
    },
}))