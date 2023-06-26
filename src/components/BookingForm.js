import React, {useRef} from "react";
import {Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addBooking} from "../actions/booking.action";

const BookingForm = () => {
    const form = useRef();
    const dispatch = useDispatch();
    const handleForm = async (e) => {
        e.preventDefault();

        const bookingData = {
            title: form.current[0].value,
            start: form.current[1].value,
            end: form.current[2].value,
            description: form.current[3].value,
        };

        dispatch(addBooking(bookingData));
        form.current.reset();
    }

    return (
        <Container>
            <Form ref={form} onSubmit={e => handleForm(e)}>
                <FormGroup className="m-3" controlId="title">
                    <FormLabel>Titre de l'événement</FormLabel>
                    <FormControl type="text" />
                </FormGroup>
                <FormGroup className="m-3" controlId="start">
                    <FormLabel>Débute le : </FormLabel>
                    <FormControl type="datetime-local"/>
                </FormGroup>
                <FormGroup className="m-3" controlId="end">
                    <FormLabel>Fini le : </FormLabel>
                    <FormControl type="datetime-local" placeholder="Fini : "/>
                </FormGroup>
                <FormGroup className="m-3" controlId="description">
                    <FormLabel>Décrivez l'événement</FormLabel>
                    <FormControl type="text"></FormControl>
                </FormGroup>
                <FormControl variant="primary" type="submit" value="Envoyer" />
            </Form>
        </Container>
    );
};

export default BookingForm;