
const AdminProfile = () => {
    return (
      <div className="px-3 mt-10">
        <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
          <div className="card-body">
            <h2 className="card-title">Account Management</h2>
            <div className="overflow-x-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="card bg-base-200 col-span-2" style={{ minHeight: '450px' }} >
                  <div className="card-body">
                    <div className="avatar flex flex-col items-center">
                      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                        <img src="/pp.jpg" />
                      </div>
                      <p className="mt-4">Odda Kussa</p>
                      <small>Support - Level one</small>
                    </div>
                    <form className="mt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">First name</span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Last name</span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Phone number</span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Email</span>
                          </label>
                          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-sm" />
                        </div>
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