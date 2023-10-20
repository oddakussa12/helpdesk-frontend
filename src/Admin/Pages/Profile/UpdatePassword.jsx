import { useState, useCallback } from 'react';

import useProfileService from "./Api/profile.service";
import { useForm } from "react-hook-form";
import ToastNotification from "../../../common/ToastNotification";

const UpdatePassword = () => {
    const { updatePassword } = useProfileService();

    const [isBtnLoading, setIsBtnLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const [showToast, setShowToast] = useState(false);
    const toggleShowToast = useCallback(() => setShowToast(prevState => !prevState), []);
    const [toastProps, setToastProps] = useState(() => ({
        message: "",
        variant: "success",
    }));

    const updateUserPassword = async (data) => {
        try {
            setIsBtnLoading(true);
            await updatePassword(data);
            setIsBtnLoading(false);

            setToastProps({
                ...toastProps,
                message: "Password updated successfully.",
                variant: "success"
            });
            toggleShowToast();
            setTimeout(() => {
                toggleShowToast();
            }, 3000);
            reset();
        } catch (err) {
            setIsBtnLoading(false);
            setToastProps({
                ...toastProps,
                message: err.response.data.message,
                variant: "error"
            });
            toggleShowToast();
            setTimeout(() => {
                toggleShowToast();
            }, 3000);
            reset();
        }
    }

    return (
        <div>
            <ToastNotification
                showToast={showToast}
                toggleShowToast={toggleShowToast}
                variant={toastProps.variant}
                message={toastProps.message}
            />
            <form className="mt-2" onSubmit={handleSubmit(updateUserPassword)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Old password</span>
                    </label>
                    <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-sm"
                        {...register("old_password", {
                            required: {
                                value: true,
                                message: "Old password is required",
                            },
                            minLength: {
                                value: 6,
                                message: "The minimum character allowed is 6",
                            },
                            maxLength: {
                                value: 20,
                                message: "The maximum character allowed is 20",
                            },
                        })}
                    />
                    {errors.old_password && (
                        <small className="text-error">{errors.old_password?.message}</small>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">New password</span>
                    </label>
                    <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-sm"
                        {...register("new_password", {
                            required: {
                                value: true,
                                message: "New password is required",
                            },
                            minLength: {
                                value: 6,
                                message: "The minimum character allowed is 6",
                            },
                            maxLength: {
                                value: 20,
                                message: "The maximum character allowed is 20",
                            },
                        })}
                    />
                    {errors.new_password && (
                        <small className="text-error">{errors.new_password?.message}</small>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Confirm password</span>
                    </label>
                    <input type="password" placeholder="Type here" className="input input-bordered w-full max-w-sm"
                        {...register("confirm_password", {
                            required: {
                                value: true,
                                message: "Confirm password is required",
                            },
                            minLength: {
                                value: 6,
                                message: "The minimum character allowed is 6",
                            },
                            maxLength: {
                                value: 20,
                                message: "The maximum character allowed is 20",
                            },
                        })} />
                    {errors.confirm_password && (
                        <small className="text-error">{errors.confirm_password?.message}</small>
                    )}
                </div>
                <div className="flex justify-center mt-10">
                    <button className="btn btn-warning"
                        type="submit"
                        style={{ width: '150px', borderRadius: '2px' }}>
                        {isBtnLoading ? <span className="loading loading-spinner"></span> : "Update"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePassword