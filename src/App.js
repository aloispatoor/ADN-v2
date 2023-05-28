import './App.scss';
import React from "react";
import BookingForm from "./components/BookingForm";
import Booking from "./components/Booking";
import {useSelector} from "react-redux";
import {isEmpty} from "./components/Utils";

function App() {
    const bookings = useSelector((state) => state.bookingReducer);
      return (
        <div>
          <h1>Calendrier</h1>
          <div className="content">
              {!isEmpty && bookings.map((item, index) =>
                  (<Booking bookings={item} key={index} />
                  ))}
          </div>
          <BookingForm/>
        </div>
      );
}

export default App;
