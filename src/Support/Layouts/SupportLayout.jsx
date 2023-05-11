import SideMenu from "../Components/SideMenu";
import SupportNav from "../Components/SupportNav";
import { Outlet } from "react-router-dom";

const SupportLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <div className="navbar bg-base-100 lg:hidden">
                        <div className="flex-1">
                            <a className="btn btn-ghost normal-case text-xl text-warning">Help Desk</a>
                        </div>
                        <div className="flex-none">
                            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost drawer-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                    </div>
                    <SupportNav />
                    <hr />
                    <div className="p-3" >
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <SideMenu />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SupportLayout
