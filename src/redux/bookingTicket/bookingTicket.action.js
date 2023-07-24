import { BOOKING_TICKET } from "./bookingTicket.constant";

export const datGheCreator = (payload) => {
  return {
    type: BOOKING_TICKET.DAT_GHE,
    payload,
  };
};

export const huyGheCreator=(payload)=>{
    return{
        type:BOOKING_TICKET.HUY_GHE,
        payload,
    }
}