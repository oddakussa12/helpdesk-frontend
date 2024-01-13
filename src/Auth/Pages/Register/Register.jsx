import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import httpCommon from "../../../axios";

const SIGNUP_URL = "/auth/signup";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const handleSignup = async (data) => {
        try {
            setIsLoading(true);
            const response = await httpCommon.post(
                SIGNUP_URL,
                data,
                {
                    withCredentials: true,
                    "Access-Control-Allow-Origin": "*",
                }
            );

            const access_token = response?.data?.access_token;
            const user = response?.data;
            const roles = [response?.data?.role];

            setAuth({ access_token, user, roles });
            navigate("/home");
        } catch (err) {
            setIsLoading(false);
            setErrMsg("Error! Registration failed.");
            errRef.current.focus();
        }
    };

    return (
        <div className="card lg:card-side bg-base-200 shadow-xl"
            style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
            <figure><img src="/login-image.png" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Create a new account</h2>
                <div
                    ref={errRef}
                    className={errMsg ? "alert alert-error shadow-lg" : "offscreen"}>
                    <div>
                        {errMsg ? (<svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>) : ''
                        }
                        <span>{errMsg}</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Full name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Full name"
                            autoFocus
                            className="input input-bordered"
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
                                    value: 20,
                                    message: "The maximum character allowed is 50",
                                },
                            })}
                        />
                        {errors.name && (
                            <small className="text-error">{errors.name?.message}</small>
                        )}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input input-bordered"
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
                            <span className="label-text">Phone number</span>
                        </label>
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className="input input-bordered"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone number is required",
                                },
                                pattern: {
                                    value: /^[0-9+-]+$/,
                                    message: "Value must be a phone number"
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
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Type password"
                            className="input input-bordered"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 8,
                                    message: "The minimum character allowed is 8",
                                },
                                maxLength: {
                                    value: 20,
                                    message: "The maximum character allowed is 20",
                                },
                            })}
                        />
                        {errors.password && (
                            <small className="text-error">{errors.password?.message}</small>
                        )}
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary mt-10" type="submit"
                            style={{ width: '120px' }}>
                            {isLoading ? <span className="loading loading-spinner"></span> : "Signup"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
