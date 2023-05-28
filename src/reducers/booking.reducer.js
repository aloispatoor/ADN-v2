import {GET_BOOKINGS} from "../actions/booking.action";

const initialState = {};

export default function bookingReducer(state = initialState, action){
    switch (action.type){
        case GET_BOOKINGS:
            return action.payload;
        default:
            return state;
    }
}