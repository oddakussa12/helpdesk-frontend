import { useEffect, useState } from "react";
import useSupportDashboardService from "./Api/dashboard.service";
import SideMenu from "../Components/SideMenu";
import SupportNav from "../Components/SupportNav";
import { Outlet } from "react-router-dom";
import { TicketIcon, CheckBadgeIcon, RocketLaunchIcon, DocumentDuplicateIcon } from "@heroicons/react/24/solid";

const SupportLayout = () => {
    const {getDashboardData} = useSupportDashboardService();

    const [dashboardData, setDashboardData] = useState({});

    const fetchDashboardData = async () => {
        try{
            const response = await getDashboardData();
            setDashboardData(response.data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchDashboardData();
    }, []);

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <SupportNav />
                    <hr />
                    <div className="p-3" style={{
                        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%',
                        height:'400px'}}>
                        <div className="flex flex-row flex-wrap">
                            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                                <div className="px-3 py-2">
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <div className="flex flex-nowrap">
                                                <div className="basis-3/4">
                                                    <h2 className="card-title"></h2>
                                                    <p>TICKETS</p>
                                                    <p className="text-4xl">{dashboardData.closedTicketCount}</p>
                                                    <p>Total closed tickets</p>
                                                </div>
                                                <div className="basis-1/4">
                                                    <div className="avatar placeholder">
                                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                            <span>
                                                                <CheckBadgeIcon className="h-14 w-14 text-success" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                                <div className="px-3 py-2">
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <div className="flex flex-nowrap">
                                                <div className="basis-3/4">
                                                    <h2 className="card-title"></h2>
                                                    <p>TICKETS</p>
                                                    <p className="text-4xl">{dashboardData.openTicketCount}</p>
                                                    <p>Total Open tickets</p>
                                                </div>
                                                <div className="basis-1/4">
                                                    <div className="avatar placeholder">
                                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                            <span>
                                                                <DocumentDuplicateIcon className="h-14 w-14 text-info" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                                <div className="px-3 py-2">
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <div className="flex flex-nowrap">
                                                <div className="basis-3/4">
                                                    <h2 className="card-title"></h2>
                                                    <p>TICKETS</p>
                                                    <p className="text-4xl">{dashboardData.pendingTicketCount}</p>
                                                    <p>Total tickets in progress</p>
                                                </div>
                                                <div className="basis-1/4">
                                                    <div className="avatar placeholder">
                                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                            <span>
                                                                <RocketLaunchIcon className="h-14 w-14 text-error" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                                <div className="px-3 py-2">
                                    <div className="card bg-base-100 shadow-xl">
                                        <div className="card-body">
                                            <div className="flex flex-nowrap">
                                                <div className="basis-3/4">
                                                    <h2 className="card-title"></h2>
                                                    <p>TICKETS</p>
                                                    <p className="text-4xl">{dashboardData.totalTicketsAssignedToUser}</p>
                                                    <p>Total assigned tickets</p>
                                                </div>
                                                <div className="basis-1/4">
                                                    <div className="avatar placeholder">
                                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                                            <span>
                                                                <TicketIcon className="h-14 w-14 text-warning" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <SideMenu />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SupportLayout
