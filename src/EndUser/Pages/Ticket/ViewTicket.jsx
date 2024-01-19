import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddComplainModal from "../Complain/Modal/AddComplainModal";
import ConfirmModal from "../../../common/ConfirmModal";
import { useDeleteComplainMutation } from "../Complain/Api/userComplain.service";
import { useShowTicketQuery } from "./Api/userTicketApi";

const ViewTicket = () => {
    let navigate = useNavigate();
    const { ticketId } = useParams();
    const [deleteComplain] = useDeleteComplainMutation();
    const { data: ticket, isLoading, isSuccess, refetch } = useShowTicketQuery(ticketId);

    const [selectedItem, setSelectedItem] = useState({});

    const [showAddComplainModal, setShowAddComplainModal] = useState(false);
    const handleShowAddComplainModal = () => setShowAddComplainModal(true);
    const handleCloseAddComplainModal = () => setShowAddComplainModal(false);

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleCloseConfirmModal = () => setShowConfirmModal(false);
    const handleShowConfirmModal = (complain) => {
        setSelectedItem(complain);
        setShowConfirmModal(true);
    }

    return (
        <div className="mt-12">
            <AddComplainModal
                showAddComplainModal={showAddComplainModal}
                handleCloseAddComplainModal={handleCloseAddComplainModal}
                ticketId={ticketId}
                fetchTicket={refetch}
            />
            <ConfirmModal
                showConfirmModal={showConfirmModal}
                handleCloseConfirmModal={handleCloseConfirmModal}
                selectedItem={selectedItem}
                deleteAction={deleteComplain}
                fetchAction={refetch}
            />
            <div className="grid grid-cols-2 gap-4">
                <div className="grid-cols-1">
                    <h2 className="card-title">View Ticket</h2>
                </div>
                <div className="grid grid-cols-1 place-items-end">
                    <label
                        className="btn btn-primary btn-sm"
                        onClick={() => navigate(-1)}>Back
                    </label>
                </div>
            </div>
            {isLoading ? <div className="text-center">
                <span className="loading loading-dots loading-lg"></span>
            </div> : isSuccess ?
                <div className="mt-5">
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src="/logo512.png" />
                            </div>
                        </div>
                        <div className="chat-header">
                            {ticket?.data?.created_by?.name}
                            <time className="text-xs opacity-50">{ticket?.data?.createdAt}</time>
                        </div>
                        <div className="chat-bubble">
                            <b>{ticket?.data?.subject}</b><br />
                            {ticket?.data?.description}
                        </div>
                        <div className="chat-footer opacity-50">
                            Delivered
                        </div>
                    </div>
                    {ticket?.data?.response ? (
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/default-avatar.png" />
                                </div>
                            </div>
                            <div className="chat-header">
                                {ticket?.data?.assignee?.name}
                            </div>
                            <div className="chat-bubble">
                                {ticket?.data?.response}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-error">
                            <p>Not replied yet.</p>
                        </div>
                    )}
                    {ticket?.data?.complain ?
                        <div className="mt-5">
                            <hr />
                            <div className="card w-full text-primary -content">
                                <div className="card-body">
                                    <h2 className="card-title">Complain</h2>
                                    <p>{ticket?.data?.complain?.description}</p>
                                    <i>Date: {ticket?.data?.complain?.createdAt}</i>
                                    <i>Status: {ticket?.data?.complain?.status}</i>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm btn-primary">Edit</button>
                                        <button className="btn btn-sm btn-error"
                                            onClick={() => handleShowConfirmModal(ticket?.data?.complain)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className="text-center" style={{ marginTop: "80px" }} >
                            <button className="btn btn-primary" onClick={handleShowAddComplainModal} >Write a complain</button>
                        </div>
                    }
                </div> : ''
            }
        </div>
    )
}

export default ViewTicket
