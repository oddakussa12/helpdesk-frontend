import { useState, useEffect } from 'react';
import { TicketIcon, CheckBadgeIcon, RocketLaunchIcon, DocumentDuplicateIcon,
    LockClosedIcon, ChatBubbleLeftRightIcon, UserCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import useAdminDashboardService from './Api/dashboard.service';

const Dashboard = () => {
    const {getUserRoleCount} = useAdminDashboardService();

    const [dashboardData, setDashboardData] = useState({});

    const fetchUserData = async () => {
        try{
            const response = await getUserRoleCount();
            setDashboardData(response.data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className="flex flex-row flex-wrap">
            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                <div className="px-3 py-2">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-nowrap">
                                <div className="basis-3/4">
                                    <h2 className="card-title"></h2>
                                    <p>TICKETS</p>
                                    <p className="text-4xl">43</p>
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
                                    <p className="text-4xl">43</p>
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
                                    <p className="text-4xl">43</p>
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
                                    <p className="text-4xl">43</p>
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

            <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                <div className="px-3 py-2">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="flex flex-nowrap">
                                <div className="basis-3/4">
                                    <h2 className="card-title"></h2>
                                    <p>TICKETS</p>
                                    <p className="text-4xl">{dashboardData?.admin}</p>
                                    <p>Total Admin Users</p>
                                </div>
                                <div className="basis-1/4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                            <span>
                                                <LockClosedIcon className="h-14 w-14 text-success" />
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
                                    <p className="text-4xl">{dashboardData?.support}</p>
                                    <p>Total Support Users</p>
                                </div>
                                <div className="basis-1/4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                            <span>
                                                <ChatBubbleLeftRightIcon className="h-14 w-14 text-info" />
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
                                    <p className="text-4xl">{dashboardData?.user}</p>
                                    <p>Total Users</p>
                                </div>
                                <div className="basis-1/4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                            <span>
                                                <UserCircleIcon className="h-14 w-14 text-error" />
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
                                    <p className="text-4xl">{dashboardData?.admin + dashboardData?.support + dashboardData?.user}</p>
                                    <p>Total User Accounts</p>
                                </div>
                                <div className="basis-1/4">
                                    <div className="avatar placeholder">
                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                            <span>
                                                <UserGroupIcon className="h-14 w-14 text-warning" />
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
    )
}

export default Dashboard