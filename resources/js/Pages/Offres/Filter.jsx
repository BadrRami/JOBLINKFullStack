import React from 'react';
import '../../../css/Offres/filter.css';

const Filter = ({ villes, domaines }) => {
    const [search, setSearch] = React.useState('');
    const [selectedVille, setSelectedVille] = React.useState('');
    const [selectedDomaine, setSelectedDomaine] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <form id="jl-offres-filter" method="GET" action="" onSubmit={handleSubmit}>

            {/* Recherche */}
            <div className="jl-filter-group">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Rechercher par nom..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Ville */}
            <div className="jl-filter-group">
                <select name="ville" id="ville" value={selectedVille} onChange={(e) => setSelectedVille(e.target.value)}>
                    <option value="">Toutes les villes</option>
                    {villes.map((ville) => (
                        <option key={ville.id} value={ville.id}>{ville.nom}</option>
                    ))}
                </select>
            </div>

            {/* Domaine */}
            <div className="jl-filter-group">
                <select name="domaine" id="domaine" value={selectedDomaine} onChange={(e) => setSelectedDomaine(e.target.value)}>
                    <option value="">Tous les domaines</option>
                    {domaines.map((domaine) => (
                        <option key={domaine.id} value={domaine.id}>{domaine.nom}</option>
                    ))}
                </select>
            </div>

            {/* Bouton */}
            <button type="submit" id="jl-filter-btn">
                <i className="bi bi-funnel-fill"></i>
                Filtrer
            </button>

        </form>
    );
}

export default Filter;