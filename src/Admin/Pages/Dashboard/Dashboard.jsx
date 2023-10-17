import { useState, useEffect } from 'react';
import {
    TicketIcon, CheckBadgeIcon, RocketLaunchIcon, DocumentDuplicateIcon,
    LockClosedIcon, ChatBubbleLeftRightIcon, UserCircleIcon, UserGroupIcon
} from "@heroicons/react/24/solid";
import useAdminDashboardService from './Api/dashboard.service';

const Dashboard = () => {
    const { getUserRoleCount, getTicketCount } = useAdminDashboardService();

    const [userCount, setUserCount] = useState({});
    const [ticketCount, setTicketCount] = useState({});

    const fetchUserData = async () => {
        try {
            const response = await getUserRoleCount();
            setUserCount(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    const fetchTicketData = async () => {
        try {
            const response = await getTicketCount();
            setTicketCount(response.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUserData();
        fetchTicketData();
    }, []);

    return (
        <div>
            <div className="flex flex-row flex-wrap">
                <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                    <div className="px-3 py-2">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex flex-nowrap">
                                    <div className="basis-3/4">
                                        <h2 className="card-title"></h2>
                                        <p className="text-4xl">{ticketCount?.Closed ? ticketCount?.Closed : 0}</p>
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
                                        <p className="text-4xl">{ticketCount?.Open ? ticketCount?.Open : 0}</p>
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
                                        <p className="text-4xl">{ticketCount?.Pending ? ticketCount?.Pending : 0}</p>
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
                                        <p className="text-4xl">
                                            {(ticketCount?.Closed ? ticketCount?.Closed : 0) +
                                                (ticketCount?.Open ? ticketCount?.Open : 0) +
                                                (ticketCount?.Pending ? ticketCount?.Pending : 0)}</p>
                                        <p>Total tickets</p>
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
                                        <p className="text-4xl">{userCount?.admin ? userCount?.admin : 0}</p>
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
                                        <p className="text-4xl">{userCount?.support ? userCount?.support : 0}</p>
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
                                        <p className="text-4xl">{userCount?.user ? userCount?.user : 0}</p>
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
                                        <p className="text-4xl">{
                                            (userCount?.admin ? userCount?.admin : 0) +
                                            (userCount?.support ? userCount?.support : 0) +
                                            (userCount?.user ? userCount?.user : 0)}</p>
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

            <div className="px-3 mt-5">
                <div className="card bg-base-100 shadow-md " style={{ borderRadius: '5px' }}>
                    <div className="card-body">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-1">
                                <h2 className="card-title">Performance</h2>
                            </div>
                            {/* <div className="grid col-span-1 place-items-end">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handlePriorityChange}
                                defaultValue="">
                                <option value="" disabled>Filter by Priority</option>
                                {
                                    priorities.map((priority, index) => (
                                        <option value={priority.name} key={index} >{priority.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="grid col-span-1 place-items-end">
                            <select className="select select-bordered w-full max-w-xs"
                                onChange={handleStatusChange}
                                defaultValue="">
                                <option value="" disabled>Filter by Status</option>
                                {
                                    statuses.map((status, index) => (
                                        <option value={status.name} key={index} >{status.name}</option>
                                    ))
                                }
                            </select>
                        </div> */}
                        </div>
                        <div className="overflow-x-auto">
                            <div className="card bg-base-100" style={{ minHeight: '200px' }} >
                                <div className="card-body">
                                    <table className="table w-full">
                                        <thead>
                                            <tr>
                                                <th>Support name</th>
                                                <th>Total assigned tickets</th>
                                                <th>Total closed tickets</th>
                                                <th>Total pending tickets</th>
                                                <th>Total open tickets</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                        </tbody>
                                    </table>
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