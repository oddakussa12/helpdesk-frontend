import SideMenu from "../Components/SideMenu";
import SupportNav from "../Components/SupportNav";
import { Outlet } from "react-router-dom";

const SupportLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
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
