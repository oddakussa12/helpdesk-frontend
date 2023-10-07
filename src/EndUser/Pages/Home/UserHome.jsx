import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useUserTicketService from "./Api/userTicket.service";
import { EyeIcon, TrashIcon } from "@heroicons/react/24/solid";
import ConfirmModal from "../../../common/ConfirmModal";

const UserHome = () => {

  const { getAllTickets, updateTicket, deleteTicket,
    changeTicketStatus, } = useUserTicketService();

  const [tickets, setTickets] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const handleShowConfirmModal = (ticket) => {
    setSelectedItem(ticket);
    setShowConfirmModal(true);
  }
  const handleCloseConfirmModal = () => setShowConfirmModal(false);

  const fetchMyTickets = async () => {
    try {
      setIsLoading(true);
      const response = await getAllTickets();
      setTickets(response.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  }

  useEffect(() => {
    fetchMyTickets();
  }, [])

  return (
    <div className="mt-10">
      <ConfirmModal
        showConfirmModal={showConfirmModal}
        deleteAction={deleteTicket}
        fetchAction={fetchMyTickets}
        handleCloseConfirmModal={handleCloseConfirmModal}
        selectedItem={selectedItem}
      />
      {
        tickets?.length ? (
          <div style={{ marginTop: '60px' }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid-cols-1">
                <h5 className='text-2xl'>Your tickets</h5>
              </div>
              <div className="grid grid-cols-1 place-items-end">
                <Link
                  className="btn btn-warning btn-sm"
                  to="create-ticket">Create Ticket
                </Link>
              </div>
            </div>
            <div className="overflow-x-auto mt-10">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Issue</th>
                    <th>Replied ?</th>
                    <th>Status</th>
                    <th>Priority</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket, index) => (
                    <tr key={index}>
                      <td>
                        <b>{ticket.subject}</b> <br />
                        {ticket.description}
                      </td>
                      <td>
                        {ticket?.response ? (
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
                      <td>
                        <div className="badge badge-primary gap-2">
                          {ticket?.status?.name}
                        </div>
                      </td>
                      <td>
                        <div className="badge badge-info gap-2">
                          {ticket?.priority?.name}
                        </div>
                      </td>
                      <td>
                        <div className="btn-group">
                          <Link className="btn btn-sm btn-info" to={`view-ticket/${ticket._id}`}>
                            <EyeIcon className="h-5 w-5" /> View
                          </Link>
                          <button className="btn btn-sm btn-error"
                            onClick={() => handleShowConfirmModal(ticket)}>
                            <TrashIcon className="h-5 w-5" />  Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          isLoading ? (
              <div className="text-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
          ) :(
            <div className="hero bg-base-100" style={{height:"500px"}}>
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Welcome, Odda</h1>
                  <p className="py-6">It seems you have't created any tickets yet.</p>
                  <Link to="create-ticket" className="btn btn-warning"
                    style={{ borderRadius: '2px' }}
                  >Create your first ticket
                  </Link>
                </div >
              </div >
            </div >
          )
        )
      }
    </div >
  )
}

export default UserHome
