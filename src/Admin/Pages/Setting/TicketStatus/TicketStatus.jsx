import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import AddTicketStatus from "./Modals/AddTicketStatus";
import EditTicketStatus from "./Modals/EditTicketStatus";
import ConfirmModal from "../../../../common/ConfirmModal";
import useTicketStatusService from "./Api/ticketStatus.service";

const TicketStatus = () => {

    const [statuses, setStatuses] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    const { getAllTicketStatus,
        updateTicketStatus,
        deleteTicketStatus } = useTicketStatusService();

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleShowEditModal = tatus => {
        setSelectedItem(tatus);
        setShowEditModal(true);
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleShowConfirmModal = (status) => {
        setSelectedItem(status);
        setShowConfirmModal(true);
    }
    const handleCloseConfirmModal = () => setShowConfirmModal(false);

    const handleCloseEditModal = () => setShowEditModal(false);

    const fetchTicketStatus = async () => {
        try {
            const response = await getAllTicketStatus();
            setStatuses(response.data);
        } catch (err) {
            console.log("Error ", err);
        }
    }

    useEffect(() => {
        fetchTicketStatus();
    }, []);
    return (
        <div>
            <div className="card bg-base-100 col-span-1" >
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title">Ticket status</h2>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <label
                                className="btn btn-warning btn-sm"
                                onClick={() => handleShowModal()}>Add</label>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <AddTicketStatus
                            showModal={showModal}
                            handleCloseModal={handleCloseModal}
                            fetchTicketStatus={fetchTicketStatus}
                        />
                        <EditTicketStatus
                            showEditModal={showEditModal}
                            handleCloseEditModal={handleCloseEditModal}
                            fetchTicketStatus={fetchTicketStatus}
                            updateTicketStatus={updateTicketStatus}
                            selectedItem={selectedItem}
                        />
                        <ConfirmModal
                            showConfirmModal={showConfirmModal}
                            handleCloseConfirmModal={handleCloseConfirmModal}
                            selectedItem={selectedItem}
                            deleteAction={deleteTicketStatus}
                            fetchAction={fetchTicketStatus} />
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Status Name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    statuses?.length ? (
                                        statuses.map((tatus) => (
                                            <tr className="hover" key={tatus._id}>
                                                <td>{tatus.name}</td>
                                                <td>{tatus.createdAt}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowEditModal(tatus)}>
                                                            <PencilIcon className="h-4 w-4 text-success" />
                                                        </button>
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowConfirmModal(tatus)}>
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

export default TicketStatus
