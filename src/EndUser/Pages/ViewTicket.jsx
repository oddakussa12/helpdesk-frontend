import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useUserTicketService from "./Home/Api/userTicket.service";

const ViewTicket = () => {
    let navigate = useNavigate();
    const { ticketId } = useParams();

    const { showTicket } = useUserTicketService();

    const [ticket, setTicket] = useState({});

    const fetchTicket = async () => {
        try {
            const response = await showTicket(ticketId);
            console.log(response.data);
            setTicket(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTicket();
    }, []);

    return (
        <div className="card bg-base-100 shadow-xl mt-10">
            <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid-cols-1">
                        <h2 className="card-title">View Ticket</h2>
                    </div>
                    <div className="grid grid-cols-1 place-items-end">
                        <label
                            className="btn btn-warning btn-sm"
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
                    <div className="chat chat-end">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img src="/default-avatar.png" />
                            </div>
                        </div>
                        <div className="chat-header">
                            Anakin
                            <time className="text-xs opacity-50">12:46</time>
                        </div>
                        <div className="chat-bubble">
                            That's never been done in the history of the Jedi. It's insulting!
                            It was said that you would, destroy the Sith, not join them.
                            It was said that you would, destroy the Sith, not join them.
                        </div>
                        <div className="chat-footer opacity-50">
                            Seen at 12:46
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTicket
