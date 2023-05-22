import React from 'react'

const AdminSideMenu = () => {
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
                <Link to='' >
                    <TicketIcon className="h-6 w-6" />
                    Tickets
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='profile' >
                    <UserCircleIcon className="h-6 w-6" />
                    Profile
                </Link>
            </li>
            <li className="hover-bordered">
                <Link to='faqs' >
                    <QuestionMarkCircleIcon className="h-6 w-6" />
                    FAQs
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

export default AdminSideMenu
