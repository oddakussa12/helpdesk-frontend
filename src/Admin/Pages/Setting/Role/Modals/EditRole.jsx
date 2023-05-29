import { useForm } from "react-hook-form";

const EditRole = (props) => {

    const {showEditModal, handleCloseEditModal, fetchRole, updateRole, selectedItem} = props;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const updateTicketPriority = async (data) => {
        try{
            const finalData = {...data, id:selectedItem._id};
            await updateRole(finalData);
            fetchRole();
            handleCloseEditModal();
        }catch(err){
            console.log(err);
        }
    }

    return (
        <div>
            <input type="checkbox" readOnly checked={showEditModal}  className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={()=>handleCloseEditModal()}
                    >✕</label>
                    <h3 className="text-lg font-bold">Update Role</h3>
                    <form className="mt-5" onSubmit={handleSubmit(updateTicketPriority)}>
                        <label className="label">
                            <span className="label-text">Role name</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full"
                            defaultValue={selectedItem.name}
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

export default EditRole
