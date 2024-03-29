import { useForm } from "react-hook-form";
// import useTicketStatusService from "../Api/ticketStatus.service";
import { useCreateTicketStatusMutation } from "../Api/ticketStatus.service";

const AddTicketStatus = (props) => {
    const [addTicketStatus] = useCreateTicketStatusMutation();
    const { showModal, handleCloseModal } = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const createStatus = async (data) => {
        addTicketStatus(data);
        handleCloseModal();
    }

    return (
        <div>
            <input type="checkbox" readOnly checked={showModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => handleCloseModal()}
                    >✕</label>
                    <h3 className="text-lg font-bold">Create ticket status</h3>
                    <form className="mt-5" onSubmit={handleSubmit(createStatus)}>
                        <label className="label">
                            <span className="label-text">Ticket status</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Filed is required",
                                },
                                minLength: {
                                    value: 3,
                                    message: "The minimum character allowed is 3",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "The maximum character allowed is 20",
                                },
                            })}
                        />
                        {errors.name && (
                            <small className="text-error">{errors.name?.message}</small>
                        )}
                        <div className="text-center mt-10">
                            <button className="btn btn-warning" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTicketStatus
