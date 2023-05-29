
const SupportNav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <div className="lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <span tabIndex={0} className="inline-flex items-baseline">
                        <img src="/pp.jpg" alt=""
                            className="self-center w-12 h-12 rounded-full mx-1 ring ring-warning ring-offset-base-100 ring-offset-" />
                        <span className="mt-3">Odda Kussa</span>
                    </span>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
    )
}

export default SupportNav
