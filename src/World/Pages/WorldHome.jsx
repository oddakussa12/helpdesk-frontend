import { Link } from "react-router-dom";

const WorldHome = () => {
    return (
        <div className='mt-5 text-center' style={{ maxWidth: '1000px', margin: 'auto' }} >
            <div className="card  bg-base-100 shadow-sm mt-10">
                <div className="card-body">
                    <h1 className="text-4xl">Search everything here...</h1>
                    <div className="form-control my-10" style={{ marginBottom: '100px' }}>
                        <div className="input-group">
                            <input type="text" placeholder="Search…" className="input input-bordered sm:w-full" />
                            <button className="btn btn-square">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
                            style={{ height: "200px", maxWidth: "50%", padding: '30px' }}>
                            <p>Checkout frequently asked question that might help you with your issues</p>
                            <Link to="faqs" className="btn btn-warning" style={{ width: "100%" }} >Go To FAQs</Link>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center"
                            style={{ height: "200px", maxWidth: '50%', padding: '30px' }}>
                            <p>Please create your ticket to get support for your issues</p>
                            <Link to="/home/create-ticket" className="btn btn-warning" style={{ width: "100%" }} >Create Ticket</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorldHome
