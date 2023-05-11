
const SupportNav = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                {/* <a className="btn btn-ghost normal-case text-xl">Help Desk</a> */}
            </div>
            <div className="flex-none">

                <div className="dropdown dropdown-end">
                    <span tabIndex={0} className="inline-flex items-baseline">
                        <img src="/pp.jpg" alt="" class="self-center w-12 h-12 rounded-full mx-1" />
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
