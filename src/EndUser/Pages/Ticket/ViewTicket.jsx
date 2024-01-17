import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserTicketService from "../Home/Api/userTicket.service";
import AddComplainModal from "../Complain/AddComplainModal";

const ViewTicket = () => {
    let navigate = useNavigate();
    const { ticketId } = useParams();

    const [showAddComplainModal, setShowAddComplainModal] = useState(false);
    const handleShowAddComplainModal = () => setShowAddComplainModal(true);
    const handleCloseAddComplainModal = () => setShowAddComplainModal(false);

    const { showTicket } = useUserTicketService();

    const [ticket, setTicket] = useState({});

    const fetchTicket = async () => {
        try {
            const response = await showTicket(ticketId);
            setTicket(response.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTicket();
    }, []);

    return (
        <div className="mt-12">
            <AddComplainModal
                showAddComplainModal={showAddComplainModal}
                handleCloseAddComplainModal={handleCloseAddComplainModal}
                ticketId={ticketId}
                fetchTicket={fetchTicket}
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
            <div className="mt-5">
                <div className="chat chat-start">
                    <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                            <img src="/logo512.png" />
                        </div>
                    </div>
                    <div className="chat-header">
                        {ticket?.created_by?.name}
                        <time className="text-xs opacity-50">{ticket?.createdAt}</time>
                    </div>
                    <div className="chat-bubble">
                        <b>{ticket?.subject}</b><br />
                        {ticket?.description}
                    </div>
                    <div className="chat-footer opacity-50">
                        Delivered
                    </div>
                </div>
                {
                    ticket?.response ? (
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/default-avatar.png" />
                                </div>
                            </div>
                            <div className="chat-header">
                                {ticket?.assignee?.name}
                            </div>
                            <div className="chat-bubble">
                                {ticket?.response}
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-error">
                            <p>Not replied yet.</p>
                        </div>
                    )
                }
                {ticket?.complain ?
                    <div className="mb-5">
                        <div className="card w-full text-primary -content">
                            <div className="card-body">
                                <h2 className="card-title">Complain</h2>
                                <p>{ticket?.complain?.description}</p>
                                <i>Date: {ticket?.complain?.createdAt}</i>
                                <i>Status: {ticket?.complain?.status}</i>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm btn-primary">Edit</button>
                                    <button className="btn btn-sm btn-error">Delete</button>
                                </div>

                            </div>
                        </div>
                    </div> :
                    <div className="text-center" style={{marginTop:"80px"}} >
                        <button className="btn btn-primary" onClick={handleShowAddComplainModal} >Write a complain</button>
                    </div>
                }

            </div>
        </div>
    )
}

export default ViewTicket
