import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import AddPriority from "./Modals/AddPriority";
import EditPriority from "./Modals/EditPriority";
import ConfirmModal from "../../../../common/ConfirmModal";
import usePriorityService from "./Api/ticketPriority.service";

const TicketPriority = () => {

    const [priorities, setPriorities] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    const { getAllPriority, updatePriority, deletePriority } = usePriorityService();

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleShowEditModal = priority => {
        setSelectedItem(priority);
        setShowEditModal(true);
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleShowConfirmModal = (priority) => {
        setSelectedItem(priority);
        setShowConfirmModal(true);
    }
    const handleCloseConfirmModal = () => setShowConfirmModal(false);

    const handleCloseEditModal = () => setShowEditModal(false);

    const fetchPriority = async () => {
        try {
            const response = await getAllPriority();
            setPriorities(response.data);
        } catch (err) {
            console.log("Error ", err);
        }
    }

    useEffect(() => {
        fetchPriority();
    }, []);
    return (
        <div>
            <div className="card bg-base-100 col-span-1" >
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title">Ticket Priority</h2>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <label
                                className="btn btn-warning btn-sm"
                                onClick={() => handleShowModal()}>Add</label>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <AddPriority
                            showModal={showModal}
                            handleCloseModal={handleCloseModal}
                            fetchPriority={fetchPriority}
                        />
                        <EditPriority
                            showEditModal={showEditModal}
                            handleCloseEditModal={handleCloseEditModal}
                            fetchPriority={fetchPriority}
                            updatePriority={updatePriority}
                            selectedItem={selectedItem}
                        />
                        <ConfirmModal
                            showConfirmModal={showConfirmModal}
                            handleCloseConfirmModal={handleCloseConfirmModal}
                            selectedItem={selectedItem}
                            deleteAction={deletePriority}
                            fetchAction={fetchPriority} />
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Priority Name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    priorities?.length ? (
                                        priorities.map((priority) => (
                                            <tr className="hover" key={priority._id}>
                                                <td>{priority.name}</td>
                                                <td>{priority.createdAt}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowEditModal(priority)}>
                                                            <PencilIcon className="h-4 w-4 text-success" />
                                                        </button>
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowConfirmModal(priority)}>
                                                           <TrashIcon className="h-4 w-4 text-error" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className="text-center">
                                            <td colSpan="3" className="text-error" >No data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketPriority
