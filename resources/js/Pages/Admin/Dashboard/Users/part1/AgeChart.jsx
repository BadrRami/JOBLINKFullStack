import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import '../../../../../../css/Admin/Dashboard/Users/AgeChart.css';

export default function AgeChart({ data }) {
    const formattedData = Object.keys(data).map(age => ({
        age,
        total: data[age]
    }));

    return (
        <div className="jl-chart-card">
            <h2 className="jl-chart-title">Répartition par âge</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={formattedData} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--jl-dark-2)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="age"
                        tick={{ fill: 'var(--jl-muted)', fontSize: 12 }}
                        axisLine={{ stroke: 'var(--jl-dark-2)' }}
                        tickLine={false}
                    />
                    <YAxis
                        tick={{ fill: 'var(--jl-muted)', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--jl-dark-2)',
                            border: '1px solid var(--jl-blue-glow)',
                            borderRadius: 'var(--jl-radius)',
                            color: 'var(--jl-white)',
                            fontSize: '13px',
                        }}
                        cursor={{ fill: 'var(--jl-blue-glow)' }}
                    />
                    <Bar
                        dataKey="total"
                        fill="var(--jl-blue)"
                        radius={[4, 4, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}