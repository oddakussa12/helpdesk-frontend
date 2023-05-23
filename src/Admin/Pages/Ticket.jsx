import { Link } from "react-router-dom";

const Ticket = () => {
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
                                        <tr className="hover">
                                            <td>Odda Kussa</td>
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
                                        <tr className="hover">
                                            <td>Odda Kussa</td>
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
                                        <tr className="hover">
                                            <td>Odda Kussa</td>
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
