import { Link } from "react-router-dom";
import { UserCircleIcon, ArrowLeftOnRectangleIcon, HomeIcon, TicketIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const SideMenu = () => {
    return (
        <>
            <li className="hover-bordered"><Link to="" style={{ fontSize: '28px' }}>Help Desk</Link></li>
            <li className="hover-bordered">
                <Link to='' >
                    <TicketIcon className="h-6 w-6" />
                    Tickets
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='faqs' >
                    <QuestionMarkCircleIcon className="h-6 w-6" />
                    FAQs
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='profile' >
                    <UserCircleIcon className="h-6 w-6" />
                    Profile
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='/' >
                    <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    Signout
                </Link>
            </li>
        </>
    )
}

export default SideMenu
