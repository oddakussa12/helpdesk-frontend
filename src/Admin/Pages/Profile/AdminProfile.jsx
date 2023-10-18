import { useEffect, useState } from "react";
import useProfileService from "./Api/profile.service";
import { useForm } from "react-hook-form";

const AdminProfile = () => {

  const { fetchProfile, updateProfile } = useProfileService();

  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBtnLoading, setIsBtnLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: profile?.name,
      phone: profile?.phone,
      email: profile?.email,
    }
  });

  const getProfile = async () => {
    try {
      const response = await fetchProfile();
      setProfile(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  const updateUserProfile = async (data) => {
    try {
      setIsBtnLoading(true);
      await updateProfile(data);
      getProfile();
      setIsBtnLoading(false);
    } catch (err) {
      setIsBtnLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="px-3 mt-10">

      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <h2 className="card-title">Account Management</h2>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              <div className="card bg-base-200 col-span-2" style={{ minHeight: '450px' }} >
                {!isLoading ?
                  <div className="card-body">
                    <div className="avatar flex flex-col items-center">
                      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                        <img src="/pp.jpg" />
                      </div>
                      <p className="mt-4">{profile[0]?.name}</p>
                      <small>{profile[0]?.role?.name}</small>
                    </div>
                    <form className="mt-2" onSubmit={handleSubmit(updateUserProfile)}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">First name</span>
                          </label>
                          <input type="text" placeholder="Type here"
                            className="input input-bordered w-full max-w-sm"
                            defaultValue={profile[0]?.name}
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
                            })} />
                          {errors.name && (
                            <small className="text-error">{errors.name?.message}</small>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Phone number</span>
                          </label>
                          <input type="text" placeholder="Type here"
                            className="input input-bordered w-full max-w-sm"
                            defaultValue={profile[0]?.phone}
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
                            })} />
                          {errors.phone && (
                            <small className="text-error">{errors.phone?.message}</small>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="text" placeholder="Type here"
                            className="input input-bordered w-full max-w-sm"
                            defaultValue={profile[0]?.email}
                            {...register("email", {
                              required: {
                                value: true,
                                message: "Email is required",
                              },
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter valid email format"
                              },
                            })} />
                          {errors.email && (
                            <small className="text-error">{errors.email?.message}</small>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center mt-10">
                        <button className="btn btn-warning"
                          type="submit"
                          style={{ width: '150px', borderRadius: '2px' }}>
                          {isBtnLoading ? <span className="loading loading-spinner"></span> : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                  :
                  <div className="text-center">
                    <span className="loading loading-spinner mt-10"></span>
                  </div>
                }
              </div>
              <div className="card bg-base-200 col-span-1">
                <div className="card-body items-center">
                  <b>Update your password</b>
                  <form className="mt-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Old password</span>
                      </label>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">New password</span>
                      </label>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm password</span>
                      </label>
                      <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                    </div>
                    <div className="flex justify-center mt-10">
                      <button className="btn btn-warning"
                        style={{ width: '150px', borderRadius: '2px' }}>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile