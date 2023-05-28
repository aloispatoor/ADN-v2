import {combineReducers} from "redux";
import userReducer from "./user.reducer";
import bookingReducer from "./booking.reducer";

export default combineReducers({
    // REDUCERS
    userReducer,
    bookingReducer,
})