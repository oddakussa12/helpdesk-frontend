import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import AddUser from "./Modals/AddUser";
import EditUser from "./Modals/EditUser";
import ConfirmModal from "../../../common/ConfirmModal";

import useUserService from "./Api/user.service";

const User = () => {

  const { getAllUsers, createUser, updateUser, deleteUser } = useUserService();

  const [users, setUsers] = useState({});
  const [selectedItem, setSelectedItem] = useState({});

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const handleCloseEditModal = () => setShowEditModal(false);
  const handleShowEditModal = (user) => {
    setSelectedItem(user);
    setShowEditModal(true);
  }

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleShowConfirmModal = (user) => {
    setSelectedItem(user);
    setShowConfirmModal(true);
  }
  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid-cols-1">
              <h2 className="card-title">User Management</h2>
            </div>
            <div className="grid grid-cols-1 place-items-end">
              <label
                className="btn btn-warning btn-sm"
                onClick={() => handleShowModal()}>Create User
              </label>
            </div>
          </div>
          <div className="overflow-x-auto">
            <div className="card bg-base-100 col-span-2" style={{ minHeight: '450px' }} >
              <div className="card-body">
                <AddUser
                  showModal={showModal}
                  handleCloseModal={handleCloseModal}
                  createUser={createUser}
                  fetchUsers={fetchUsers}
                />
                <EditUser
                  showEditModal={showEditModal}
                  handleCloseEditModal={handleCloseEditModal}
                  fetchUsers={fetchUsers}
                  updateUser={updateUser}
                  selectedItem={selectedItem}
                />
                <ConfirmModal
                  showConfirmModal={showConfirmModal}
                  handleCloseConfirmModal={handleCloseConfirmModal}
                  selectedItem={selectedItem}
                  deleteAction={deleteUser}
                  fetchAction={fetchUsers}
                />
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>Role</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      users?.length ? (
                        users.map((user, index) => (
                          <tr className="hover" key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td><div className="badge badge-primary gap-2">{user.role.name}</div></td>
                            <td>
                              <div className="btn-group">
                                <button className="btn btn-sm"
                                  onClick={() => handleShowEditModal(user)}>
                                  <PencilIcon className="h-4 w-4 text-success" />
                                </button>
                                <button className="btn btn-sm"
                                  onClick={() => handleShowConfirmModal(user)}>
                                  <TrashIcon className="h-4 w-4 text-error" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="text-center">
                          <td colSpan={4}>No data</td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default User
