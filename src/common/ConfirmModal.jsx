import { useState } from "react";

export default function ConfirmModal(props) {
  const {
    showConfirmModal,
    deleteAction,
    fetchAction,
    handleCloseConfirmModal,
    selectedItem,
  } = props;

  const [isLoading, setIsLoading] = useState(false);

  const deleteData = async (id) => {
    try {
      setIsLoading(true);
      await deleteAction(id);
      fetchAction && fetchAction();
      setIsLoading(false);
      handleCloseConfirmModal();

    } catch (err) {
      console.log(err);
      handleCloseConfirmModal();
    }
  };

  return (
    <div>
      <input type="checkbox" readOnly checked={showConfirmModal} className="modal-toggle" />
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-error">Are you sure?</h3>
          <p className="py-4">The action is inreversible and may also delete associated data.</p>
          <div className="modal-action">
            <button className="btn btn-sm btn-light" onClick={() => handleCloseConfirmModal()}>Cancel</button>
            <button className="btn btn-sm btn-error" onClick={() => deleteData(selectedItem._id)}>
              {isLoading ? <span className="loading loading-spinner"></span> : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
