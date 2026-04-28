import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import '../../../../../../css/Admin/Dashboard/Users/GenderChart.css';

const COLORS = {
    male:   'var(--jl-blue)',
    female: 'var(--jl-blue-light)',
    other:  'var(--jl-muted)',
};

export default function GenderChart({ data }) {
    return (
        <div className="jl-chart-card">
            <h2 className="jl-chart-title">Répartition par genre</h2>
            <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="total"
                        nameKey="gender"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={3}
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[entry.gender] ?? 'var(--jl-muted)'}
                                stroke="var(--jl-dark)"
                                strokeWidth={2}
                            />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'var(--jl-dark-2)',
                            border: '1px solid var(--jl-blue-glow)',
                            borderRadius: 'var(--jl-radius)',
                            color: 'var(--jl-white)',
                            fontSize: '13px',
                        }}
                    />
                    <Legend
                        iconType="circle"
                        iconSize={10}
                        formatter={(value) => (
                            <span style={{
                                color: 'var(--jl-muted-light)',
                                fontSize: '13px',
                                fontFamily: 'var(--jl-font)',
                            }}>
                                {value}
                            </span>
                        )}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}