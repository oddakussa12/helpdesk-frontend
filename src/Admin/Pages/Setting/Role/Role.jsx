import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

import AddRole from "./Modals/AddRole";
import EditRole from "./Modals/EditRole";
import ConfirmModal from "../../../../common/ConfirmModal";
import useRoleService from "./Api/roleService";

const Role = () => {
    const [roles, setRoles] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    const { getAllRoles, createRole, updateRole, deleteRole } = useRoleService();

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleShowEditModal = role => {
        setSelectedItem(role);
        setShowEditModal(true);
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleShowConfirmModal = (priority) => {
        setSelectedItem(priority);
        setShowConfirmModal(true);
    }
    const handleCloseConfirmModal = () => setShowConfirmModal(false);

    const handleCloseEditModal = () => setShowEditModal(false);

    const fetchRole = async () => {
        try {
            const response = await getAllRoles();
            setRoles(response.data);
        } catch (err) {
            console.log("Error ", err);
        }
    }

    useEffect(() => {
        fetchRole();
    }, []);
    return (
        <div>
            <div className="card bg-base-100 col-span-1" >
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title">Roles</h2>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <label
                                className="btn btn-warning btn-sm"
                                onClick={() => handleShowModal()}>Add</label>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <AddRole
                            showModal={showModal}
                            handleCloseModal={handleCloseModal}
                            fetchRole={fetchRole}
                            createRole={createRole}
                        />
                        <EditRole
                            showEditModal={showEditModal}
                            handleCloseEditModal={handleCloseEditModal}
                            fetchRole={fetchRole}
                            updateRole={updateRole}
                            selectedItem={selectedItem}
                        />
                        <ConfirmModal
                            showConfirmModal={showConfirmModal}
                            handleCloseConfirmModal={handleCloseConfirmModal}
                            selectedItem={selectedItem}
                            deleteAction={deleteRole}
                            fetchAction={fetchRole} />
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Role Name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    roles?.length ? (
                                        roles.map((role) => (
                                            <tr className="hover" key={role._id}>
                                                <td>{role.name}</td>
                                                <td>{role.createdAt}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowEditModal(role)}>
                                                            <PencilIcon className="h-4 w-4 text-success" />
                                                        </button>
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowConfirmModal(role)}>
                                                            <TrashIcon className="h-4 w-4 text-error" />
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr className="text-center">
                                            <td colSpan="3" className="text-error" >No data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Role
