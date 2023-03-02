import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate} from "react-router-dom";

function UsunWydarzenie(props) {

    let navigate = useNavigate();

    // Show - Hide - Modal on WydarzenieOsobno component
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [errors, setErrors] = useState()
    const [isLoading, setIsLoading] = useState(false);



    //Delete current wydarzenie
    const handleDelete = (event) => {
        setIsLoading(true);
        axios({
            method: 'DELETE',
            url: `https://fundacja-fresk.pl/api/aktualnoscis/${props.wydarzenie}/`,
        })
            .then(() => {
                navigate('/aktualnosci')
            })
        setIsLoading(false);
    };
    return (
        <>
            <Button variant="danger" className="mb-3" onClick={handleShow}>
                Usuń wydarzenie
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Czy chcesz usunąć wydarzenie?</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex justify-content-around">
                    <Button variant="danger" onClick={handleDelete}>
                        Tak
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Nie
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UsunWydarzenie