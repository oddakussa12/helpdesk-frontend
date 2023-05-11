import { Link } from "react-router-dom"

const SideMenu = () => {
    return (
        <>
            <li>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                        <img src="/pp.jpg" />
                    </div>
                </div>
            </li>
            <li><Link to='profile' >Profile</Link></li>
            <li><a>Tickets</a></li>
        </>
    )
}

export default SideMenu
