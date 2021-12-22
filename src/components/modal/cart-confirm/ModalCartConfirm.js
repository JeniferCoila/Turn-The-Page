import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

const ModalCartConfirmComponent = (props) => {

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false)
    props.onConfirm(false)
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Listo!</Modal.Title>
      </Modal.Header>
      <Modal.Body>El item se añadió al carrito</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Seguir comprando
        </Button>
        <Link variant="primary" to="/cart" className="btn btn-primary">
          Ir al carrito
        </Link>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCartConfirmComponent;
