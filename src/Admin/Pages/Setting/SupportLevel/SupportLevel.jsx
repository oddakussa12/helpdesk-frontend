import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

const SupportLevel = () => {
    return (
        <div className="card bg-base-100 col-span-1"  >
            <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid-cols-1">
                        <h2 className="card-title">Support Level</h2>
                    </div>
                    <div className="grid grid-cols-1 place-items-end">
                        <button className="btn btn-warning btn-sm">Add</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Level name</th>
                                <th>Created at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <td>Level one</td>
                                <td>March, 22, 2023</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><PencilIcon className="h-4 w-4 text-success" /></Link>
                                        </button>
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><TrashIcon className="h-4 w-4 text-error" /></Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover">
                                <td>Level two</td>
                                <td>March, 22, 2023</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><PencilIcon className="h-4 w-4 text-success" /></Link>
                                        </button>
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><TrashIcon className="h-4 w-4 text-error" /></Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover">
                                <td>Level three</td>
                                <td>March, 22, 2023</td>
                                <td>
                                    <div className="btn-group">
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><PencilIcon className="h-4 w-4 text-success" /></Link>
                                        </button>
                                        <button className="btn btn-sm">
                                            <Link to="view-ticket"><TrashIcon className="h-4 w-4 text-error" /></Link>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SupportLevel