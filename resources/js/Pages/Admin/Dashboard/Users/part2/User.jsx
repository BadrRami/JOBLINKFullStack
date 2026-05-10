import React from 'react';
import { router } from '@inertiajs/react';
const User = ({ user }) => {
    const handleDelete = (id) => {
            if (confirm("Supprimer cet utilisateur ?")) {
                router.delete(`/users/${id}`);
            }
        };

    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{new Date(user.created_at).toLocaleString()}</td>
            <td>{new Date(user.updated_at).toLocaleString()}</td>
            <td>
                <a href={route('users.edit', user.id)} className="btn btn-sm btn-primary"><i class="bi bi-pencil-square"></i></a>
                <button onClick={() => handleDelete(user.id)} className="btn btn-sm btn-danger"><i class="bi bi-trash3"></i></button>
            </td>
        </tr>
    );
}

export default User;
