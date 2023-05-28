import React from "react";

const BookingForm = () => {
    return (
        <div className="form-container">
            <form>
                <input type="text" placeholder="Titre du poste" />
                <input type="datetime-local" placeholder="Débute : "/>
                <input type="datetime-local" placeholder="Fini : "/>
                <textarea placeholder="Décrivez l'événement"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
};

export default BookingForm;