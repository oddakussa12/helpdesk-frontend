
export default function ConfirmModal(props) {
  const {
    showConfirmModal,
    deleteAction,
    fetchAction,
    handleCloseConfirmModal,
    selectedItem,
  } = props;

  const deleteData = async (id) => {
    try {
      await deleteAction(id);
      fetchAction();
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
            {/* <a href="#" className="btn">Yay!</a> */}
            <button className="btn btn-sm btn-light" onClick={() => handleCloseConfirmModal()}>Cancel</button>
            <button className="btn btn-sm btn-error" onClick={() => deleteData(selectedItem._id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
