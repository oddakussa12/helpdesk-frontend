import {
    TicketIcon, CheckBadgeIcon, RocketLaunchIcon, DocumentDuplicateIcon,
    LockClosedIcon, ChatBubbleLeftRightIcon, UserCircleIcon, UserGroupIcon
} from "@heroicons/react/24/solid";
import { useGetUserRoleCountQuery, useGetTicketCountQuery, useGetSupportPerformanceQuery } from './Api/dashboard.service';

const Dashboard = () => {
    const { data: userCountByRole, error, isLoading } = useGetUserRoleCountQuery();
    const { data: ticketCountByStatus } = useGetTicketCountQuery();
    const { data: supportPerformance } = useGetSupportPerformanceQuery();

    return (
        <div>
            <div className="flex flex-row flex-wrap">
                <div className="basis-1/2 md:basis-1/4 lg:basis-1/4">
                    <div className="px-3 py-2">
                        <div className="card bg-base-100 shadow-xl">
                            <div className="card-body">
                                <div className="flex flex-nowrap">
                                    <div className="basis-3/4">
                                        <p className="text-4xl">{ticketCountByStatus?.Closed ? ticketCountByStatus?.Closed : 0}</p>
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
                                        <p className="text-4xl">{ticketCountByStatus?.Open ? ticketCountByStatus?.Open : 0}</p>
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
                                        <p className="text-4xl">{ticketCountByStatus?.Pending ? ticketCountByStatus?.Pending : 0}</p>
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
                                        <p className="text-4xl">
                                            {(ticketCountByStatus?.Closed ? ticketCountByStatus?.Closed : 0) +
                                                (ticketCountByStatus?.Open ? ticketCountByStatus?.Open : 0) +
                                                (ticketCountByStatus?.Pending ? ticketCountByStatus?.Pending : 0)}</p>
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
                                        <p className="text-4xl">{userCountByRole?.admin ? userCountByRole?.admin : 0}</p>
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
                                        <p className="text-4xl">{userCountByRole?.support ? userCountByRole?.support : 0}</p>
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
                                        <p className="text-4xl">{userCountByRole?.user ? userCountByRole?.user : 0}</p>
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
                                        <p className="text-4xl">{
                                            (userCountByRole?.admin ? userCountByRole?.admin : 0) +
                                            (userCountByRole?.support ? userCountByRole?.support : 0) +
                                            (userCountByRole?.user ? userCountByRole?.user : 0)}</p>
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
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                supportPerformance?.length ? (
                                                    supportPerformance.map((performance, index) => (
                                                        <tr className="hover" key={index}>
                                                            <td>{performance?.supportPersonName}</td>
                                                            <td><div className="badge badge-warning gap-2">{performance?.totalCount}</div></td>
                                                            <td><div className="badge badge-success gap-2">{performance?.closedCount}</div></td>
                                                            <td><div className="badge badge-info gap-2">{performance?.pendingCount}</div></td>
                                                            <td><div className="badge badge-error gap-2">{performance?.openCount}</div></td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr className="text-center">
                                                        {!isLoading ? (
                                                            <td colSpan={5} >No records found.</td>
                                                        ) : (
                                                            <td colSpan={5} ><span className="loading loading-spinner"></span></td>
                                                        )
                                                        }
                                                    </tr>
                                                )
                                            }
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
