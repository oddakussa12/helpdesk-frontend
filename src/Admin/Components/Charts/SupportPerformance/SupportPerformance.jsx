import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useGetSupportPerformanceQuery } from "../../../Pages/Dashboard/Api/dashboard.service";

const SupportPerformance = () => {
    const { data: supportPerformance } = useGetSupportPerformanceQuery();

    return (
        <div>
            <ResponsiveContainer aspect={4.4}>
                <BarChart
                    width={1200}
                    height={300}
                    data={supportPerformance}
                    margin={{
                        top: 25,
                        // right: 30,
                        // left: 20,
                        bottom: 1,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="supportPersonName" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="closedCount" fill="#40bf80" />
                    <Bar dataKey="openCount" fill="#ff4d4d" />
                    <Bar dataKey="pendingCount" fill="#8884d8" />
                    <Bar dataKey="totalCount" fill="#82cd22" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default SupportPerformance