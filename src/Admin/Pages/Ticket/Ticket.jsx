import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAdminTicketService from "./Api/ticket.service";

const Ticket = () => {
    const { getAllTickets,
        showticket,
        deleteticket,
        assignTicket,
        changePriority } = useAdminTicketService();

    const [tickets, setTickets] = useState([]);

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
                                            <th>Status</th>
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
                                                        <td><div className="badge badge-primary gap-2">Unassigned</div></td>
                                                        <td>March, 27, 2023</td>
                                                        <td>
                                                            <div className="btn-group">
                                                                <button className="btn btn-sm">
                                                                    <Link to="view-ticket">Assign</Link>
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
        </div>
    )
}

export default Ticket
