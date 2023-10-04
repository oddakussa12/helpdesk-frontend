import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import useSupportTicketService from "./Home/Api/ticket.service";
import useSupportBaseDataService from "../Api/baseData.service";
import useAuth from "../../hooks/useAuth";
import ToastNotification from "../../common/ToastNotification";

const ViewTicket = () => {
    const {auth} = useAuth();
    let navigate = useNavigate();
    const { ticketId } = useParams();
    const { showTicket, reply, updateStatus } = useSupportTicketService();
    const { getAllTicketStatuses } = useSupportBaseDataService();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = useCallback(() => setShowToast(prevState => !prevState), []);
    const [toastProps, setToastProps] = useState(() => ({
        message: "",
        variant: "success",
    }));

    const [ticket, setTicket] = useState({});
    const [ticketStatuses, setTicketStatuses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const fetchTicket = async () => {
        try {
            const response = await showTicket(ticketId);
            setTicket(response.data);
            setIsLoading(false);
            setIsBtnLoading(false);
        } catch (err) {
            setIsLoading(false);
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
            setIsBtnLoading(true);
            await reply(ticketId, data);
            fetchTicket();
        } catch (err) {
            console.log(err);
        }
    }

    const handleStatusChange = async (e) => {
        e.preventDefault();
        try{
            const data = {
                "status_id": e?.target?.value
            }
            await updateStatus(ticketId, data);
            fetchTicket();
            setToastProps({
                ...toastProps,
                message: "Ticket status changed successfully.",
                variant: "success"
            });
            toggleShowToast();
            setTimeout(() => {
                toggleShowToast();
            }, 3000);
                
        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTicket();
        getTicketStatuses();
    }, [])
    return (
        <div className="px-3 mt-10">
            <ToastNotification
                showToast={showToast}
                toggleShowToast={toggleShowToast}
                variant={toastProps.variant}
                message={toastProps.message}
            />
            {
                !isLoading ? (
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
                                        defaultValue={ticket?.status?._id}>
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
                                                            {auth?.user?.name}
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
                                                            <div className="chat-bubble">
                                                                <div className="form-control w-full">
                                                                    <textarea className="textarea textarea-lg textarea-bordered"
                                                                        placeholder="Replay"
                                                                        style={{ minWidth: '300px', color: 'black' }}
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
                                                                <button type="submit" className="btn btn-warning btn-sm mt-2">
                                                                    {isBtnLoading ? (<span className="loading loading-spinner"></span>): "Reply"}
                                                                </button>
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
                ) : (
                    <div className="text-center mt-60">
                        <span className="loading loading-spinner"></span>
                    </div>
                )
            }
        </div>
    )
}

export default ViewTicket
