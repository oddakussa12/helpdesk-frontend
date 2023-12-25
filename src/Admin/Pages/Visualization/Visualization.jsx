import UserChart from "../../Components/Charts/User/UserChart";
import TicketChart from "../../Components/Charts/Ticket/TicketChart";
import SupportPerformance from "../../Components/Charts/SupportPerformance/SupportPerformance";
import { useGetSupportPerformanceQuery } from "../Dashboard/Api/dashboard.service";

const Visualization = () => {
    const { data: supportPerformance } = useGetSupportPerformanceQuery();
    return (
        <div className="card py-2 mt-5 bg-base-200">
            <div className="px-3">
                <div className="card bg-base-100 shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Support Person Performance</h2>
                        <SupportPerformance data={supportPerformance} />
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <div className="card bg-base-100 col-span-2" >
                    <div className="card-body">
                        <h2 className="card-title">Total Users Created</h2>
                        <UserChart />
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary">Refresh</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 col-span-1" >
                    <div className="card-body">
                        <h2 className="card-title">Total Tickets Created In Each Month</h2>
                        <TicketChart />
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-success">Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Visualization