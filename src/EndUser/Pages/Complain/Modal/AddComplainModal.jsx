import { useForm } from "react-hook-form";
import { useCreateComplainMutation } from "../Api/userComplain.service";

const AddComplainModal = (props) => {

    const { showAddComplainModal, handleCloseAddComplainModal, ticketId, fetchTicket } = props;
    const [createComplain] = useCreateComplainMutation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const storeComplain = async (data) => {
        try {
            const finalData = { ...data, ticket: ticketId };
            await createComplain(finalData);
            fetchTicket();
            handleCloseAddComplainModal();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <input type="checkbox" readOnly checked={showAddComplainModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => handleCloseAddComplainModal()}
                    >✕</label>
                    <h3 className="text-lg font-bold">Create a complain</h3>
                    <form className="mt-5" onSubmit={handleSubmit(storeComplain)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Write your complain below</span>
                            </label>
                            <textarea className="textarea textarea-bordered"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "The minimum character allowed is 10",
                                    },
                                    maxLength: {
                                        value: 200,
                                        message: "The maximum character allowed is 200",
                                    },
                                })} >

                            </textarea>
                            {errors.description && (
                                <small className="text-error">{errors.description?.message}</small>
                            )}
                        </div>

                        <div className="text-center mt-10">
                            <button className="btn btn-primary" type="submit">
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddComplainModal
