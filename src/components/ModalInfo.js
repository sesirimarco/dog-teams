
import Button from 'react-bootstrap/Button';
import  Modal from 'react-bootstrap/Modal';
const CLOSE = 'Close';
const ACCEPT = 'Accept';
const ModalInfo = ({ title, description, handleClose, type, show }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{description}</Modal.Body>
      <Modal.Footer>
        <Button
          variant={type === 'error' ? 'warning' : 'primary'}
          onClick={handleClose}
        >
          {type === 'error' ? CLOSE : ACCEPT}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalInfo;