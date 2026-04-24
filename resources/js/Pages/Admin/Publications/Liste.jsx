import React from 'react';
import Menu from '../../Menu';
import Publication from './Publication';
import { usePage } from '@inertiajs/react';
const Liste = ({posts}) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
            <div className="container mt-4">
                <h2 className="mb-4 fw-bold">Liste des Publications</h2>
                {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )} 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Contenu</th>
                            <th>media</th>
                            <th>Nombre de j'aime</th>
                            <th>Nombre de commentaires</th>
                            <th>Date de création</th>
                            <th>Date de dernière modifcation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <Publication key={post.id} post={post} />
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Liste;
