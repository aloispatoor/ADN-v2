import {GET_BOOKINGS, ADD_BOOKING} from "../actions/booking.action";

const initialState = {};

export default function bookingReducer(state = initialState, action){
    switch (action.type){
        case GET_BOOKINGS:
            return action.payload;
        case ADD_BOOKING:
            return [action.payload, ...state];
        default:
            return state;
    }
}