import {create} from "zustand";
import {ITicket} from "../../ticketStore";
import {TicketType} from "../../../../enums/enums";

interface IFilterState {
    searchString: string,
    ticketType: string,
    setSearchString: (value: string) => void
    setTicketType: (value: string) => void
}

export const useFilter = create<IFilterState>()((set, get) => ({
    searchString: "",
    ticketType: "All",
    setSearchString: (value) => {set({ searchString: value })},
    setTicketType: (value) => {set({ticketType: value})},
}))