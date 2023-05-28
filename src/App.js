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
          <BookingForm/>
          <div className="content">
              {!isEmpty && bookings.map((booking, index) =>
                  (<Booking bookings={booking} key={index} />
                  ))}
          </div>
        </div>
      );
}

export default App;
