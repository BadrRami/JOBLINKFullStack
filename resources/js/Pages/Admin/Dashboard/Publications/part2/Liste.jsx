import React from 'react';
import { router } from '@inertiajs/react';
import Publication from './Publication';
import '../../../../../../css/Admin/Dashboard/publications/admin-publications.css'

const Liste = ({ data }) => {

    const handleDelete = (id) => {
        if (confirm("Supprimer cette publication ?")) {
            router.delete(`/postsAdmin/${id}`);
        }
    };

    return (
        <div id="jl-admin-pub-page">
            <div id="jl-admin-pub-container">

                <h1 id="jl-admin-pub-heading">Publications</h1>

                <div id="jl-admin-pub-card">
                    {!data || data.length === 0 ? (
                        <div id="jl-admin-pub-empty">
                            <i className="bi bi-file-earmark-post"></i>
                            Aucune publication trouvée
                        </div>
                    ) : (
                        <table id="jl-admin-pub-table">
                            <thead>
                                <tr>
                                    <th>Média</th>
                                    <th>Date</th>
                                    <th>Stats</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((publication) => (
                                    <Publication
                                        key={publication.id}
                                        publication={publication}
                                        onDelete={handleDelete}
                                    />
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Liste;