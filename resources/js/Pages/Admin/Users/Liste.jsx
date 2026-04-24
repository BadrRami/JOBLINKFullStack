import React from 'react';
import Menu from '../../Menu';
import User from './User';
import { usePage } from '@inertiajs/react';
const Liste = ({ users }) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu   />
            {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )}
            
            <div className="container mt-4">
                <h2 className="mb-4 fw-bold">Liste des utilisateurs</h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Date de création</th>
                        <th>Date de modification</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <User   key={user.id} user={user} />
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default Liste;

