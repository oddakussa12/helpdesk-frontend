import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useUserTicketService from "./Home/Api/userTicket.service";

const CreateTicket = () => {
    let navigate = useNavigate();

    const { createTicket } = useUserTicketService();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const storeTicket = async (data) => {
        try {
            await createTicket(data);
            navigate(-1);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div className="grid-cols-1">
                    <h1 className="text-2xl mt-10">Create ticket and get support</h1>
                </div>
                <div className="grid grid-cols-1 place-items-end">
                    <label
                        className="btn btn-warning btn-sm"
                        onClick={() => navigate(-1)}>Back
                    </label>
                </div>
            </div>
            <form className="mt-5" onSubmit={handleSubmit(storeTicket)}>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Issue subject</span>
                    </label>
                    <input type="text"
                        placeholder="Type here"
                        className="input input-bordered input-md w-full"
                        {...register("subject", {
                            required: {
                                value: true,
                                message: "Issue subject is required",
                            },
                            minLength: {
                                value: 5,
                                message: "The minimum character allowed is 5",
                            },
                            maxLength: {
                                value: 100,
                                message: "The maximum character allowed is 100",
                            },
                        })}
                    />
                    {errors.subject && (
                        <small className="text-error mt-1">{errors.subject?.message}</small>
                    )}
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Issue description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered textarea-lg w-full"
                        placeholder="Write detail description of the issue..."
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Issue description is required",
                            },
                            minLength: {
                                value: 20,
                                message: "The minimum character allowed is 20",
                            },
                            maxLength: {
                                value: 300,
                                message: "The maximum character allowed is 300",
                            },
                        })}
                    >
                    </textarea>
                    {errors.description && (
                        <small className="text-error mt-1">{errors.description?.message}</small>
                    )}
                </div>

                <div className="text-center mt-10" >
                    <button className="btn btn-warning"
                        type="submit"
                        style={{ width: '200px', borderRadius: '2px' }}
                    >Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTicket