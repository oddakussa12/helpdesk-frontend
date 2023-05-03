import { Link } from "react-router-dom"

const UserHome = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome, Odda</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link to="create-ticket" className="btn btn-warning"
            style={{borderRadius:'2px'}}
            >Create your first ticket
            </Link>
          </div>
        </div>
      </div>
      <h5 className='text-2xl mt-20'>Your tickets</h5>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>

              <th>Issue</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
              <td>Open</td>
              <td>view</td>
            </tr>
            {/* row 2 */}
            <tr className='active'>
              <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
              <td>Open</td>
              <td>view</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sit corrupti nulla</th>
              <td>Open</td>
              <td>view</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserHome
