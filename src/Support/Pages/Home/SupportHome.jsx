import { Link } from "react-router-dom";
import { useAssignedToMeQuery } from "./Api/supportTicketApi";

const SupportHome = () => {

  const { data: tickets, isLoading } = useAssignedToMeQuery();

  return (
    <div className="px-3 mt-10">
      <div className="card bg-base-100 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
        <div className="card-body">
          <h2 className="card-title">Tickets assigned to you</h2>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Replied ?</th>
                  <th>User name</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Created at</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  tickets?.length ? (
                    tickets.map((ticket, index) => (
                      <tr className="hover" key={index}>
                        <td>{ticket?.subject}</td>
                        <td>{
                          ticket?.response ? (
                            <div className="badge badge-success gap-2">
                              YES
                            </div>
                          ) : (
                            <div className="badge badge-error gap-2">
                              NO
                            </div>
                          )
                        }
                        </td>
                        <td>{ticket?.created_by?.name}</td>
                        <td>
                          <div className="badge badge-success gap-2">
                            {ticket?.priority?.name}
                          </div>
                        </td>
                        <td>
                          <div className="badge badge-info gap-2">
                            {ticket?.status?.name}
                          </div>
                        </td>
                        <td>{ticket?.createdAt}</td>
                        <td>
                          <div className="btn-group">
                            <button className="btn btn-sm">
                              <Link to={`/support/view-ticket/${ticket._id}`}>View</Link>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))

                  ) : (
                    <tr className="text-center text-success">
                      <td colSpan={7}>
                        {!isLoading ? (
                          <p>You are not assigned to any ticket yet.</p>
                        ) : (
                          <span className="loading loading-spinner"></span>
                        )
                        }
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </div >
  )
}

export default SupportHome
