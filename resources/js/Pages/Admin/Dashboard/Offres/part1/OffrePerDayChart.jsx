import React from 'react';
import {
    LineChart, Line, XAxis, YAxis,
    Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const OffrePerDayChart = ({ data }) => {
    return (
        <div className="jl-chart-card">
            <h2 className="jl-chart-title">Offres publiées par jour</h2>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--jl-dark-2)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="date"
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
                        cursor={{ stroke: 'var(--jl-blue-glow)', strokeWidth: 2 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="total"
                        stroke="var(--jl-blue)"
                        strokeWidth={2.5}
                        dot={{ fill: 'var(--jl-blue)', r: 4, strokeWidth: 0 }}
                        activeDot={{ r: 6, fill: 'var(--jl-blue)', strokeWidth: 0 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default OffrePerDayChart;