import axios from "axios";


export const GET_BOOKINGS = "GET_BOOKINGS";
export const ADD_BOOKING = "ADD_BOOKING";

export const getBookings = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/booking").then((res) =>{
            dispatch({type: GET_BOOKINGS, payload: res.data});
        });
    };
};
export const addBooking = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3000/booking", data).then((res) =>{
            dispatch({type: ADD_BOOKING, payload: data});
        });
    };
};