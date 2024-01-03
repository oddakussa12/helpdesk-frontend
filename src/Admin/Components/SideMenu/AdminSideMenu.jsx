import { Link } from "react-router-dom";
import { UserCircleIcon, ArrowLeftOnRectangleIcon, TicketIcon, QuestionMarkCircleIcon, Cog6ToothIcon, UsersIcon, ChartBarIcon, ChartPieIcon } from '@heroicons/react/24/solid';
import useSideMenuService from "./Api/sideMenu.Service";
import { useNavigate } from "react-router-dom";

const AdminSideMenu = () => {

    const { logout } = useSideMenuService();
    const navigate = useNavigate();

    const signout = async () => {
        try {
          await logout();
          localStorage.clear();
          sessionStorage.clear();
          navigate('/');
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <>
            <li className="hover-bordered"><Link to="" style={{ fontSize: '32px' }}>Help Desk</Link></li>
            <li className="hover-bordered mt-5">
                <Link to='dashboard' className="py-3">
                    <ChartBarIcon className="h-6 w-6" />
                    Dashboard
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='charts' className="py-3">
                    <ChartPieIcon className="h-6 w-6" />
                    Visualization
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='settings' className="py-3" >
                    <Cog6ToothIcon className="h-6 w-6" />
                    Settings
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='tickets' className="py-3" >
                    <TicketIcon className="h-6 w-6" />
                    Tickets
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='users' className="py-3">
                    <UsersIcon className="h-6 w-6" />
                    Users
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='faqs' className="py-3">
                    <QuestionMarkCircleIcon className="h-6 w-6" />
                    FAQs
                </Link>
            </li>
            <li className="hover-bordered mt-2">
                <Link to='profile' className="py-3">
                    <UserCircleIcon className="h-6 w-6" />
                    Profile
                </Link>
            </li>
            <li className="hover-bordered mt-2" onClick={() => signout()}>
                <Link to='/' className="py-3">
                    <ArrowLeftOnRectangleIcon className="h-6 w-6" />
                    Signout
                </Link>
            </li>
        </>
    )
}

export default AdminSideMenu
