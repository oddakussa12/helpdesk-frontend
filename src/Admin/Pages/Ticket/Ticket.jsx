import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAdminTicketService from "./Api/ticket.service";
import useTicketStatusService from "../Setting/TicketStatus/Api/ticketStatus.service";
import usePriorityService from "../Setting/TicketPriority/Api/ticketPriority.service";
import AssignTicket from "./Modals/AssigneeTicket";

const Ticket = () => {
    const { getAllTickets,
        showticket,
        deleteticket,
        changePriority } = useAdminTicketService();
    const { getAllTicketStatus } = useTicketStatusService();
    const { getAllPriority } = usePriorityService();

    const [tickets, setTickets] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});
    const [statuses, setStatuses] = useState([]);
    const [priorities, setPriorities] = useState([]);

    const [showAssignModal, setShowAssignModal] = useState(false);
    const handleShowAssignModal = (ticket) => {
        setSelectedItem(ticket);
        setShowAssignModal(true);
    }
    const handleCloseAssignModal = () => setShowAssignModal(false);

    const fetchTickets = async () => {
        try {
            const response = await getAllTickets();
            setTickets(response?.data);
        } catch (err) {
            console.log(err);
        }
    }

    const getTicketStatuses = async () => {
        try {
            const response = await getAllTicketStatus();
            setStatuses(response.data);
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

    const handleStatusChange = (e) => {
        e.preventDefault();
        // getUsersByRole(e.target.value);
    }

    const handlePriorityChange = (e) => {
        e.preventDefault();
        // getUsersByRole(e.target.value);
    }

    useEffect(() => {
        fetchTickets();
        getTicketStatuses();
        getTicketPriorities();
    }, []);


    return (
        <div className="px-3 mt-10">
            <AssignTicket
                showAssignModal={showAssignModal}
                handleCloseAssignModal={handleCloseAssignModal}
                fetchTickets={fetchTickets}
                selectedItem={selectedItem}

            />
            <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
                <div className="card-body">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-1">
                            <h2 className="card-title">Ticket Management</h2>
                        </div>
                        <div className="grid col-span-1 place-items-end">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handlePriorityChange}
                                defaultValue="">
                                <option value="" disabled>Filter by Priority</option>
                                {
                                    priorities.map((priority, index) => (
                                        <option value={priority.name} key={index} >{priority.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="grid col-span-1 place-items-end">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handleStatusChange}
                                defaultValue="">
                                <option value="" disabled>Filter by Status</option>
                                {
                                    statuses.map((status, index) => (
                                        <option value={status.name} key={index} >{status.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="card bg-base-100 col-span-2" style={{ minHeight: '450px' }} >
                            <div className="card-body">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Ticket</th>
                                            <th>Assignee</th>
                                            <th>Status</th>
                                            <th>Priority</th>
                                            <th>Created At</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tickets?.length ? (
                                                tickets.map((ticket, index) => (
                                                    <tr className="hover" key={index}>
                                                        <td>{ticket?.subject}</td>
                                                        <td>
                                                            {
                                                                ticket?.assignee ? (
                                                                    <div className="badge badge-success gap-2">{ticket?.assignee?.name}</div>
                                                                ) : (
                                                                    <div className="badge badge-primary gap-2">Unassigned</div>
                                                                )
                                                            }

                                                        </td>
                                                        <td>
                                                            <div className="badge badge-info gap-2">{ticket?.status?.name}</div>
                                                        </td>
                                                        <td>
                                                            <div className="badge badge-error gap-2">{ticket?.priority?.name}</div>
                                                        </td>
                                                        <td>{ticket?.createdAt}</td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button className="btn btn-sm"
                                                                    onClick={() => handleShowAssignModal(ticket)}>
                                                                    Assign
                                                                </button>
                                                                <button className="btn btn-sm">
                                                                    <Link to="view-ticket">View</Link>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr className="text-center">
                                                    <td colSpan={4} >No records found.</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Ticket
