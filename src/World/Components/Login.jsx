import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="card lg:card-side bg-base-200 shadow-xl"
            style={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
            <figure><img src="/login-image.png" alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">Login to your account</h2>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Type email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="Type password" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="card-actions justify-center">
                        <Link className="btn btn-warning mt-10" to="/home"
                            style={{ width: '100px', borderRadius: '2px' }}>Login
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
