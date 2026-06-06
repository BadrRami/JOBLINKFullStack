import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import '../../../css/Offres/filter.css';

const Filter = ({ villes, domaines }) => {

    const [filters, setFilters] = useState({
        titre: '',
        ville: '',
        domaine: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        router.get('/offres', filters);
    };

    return (
        <form id="jl-offres-filter" onSubmit={handleSubmit}>

            <div className="jl-filter-group">
                <input
                    type="text"
                    placeholder="Rechercher par titre..."
                    value={filters.titre}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            titre: e.target.value
                        })
                    }
                />
            </div>

            <div className="jl-filter-group">
                <select
                    value={filters.ville}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            ville: e.target.value
                        })
                    }
                >
                    <option value="">Toutes les villes</option>
                    {villes.map((ville) => (
                        <option key={ville.id} value={ville.id}>
                            {ville.nom}
                        </option>
                    ))}
                </select>
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