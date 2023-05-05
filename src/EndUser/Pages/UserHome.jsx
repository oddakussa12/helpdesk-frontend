import { Link } from "react-router-dom"
import TicketList from "./TicketList"

const UserHome = () => {
  return (
    <div className="mt-10">
      {/* <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome, Odda</h1>
            <p className="py-6">It seems you have't created any tickets yet.</p>
            <Link to="create-ticket" className="btn btn-warning"
              style={{ borderRadius: '2px' }}
            >Create your first ticket
            </Link>
          </div>
        </div>
      </div> */}
      <TicketList />
    </div>
  )
}

export default UserHome
