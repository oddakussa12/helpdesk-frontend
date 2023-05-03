import { Link } from "react-router-dom"

const NavBar = () => {
    return (

        <div className="bg-base-200 py-2">
            <div className="max-w-7xl mx-auto navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li tabIndex="0">
                                <span className="justify-between cursor-pointer">
                                    Books
                                    <svg
                                        className="fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                    </svg>
                                </span>
                                <ul className="p-2 bg-gray-100">
                                    <li>
                                        <Link to="/">Submenu 1</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Submenu 2</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="form-control mt-3">
                                    <input
                                        type="text"
                                        placeholder="Search books..."
                                        className="input input-bordered input-primary w-full"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-2xl">
                        HelpDesk
                    </Link>
                </div>
                <div className="navbar-end lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className="text-warning" to="/login" >Login</Link>
                        </li>
                        <li>
                            <Link className="text-warning" to="/register" >Register</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/default-avatar.png" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
