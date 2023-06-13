import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSupportTicketService from "./Home/Api/ticket.service";
import useSupportBaseDataService from "../Api/baseData.service";

const ViewTicket = () => {
    let navigate = useNavigate();
    const { ticketId } = useParams();
    const { showTicket, reply } = useSupportTicketService();
    const { getAllTicketStatuses } = useSupportBaseDataService();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [ticket, setTicket] = useState({});
    const [ticketStatuses, setTicketStatuses] = useState([]);

    const fetchTicket = async () => {
        try {
            const response = await showTicket(ticketId);
            setTicket(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getTicketStatuses = async () => {
        try {
            const response = await getAllTicketStatuses();
            setTicketStatuses(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const replyToTicket = async (data) => {
        try {
            await reply(ticketId, data);
            fetchTicket();
        } catch (err) {
            console.log(err);
        }
    }

    const handleStatusChange = (e) => {
        e.preventDefault();
        // getUsersByRole(e.target.value);
    }

    useEffect(() => {
        fetchTicket();
        getTicketStatuses();
    }, [])
    return (
        <div className="px-3 mt-10">
            <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
                <div className="card-body">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title pb-5">View Ticket</h2>
                            <small>
                                <b className="ml-5">Status: </b>
                                <div className="badge badge-success gap-2">{ticket?.status?.name}</div>
                            </small>
                        </div>
                        <div className="grid-cols-1">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handleStatusChange}
                                defaultValue={ticket?.priority?.name}>
                                <option value={ticket?.priority?.id} >{ticket?.priority?.name}</option>
                                {
                                    ticketStatuses.map((status, index) => (
                                        <option value={status._id} key={index} >{status.name}</option>
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
                                    {
                                        ticket?.response ? (
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
                                                    {ticket?.response}
                                                </div>
                                                <div className="chat-footer">
                                                    <button className="btn btn-error btn-sm mt-2">Edit</button>
                                                </div>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit(replyToTicket)}>
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
                                                        <div className="form-control w-full">
                                                            <textarea className="textarea textarea-lg textarea-bordered"
                                                                placeholder="Replay"
                                                                style={{minWidth:'600px', color:'black'}}
                                                                {...register("response", {
                                                                    required: {
                                                                        value: true,
                                                                        message: "Your response is required.",
                                                                    }
                                                                })}>
                                                            </textarea>
                                                            {errors.response && (
                                                                <small className="text-error">{errors.response?.message}</small>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="chat-footer">
                                                        <button type="submit" className="btn btn-warning btn-sm mt-2">Reply</button>
                                                    </div>
                                                </div>
                                            </form>
                                        )
                                    }
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

export default ViewTicket
