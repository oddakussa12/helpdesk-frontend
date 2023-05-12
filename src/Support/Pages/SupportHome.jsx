const SupportHome = () => {
  return (
      <div className="px-3 mt-10">
        <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
          <div className="card-body">
            <h2 className="card-title">New tickets</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>User email</th>
                    <th>Status</th>
                    <th>Created at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <td>Quality Control Specialist</td>
                    <td>oddakussa@outlook.com</td>
                    <td>
                      <div className="badge badge-success gap-2">
                        Closed
                      </div>
                    </td>
                    <td>March, 22, 2023</td>
                    <td>View</td>
                  </tr>
                  <tr className="hover">
                    <td>Quality Control Specialist</td>
                    <td>oddakussa@outlook.com</td>
                    <td>
                    <div className="badge badge-info gap-2">
                        Open
                      </div>
                    </td>
                    <td>March, 22, 2023</td>
                    <td>View</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  )
}

export default SupportHome
