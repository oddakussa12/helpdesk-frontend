import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { QuestionOctagon } from "react-bootstrap-icons";

export default function ConfirmModal(props) {
  const {
    showConfirmModal,
    deleteAction,
    fetchAction,
    handleConfirmModalClose,
    selectedItem,
  } = props;

  const delete_action = (id) => {
    deleteAction(id)
      .then((response) => {
        fetchAction();
        handleConfirmModalClose();
      })
      .catch((e) => {
        console.log(e);
        handleConfirmModalClose();
      });
  };

  return (
    <Modal show={showConfirmModal} onHide={handleConfirmModalClose} centered>
      <Modal.Title className="text-danger mt-2 px-4">
        <QuestionOctagon style={{marginTop:'-5px', marginRight:'20px'}} />
        Are you sure?
      </Modal.Title>
      <Modal.Body className="px-4">
        You are about to delete {selectedItem?.name} ?
      </Modal.Body>
      <div className="row">
        <div className="col-sm-12 text-end px-4 py-4">
          <Button
            variant="secondary"
            onClick={handleConfirmModalClose}
            style={{ marginRight: "20px", height:'30px',padding:"0px", width:'70px', borderRadius:'2px' }}
            className="btn-sm"
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => delete_action(selectedItem.id)}
            style={{height:'30px',padding:"0px", width:'70px', borderRadius:'2px'}}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
