import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateTicketMutation, useGetTicketCAtegoriesQuery } from "./Api/userTicketApi";

const CreateTicket = () => {
    let navigate = useNavigate();

    const { data: ticketCategory } = useGetTicketCAtegoriesQuery();
    const [createTicket, { isLoading }] = useCreateTicketMutation();

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

                {ticketCategory?.length ?
                    <div>
                        <div className="flex flex-row flex-wrap">
                            {ticketCategory.map((category, index) => (
                                <div className="basis-1/2 md:basis-1/4 lg:basis-1/4" key={index}>
                                    <div className="px-3 py-2">
                                        <div className="card bg-base-100 shadow-xl">
                                            <div className="card-body">
                                                <div className="flex items-center pl-4 border border-gray-100 rounded dark:border-gray-700">
                                                    <input id={`bordered-radio-${category?._id}`} type="radio" value={category?._id}
                                                        className="radio radio-warning"
                                                        {...register("category", {
                                                            required: {
                                                                value: true,
                                                                message: "Please select issue category",
                                                            },
                                                        })} />
                                                    <label htmlFor={`bordered-radio-${category?._id}`} className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{category?.name}</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {errors.category && (
                            <small className="text-error mt-1">{errors.category?.message}</small>
                        )}
                    </div> :
                    <div className="text-center">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                }
                <div className="text-center mt-10" >
                    <button className="btn btn-warning"
                        type="submit"
                        style={{ width: '200px', borderRadius: '2px' }}>
                        {isLoading ? <span className="loading loading-spinner"></span> : "Create"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTicket