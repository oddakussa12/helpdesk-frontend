import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAdminTicketService from "./Api/ticket.service";
import AssignTicket from "./Modals/AssignTicket";

const Ticket = () => {
    const { getAllTickets,
        showticket,
        deleteticket,
        changePriority } = useAdminTicketService();

    const [tickets, setTickets] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

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

    useEffect(() => {
        fetchTickets();
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
                    <h2 className="card-title">Ticket Management</h2>
                    <div className="overflow-x-auto">
                        <div className="card bg-base-100 col-span-2" style={{ minHeight: '450px' }} >
                            <div className="card-body">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>Ticket</th>
                                            <th>Assignee</th>
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
                                                        <td>March, 27, 2023</td>
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
