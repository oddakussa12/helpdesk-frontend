import { useState, useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";
import AddIssueCategory from "./Modals/AddIssueCategory";
import EditIssueCategory from "./Modals/EditIssueCategory";
import ConfirmModal from "../../../../common/ConfirmModal";
import useIssueCategoryService from "./Api/issueCategory.service";

const IssueCategory = () => {
    const [categories, setCategories] = useState([]);
    const [selectedItem, setSelectedItem] = useState({});

    const { getAllCategories, createCategory, updateCategory, deleteCategory } = useIssueCategoryService();

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [showEditModal, setShowEditModal] = useState(false);
    const handleShowEditModal = category => {
        setSelectedItem(category);
        setShowEditModal(true);
    }

    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const handleShowConfirmModal = (category) => {
        setSelectedItem(category);
        setShowConfirmModal(true);
    }
    const handleCloseConfirmModal = () => setShowConfirmModal(false);

    const handleCloseEditModal = () => setShowEditModal(false);

    const fetchCategories = async () => {
        try {
            const response = await getAllCategories();
            setCategories(response.data.categories);
        } catch (err) {
            console.log("Error ", err);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <div className="card bg-base-100 col-span-1">
            <div className="card-body">
                <div className="grid grid-cols-2 gap-4">
                    <div className="grid-cols-1">
                        <h2 className="card-title">Issue Categories</h2>
                    </div>
                    <div className="grid grid-cols-1 place-items-end">
                        <button className="btn btn-warning btn-sm"
                            onClick={() => handleShowModal()}
                        >Add
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <AddIssueCategory
                        showModal={showModal}
                        handleCloseModal={handleCloseModal}
                        fetchCategories={fetchCategories}
                        createCategory={createCategory}
                    />
                    <EditIssueCategory
                        showEditModal={showEditModal}
                        handleCloseEditModal={handleCloseEditModal}
                        fetchCategories={fetchCategories}
                        updateCategory={updateCategory}
                        selectedItem={selectedItem}
                    />
                    <ConfirmModal
                        showConfirmModal={showConfirmModal}
                        handleCloseConfirmModal={handleCloseConfirmModal}
                        selectedItem={selectedItem}
                        deleteAction={deleteCategory}
                        fetchAction={fetchCategories}
                    />
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Category Name</th>
                                <th>Created at</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.length ? (
                                categories.map((category, index) => (
                                    <tr className="hover" key={index}>
                                        <td>{category.name}</td>
                                        <td>{category.createdAt}</td>
                                        <td>
                                            <div className="btn-group">
                                                <button className="btn btn-sm">
                                                    <PencilIcon
                                                        onClick={() => handleShowEditModal(category)}
                                                        className="h-4 w-4 text-success" />
                                                </button>
                                                <button className="btn btn-sm">
                                                    <TrashIcon
                                                        onClick={() => handleShowConfirmModal(category)}
                                                        className="h-4 w-4 text-error" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))

                            ) : (
                                <tr className="text-center">
                                    <td colSpan="3" ></td>
                                </tr>
                            )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default IssueCategory
