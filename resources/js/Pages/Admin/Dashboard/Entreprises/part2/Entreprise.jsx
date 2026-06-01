import React from 'react';

const Entreprise = ({ entreprise }) => {
    return (
        <tr>
            {/* Logo + Nom */}
            <td>
                <div className="jl-ent-name-cell">
                    <div className="jl-ent-logo">
                        {entreprise.logo ? (
                            <img
                                src={`/storage/logo/${entreprise.logo}`}
                                alt={entreprise.nom}
                            />
                        ) : (
                            <span>{entreprise.nom?.charAt(0).toUpperCase()}</span>
                        )}
                    </div>
                    <span className="jl-ent-nom">{entreprise.nom}</span>
                </div>
            </td>

            {/* Domaine */}
            <td>
                <span className="jl-ent-domaine">
                    {entreprise.domaine?.nom ?? '—'}
                </span>
            </td>
        </tr>
    );
}

export default Entreprise;