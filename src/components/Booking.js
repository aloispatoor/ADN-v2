import {Table} from "react-bootstrap";

const Booking = ({item}) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Evénement</th>
                    <th>Début</th>
                    <th>Fin</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.start}</td>
                    <td>{item.end}</td>
                    <td>{item.description}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Booking