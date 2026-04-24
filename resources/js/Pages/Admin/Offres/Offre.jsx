import React from 'react';
import { router } from '@inertiajs/react';

const Offre = ({ offre, index }) => {

    const handleDelete = (offre) => {
        if (confirm("Supprimer cette offre ?")) {
            router.delete(`/offresAdmin/${offre.id}`, {
                onSuccess: () => {
                    router.reload({ only: ['offres'] });
                }
            });
        }
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{offre.titre}</td>
            <td>{offre.description}</td>
            <td>{offre.type}</td>
            <td>{offre.etat}</td>
            <td>{offre.localisation}</td>
            <td>{offre.domaine?.nom}</td>
            <td>{offre.ville?.nom}</td>
            <td>
                <a href={route('offresAdmin.edit', offre.id)} className="btn btn-sm btn-warning">
                    <i className="bi bi-pen-fill"></i>
                </a>

                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(offre)}>
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    );
}

export default Offre;