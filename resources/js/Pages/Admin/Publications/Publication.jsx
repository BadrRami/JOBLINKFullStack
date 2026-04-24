import React from 'react';
import { route } from 'ziggy-js';
import { router } from '@inertiajs/react';
const Publication = ({key, post}) => {
    

const handleDelete = (post) => {
    if (confirm("Supprimer cette offre ?")) {
        router.delete(route('postsAdmin.destroy', post.id), {
            onSuccess: () => {
                console.log("Post supprimé avec succès");
            },
            onError: () => {
                console.error("Erreur lors de la suppression du post");
            }
        });
    }
}
    return (
        <tr key={key}>
            <td>{post.id}</td>
            <td>{post.titre}</td>
            <td>
                {post.media && post.media !== 'null' ? (
                    <img
                        src={`/storage/media/${post.media}`}
                        alt="photo"
                        width="80"
                    />
                ) : (
                    'Aucun media'
                )}
            </td>
            <td>{post.NBLikes}</td>
            <td>{post.NBComments}</td>
            <td>{new Date(post.created_at).toLocaleString()}</td>
            <td>{new Date(post.updated_at).toLocaleString()}</td>
            <td>
                {/* <a href={route('postsAdmin.edit', post.id)} className='btn btn-warning'><i class="bi bi-pen-fill"></i></a> */}
                <button onClick={() => handleDelete(post)} className='btn btn-danger'>
                    <i className="bi bi-trash3-fill"></i>
                </button>
            </td>
        </tr>
    );
}

export default Publication;
