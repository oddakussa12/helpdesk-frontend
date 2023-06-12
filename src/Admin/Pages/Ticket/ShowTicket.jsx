import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAdminTicketService from "./Api/ticket.service";
import usePriorityService from "../Setting/TicketPriority/Api/ticketPriority.service";

const ShowTicket = () => {
    let navigate = useNavigate();
    const { ticketId } = useParams();
    const { showTicket } = useAdminTicketService();
    const { getAllPriority } = usePriorityService();
    const [priorities, setPriorities] = useState([]);

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

    const getTicketPriorities = async () => {
        try {
            const response = await getAllPriority();
            setPriorities(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handlePriorityChange = (e) => {
        e.preventDefault();
        // getUsersByRole(e.target.value);
    }

    useEffect(() => {
        fetchTicket();
        getTicketPriorities();
    }, [])
    return (
        <div className="px-3 mt-10">
            <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
                <div className="card-body">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title pb-5">View Ticket</h2>
                            <small>
                                <b>Assignee: </b>
                                <div className="badge badge-success gap-2">{ticket?.assignee?.name}</div>
                                <b className="ml-5">Status: </b>
                                <div className="badge badge-success gap-2">{ticket?.status?.name}</div>
                            </small>
                        </div>
                        <div className="grid-cols-1">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handlePriorityChange}
                                defaultValue={ticket?.priority?.name}>
                                <option value={ticket?.priority?.id} >{ticket?.priority?.name}</option>
                                {
                                    priorities.map((priority, index) => (
                                        <option value={priority.name} key={index} >{priority.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <label
                                className="btn btn-warning btn-sm"
                                onClick={() => navigate(-1)}>Back
                            </label>
                        </div>
                    </div>
                    {
                        ticket ? (
                            <div className="overflow-x-auto mt-5">
                                {/* cards */}
                                <div>
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
                                            <b>{ticket?.subject}</b>
                                            <br />
                                            {ticket?.description}
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
                        ) : (
                            <p>No data</p>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default ShowTicket
