
const TicketList = () => {
    return (
        <div>
            <h5 className='text-2xl'>Your tickets</h5>
            <div className="overflow-x-auto mt-4">
                <table className="table table-zebra w-full">
                    {/* head*/}
                    <thead>
                        <tr>
                            <th>Issue</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
                            <td>
                                <div className="badge badge-warning gap-2">
                                    Open
                                </div>
                            </td>
                            <td>view</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
                            <td>
                                <div className="badge badge-warning gap-2">
                                    Open
                                </div>
                            </td>
                            <td>view</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
                            <td>
                                <div className="badge badge-warning gap-2">
                                    Open
                                </div>
                            </td>
                            <td>view</td>
                        </tr>
                        <tr>
                            <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
                            <td>
                                <div className="badge badge-warning gap-2">
                                    Open
                                </div>
                            </td>
                            <td>view</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketList
