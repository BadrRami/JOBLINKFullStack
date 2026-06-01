import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis,
    Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';

const EntrepriseByDomaine = ({ data }) => {
    return (
        <div className="jl-chart-card">
            <h2 className="jl-chart-title">Entreprises par domaine</h2>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 4 }}>
                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--jl-dark-2)"
                        vertical={false}
                    />
                    <XAxis
                        dataKey="domaine"
                        tick={{ fill: 'var(--jl-muted)', fontSize: 11 }}
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

export default EntrepriseByDomaine;