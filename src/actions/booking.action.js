import axios from "axios";


export const GET_BOOKINGS = "GET_BOOKINGS";

export const getBookings = () => {
    return (dispatch) => {
        return axios.get("http://localhost:3000/booking").then((res) =>{
            dispatch({type: GET_BOOKINGS, payload: res.data});
        });
    };
};