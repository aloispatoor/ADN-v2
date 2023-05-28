import React from "react";
import {Container, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";

const BookingForm = () => {
    return (
        <Container>
            <Form>
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