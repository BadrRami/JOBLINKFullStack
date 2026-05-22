import React from 'react';

const Offre = ({ offre }) => {
    return (
        <tr>
            <td>
                <span className="jl-offre-row-titre">{offre?.titre}</span>
            </td>
            <td>
                <span className="jl-offre-row-type">{offre?.type}</span>
            </td>
            <td>
                <span className="jl-offre-row-date">
                    {offre?.created_at}
                </span>
            </td>
            <td>
                <span className="jl-offre-row-cands">
                    <i className="bi bi-people-fill"></i>
                    {offre?.candidatures_count ?? 0}
                </span>
            </td>
            <td>
                <button className="jl-offre-row-btn" title="Voir détail">
                    <i className="bi bi-eye-fill"></i>
                </button>
            </td>
        </tr>
    );
};

export default Offre;