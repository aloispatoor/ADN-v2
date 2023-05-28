import {useState} from "react";

const Booking = ({booking}) => {
    const [editToggle, setEditToggle] = useState(false);

    return (
        <div className="booking">
            <div className="edit-delete">
                <a href="" onClick={() => setEditToggle(!editToggle)}>Modifier</a>
                <a href="">Supprimer</a>
            </div>

            <h2>{booking.title}</h2>

            {!editToggle ? (
                <p>Début : {booking.start}, fin : {booking.end}, {booking.description}</p>
            ) : (
                <form>
                    <input type="text" defaultValue={booking.title}/>
                    <input type="datetime-local" defaultValue={booking.start}/>
                    <input type="datetime-local" defaultValue={booking.end}/>
                    <input type="text" defaultValue={booking.description}/>
                    <input type="submit" value="Valider modification"/>
                </form>
            )}
        </div>
    )
}

export default Booking