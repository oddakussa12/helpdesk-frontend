import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useUserService from "../Api/user.service";

const EditUser = (props) => {

    const { showEditModal, handleCloseEditModal, updateUser, fetchUsers, selectedItem } = props;
    const { fetchRoles, fetchLevels } = useUserService();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({defaultValues:{
        name:selectedItem.name,
        phone:selectedItem.phone,
        email:selectedItem.email,
        password:selectedItem.password,
    }});

    const role = watch('role');

    const [roles, setRoles] = useState([]);
    const [levels, setLevels] = useState([]);

    const updateUserData = async (data) => {
        try {
            const finalData = {...data, id:selectedItem._id}
            await updateUser(finalData);
            fetchUsers();
            handleCloseEditModal();
        } catch (err) {
            console.log(err);
        }
    }

    const fetchAllRoles = async () => {
        
        try {
            const response = await fetchRoles();
            setRoles(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const fetchAllLevels = async () => {
        try {
            const response = await fetchLevels();
            setLevels(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchAllRoles();
        fetchAllLevels();
    }, []);

    return (
        <div>
            <input type="checkbox" readOnly checked={showEditModal} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => handleCloseEditModal()}
                    >✕</label>
                    <h3 className="text-lg font-bold">Edit user</h3>
                    <form className="mt-5" onSubmit={handleSubmit(updateUserData)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Full name</span>
                            </label>
                            <input type="text"
                                placeholder="Type here"
                                className="input input-bordered input-md w-full"
                                defaultValue={selectedItem.name}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required",
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "The minimum character allowed is 3",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "The maximum character allowed is 20",
                                    },
                                })}
                            />
                            {errors.name && (
                                <small className="text-error">{errors.name?.message}</small>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Phone number</span>
                            </label>
                            <input type="number"
                                placeholder="Type here"
                                className="input input-bordered input-md w-full"
                                defaultValue={selectedItem.phone}
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: "Phone number is required",
                                    },
                                    minLength: {
                                        value: 10,
                                        message: "The minimum character allowed is 10",
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: "The maximum character allowed is 10",
                                    },
                                })}
                            />
                            {errors.phone && (
                                <small className="text-error">{errors.phone?.message}</small>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                placeholder="Type here"
                                className="input input-bordered input-md w-full"
                                defaultValue={selectedItem.email}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required",
                                    },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter valid email format"
                                    },
                                })}
                            />
                            {errors.email && (
                                <small className="text-error">{errors.email?.message}</small>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                placeholder="Type here"
                                className="input input-bordered input-md w-full"
                                defaultValue={selectedItem.password}
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required",
                                    }
                                })}
                            />
                            {errors.password && (
                                <small className="text-error">{errors.password?.message}</small>
                            )}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register("role", {
                                    required: {
                                        value: true,
                                        message: "Please select user role.",
                                    }
                                })}
                                defaultValue="">
                                <option value="" disabled>Select user role</option>
                                {
                                    roles.map((role, index) => (
                                        <option value={role._id} key={index} >{role.name}</option>
                                    ))
                                }
                            </select>
                            {errors.role && (
                                <small className="text-error">{errors.role?.message}</small>
                            )}
                        </div>
                        {
                            role === "6474de39841027567ca95e38" && (
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Level</span>
                                    </label>
                                    <select className="select select-bordered w-full"
                                        {...register("level", {
                                            required: {
                                                value: true,
                                                message: "Please select support level",
                                            }
                                        })}
                                        defaultValue="">
                                        <option value="" disabled>Select support level</option>
                                        {
                                            levels.map((level, index) => (
                                                <option value={level._id} key={index}>{level.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.level && (
                                        <small className="text-error">{errors.level?.message}</small>
                                    )}
                                </div>
                            )
                        }

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

export default EditUser
