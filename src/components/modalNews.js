import { Button, Modal } from 'react-bootstrap';

export default ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        Бля бла бла уже лень верстать
      </Modal.Body>
    </Modal>
  );
  } 