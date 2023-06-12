import TicketPriority from "./Setting/TicketPriority/TicketPriority";
import Role from "./Setting/Role/Role";
import SupportLevel from "./Setting/SupportLevel/SupportLevel";
import IssueCategory from "./Setting/IssueCategory/IssueCategory";
import TicketStatus from "./Setting/TicketStatus/TicketStatus";

const Setting = () => {
    return (
        <div className="px-3 mt-10">
            <div className="card bg-base-200 shadow-md" style={{ minHeight: '600px', borderRadius: '5px' }}>
                <div className="card-body">
                    <h2 className="card-title">Settings</h2>
                    <div className="overflow-x-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                            <TicketPriority />
                            <Role />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                            <SupportLevel />
                            <IssueCategory />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-4">
                            <TicketStatus />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting
