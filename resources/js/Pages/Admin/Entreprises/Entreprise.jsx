import React from 'react';
import { router } from '@inertiajs/react';
const Entreprise = ({entreprise, domaines}) => {
    const handleDelete = (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette entreprise ?')) {
            router.delete(`/entrepriseAdmin/${id}`);
        }
    }
    return (
        <tr >
            <td>{entreprise.nom}</td>
            <td>{entreprise.adresse}</td>
            <td>{entreprise.tel}</td>
            <td>{domaines.find(domaine => domaine.id === entreprise.domaine_id)?.nom || 'N/A'}</td>
            <td>
                <button 
                className='btn btn-danger'
                onClick={() => handleDelete(entreprise.id)}
                >Supprimer</button>
            </td>
        </tr>
    );
}

export default Entreprise;
