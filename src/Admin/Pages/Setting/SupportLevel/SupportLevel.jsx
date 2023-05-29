import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

import AddLevel from "./Modals/AddLevel";
import EditLevel from "./Modals/EditLevel";
import ConfirmModal from "../../../../common/ConfirmModal";
import useSupportLevelService from "./Api/supportLevel.service";

const SupportLevel = () => {
    const [levels, setLevels] = useState({});
    const [selectedItem, setSelectedItem] = useState({});

    const { getAllLevels, createLevel, updateLevel, deleteLevel } = useSupportLevelService();

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleShowEditModal = level => {
        setSelectedItem(level);
        setShowEditModal(true);
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleShowConfirmModal = (level) => {
        setSelectedItem(level);
        setShowConfirmModal(true);
    }
    const handleCloseConfirmModal = () => setShowConfirmModal(false);

    const handleCloseEditModal = () => setShowEditModal(false);

    const fetchLevel = async () => {
        try {
            const response = await getAllLevels();
            setLevels(response.data);
        } catch (err) {
            console.log("Error ", err);
        }
    }

    useEffect(() => {
        fetchLevel();
    }, []);
    return (
        <div>
            <div className="card bg-base-100 col-span-1" >
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid-cols-1">
                            <h2 className="card-title">Support Level</h2>
                        </div>
                        <div className="grid grid-cols-1 place-items-end">
                            <label
                                className="btn btn-warning btn-sm"
                                onClick={() => handleShowModal()}>Add</label>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <AddLevel
                            showModal={showModal}
                            handleCloseModal={handleCloseModal}
                            createLevel={createLevel}
                            fetchLevel={fetchLevel}
                        />
                        <EditLevel
                            showEditModal={showEditModal}
                            handleCloseEditModal={handleCloseEditModal}
                            fetchLevel={fetchLevel}
                            updateLevel={updateLevel}
                            selectedItem={selectedItem}
                        />
                        <ConfirmModal
                            showConfirmModal={showConfirmModal}
                            handleCloseConfirmModal={handleCloseConfirmModal}
                            selectedItem={selectedItem}
                            deleteAction={deleteLevel}
                            fetchAction={fetchLevel} />
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Priority Name</th>
                                    <th>Created at</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    levels?.length ? (
                                        levels.map((level) => (
                                            <tr className="hover" key={level._id}>
                                                <td>{level.name}</td>
                                                <td>{level.createdAt}</td>
                                                <td>
                                                    <div className="btn-group">
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowEditModal(level)}>
                                                            <PencilIcon className="h-4 w-4 text-success" />
                                                        </button>
                                                        <button className="btn btn-sm"
                                                            onClick={() => handleShowConfirmModal(level)}>
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

export default SupportLevel
