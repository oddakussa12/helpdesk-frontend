
const SupportProfile = () => {
  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <h2 className="card-title">Account Management</h2>
          <div className="overflow-x-auto">
            <div className="flex gap-8">
              <div className="basis-3/4">
                <div className="card bg-base-200 text-dark-content" style={{minHeight:'450px'}} >
                  <div className="card-body items-center text-center">
                    <div className="avatar flex flex-col justify-center items-center">
                      <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                        <img src="/pp.jpg" />
                      </div>
                      <p className="mt-4">Odda Kussa</p>
                      <small>Support - Level one</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="basis-1/4">
                <div className="card w-96 bg-base-200 shadow-sm">
                  <div className="card-body">
                    <b>Update your password</b>
                    <form className="mt-2">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Old password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">New password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Confirm password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
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
    </div>
  )
}

export default SupportProfile