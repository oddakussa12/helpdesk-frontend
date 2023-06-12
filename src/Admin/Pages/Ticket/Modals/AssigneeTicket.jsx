import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useUserService from "../../User/Api/user.service";
import useAdminTicketService from "../Api/ticket.service";

const AssigneeTicket = (props) => {

    const { showAssignModal, handleCloseAssignModal, fetchTickets, selectedItem } = props;
    const { assignTicket } = useAdminTicketService();
    const { fetchUsersByRole } = useUserService();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [users, setUsers] = useState([]);

    const assignTicketToUser = async (data) => {
        try {
            await assignTicket(selectedItem._id, data);
            fetchTickets();
            handleCloseAssignModal();
        } catch (err) {
            console.log(err);
        }
    }

    const getUsersByRole = async () => {
        try {
            const response = await fetchUsersByRole("Support");
            setUsers(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUsersByRole();
    }, []);

    return (
        <div>
            <input type="checkbox" readOnly checked={showAssignModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => handleCloseAssignModal()}
                    >✕</label>
                    <h3 className="text-lg font-bold">Assignee Support Person</h3>
                    <form className="mt-5" onSubmit={handleSubmit(assignTicketToUser)}>
                        
                       
                        
                        
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Support Person</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("user_id", {
                                    required: {
                                        value: true,
                                        message: "Please select support person.",
                                    }
                                })}
                                defaultValue="">
                                <option value="" disabled>Select Support Person</option>
                                {
                                    users.map((user, index) => (
                                        <option value={user._id} key={index} >{user.name}</option>
                                    ))
                                }
                            </select>
                            {errors.user_id && (
                                <small className="text-error">{errors.user_id?.message}</small>
                            )}
                        </div>
                        <div className="text-end mt-10">
                            <button className="btn"
                                onClick={handleCloseAssignModal}>
                                Cancel
                            </button>
                            <button className="btn btn-warning ml-4" type="submit">
                                Assignee
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AssigneeTicket
