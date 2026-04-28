import React from 'react';
import User from '../part2/User';
import { usePage } from '@inertiajs/react';
import '../../../../../../css/Admin/Dashboard/Users/part2/Liste.css';

const Liste = ({ users = [] }) => {
    const { flash } = usePage().props;

    return (
        <div id="jl-liste-wrapper">

            {flash.success && (
                <div className="jl-alert-success">
                    <i className="bi bi-check-circle-fill"></i>
                    {flash.success}
                </div>
            )}

            <div id="jl-liste-container">
                <h2 id="jl-liste-title">Liste des utilisateurs</h2>

                <div id="jl-table-wrapper">
                    <table id="jl-table">
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Rôle</th>
                                <th>Date de création</th>
                                <th>Date de modification</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <User key={user.id} user={user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Liste;