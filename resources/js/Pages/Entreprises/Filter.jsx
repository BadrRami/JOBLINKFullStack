import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import '../../../css/Offres/filter.css';

const Filter = ({ domaines }) => {

    const [filters, setFilters] = useState({
        nom: '',
        domaine: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.get('/entreprises', filters);
    };

    return (
        <form id="jl-offres-filter" onSubmit={handleSubmit}>

            <div className="jl-filter-group">
                <input
                    type="text"
                    placeholder="Rechercher par nom..."
                    value={filters.nom}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            nom: e.target.value
                        })
                    }
                />
            </div>


            <div className="jl-filter-group">
                <select
                    value={filters.domaine}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            domaine: e.target.value
                        })
                    }
                >
                    <option value="">Tous les domaines</option>
                    {domaines.map((domaine) => (
                        <option key={domaine.id} value={domaine.id}>
                            {domaine.nom}
                        </option>
                    ))}
                </select>
            </div>

            <button type="submit" id="jl-filter-btn"> <i className="bi bi-funnel-fill"></i> Filtrer </button>

        </form>
    );
};

export default Filter;