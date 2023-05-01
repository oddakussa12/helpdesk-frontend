import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <Link className=" text-warning normal-case text-xl" to="/">
                        Help Desk
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="px-1">
                        <li>
                            <Link className="text-warning" to="/login" >Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
