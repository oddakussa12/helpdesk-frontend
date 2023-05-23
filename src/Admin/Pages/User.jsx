import { Link } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

const User = () => {
  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <h2 className="card-title">User Management</h2>
          <div className="overflow-x-auto">
            <div className="card bg-base-100 col-span-2" style={{ minHeight: '450px' }} >
              <div className="card-body">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover">
                      <td>Odda Kussa</td>
                      <td>odda@code-care.pro</td>
                      <td><div className="badge badge-primary gap-2">Admin</div></td>
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
                      <td>Odda Kussa</td>
                      <td>odda@code-care.pro</td>
                      <td><div className="badge badge-success gap-2">Support</div></td>
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
                      <td>Odda Kussa</td>
                      <td>odda@code-care.pro</td>
                      <td><div className="badge badge-info gap-2">User</div></td>
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
        </div>
      </div>
    </div>
  )
}

export default User
