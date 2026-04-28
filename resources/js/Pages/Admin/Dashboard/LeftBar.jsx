import React, { useState } from 'react';
import '../../../../css/Admin/Dashboard/LeftBar.css';
import { route } from 'ziggy-js';

const LeftBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div id="jl-leftbar" className={collapsed ? 'collapsed' : ''}>
            <button
                id="jl-burger"
                onClick={() => setCollapsed(!collapsed)}
                aria-label="Toggle menu"
            >
                <i className="bi bi-list"></i>
            </button>

            <ul id="jl-leftbar-nav">
                <li className="jl-leftbar-item">
                    <a href={route('usersStatistique.index')} className="jl-leftbar-link">
                        <i className="bi bi-people-fill"></i>
                        <span>Utilisateurs</span>
                    </a>
                </li>
                <li className="jl-leftbar-item">
                    <a href="" className="jl-leftbar-link">
                        <i className="bi bi-file-earmark-post"></i>
                        <span>Publications</span>
                    </a>
                </li>
                <li className="jl-leftbar-item">
                    <a href="" className="jl-leftbar-link">
                        <i className="bi bi-briefcase-fill"></i>
                        <span>Offres</span>
                    </a>
                </li>
                <li className="jl-leftbar-item">
                    <a href="" className="jl-leftbar-link">
                        <i className="bi bi-buildings-fill"></i>
                        <span>Entreprises</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default LeftBar;