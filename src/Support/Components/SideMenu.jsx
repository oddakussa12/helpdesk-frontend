import { Link } from "react-router-dom"
import { UserCircleIcon, ArrowLeftOnRectangleIcon, HomeIcon } from '@heroicons/react/24/solid'

const SideMenu = () => {
    return (
        <>
            <li className="hover-bordered"><Link to="" style={{ fontSize: '28px' }}>Help Desk</Link></li>
            <li className="hover-bordered">
                <Link to='' >
                    <HomeIcon className="h-6 w-6" />
                    Home
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='profile' >
                    <UserCircleIcon className="h-6 w-6" />
                    Profile
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='signout' >
                    <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    Signout
                </Link>
            </li>
        </>
    )
}

export default SideMenu
