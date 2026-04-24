import React from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Menu from '../Menu';

const Edit = () => {

    const { data, setData, post, processing, errors,reset   } = useForm({
        titre: data.titre || '',
        media: data.media || null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route('postsAdmin.update',), {
    forceFormData: true,
    onSuccess: () => {
        reset(); // vide le formulaire
    },
    onError: (errors) => {
        console.log(errors);
    }
});
    };

    return (
        <>
        <Menu />
        <div className="container mt-4">

            <div className="card shadow">

                <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">Modifier une publication</h4>
                </div>

                <div className="card-body">

                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <div className="mb-3">
                            <label className="form-label">Contenu du poste</label>
                            <textarea
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                className="form-control"
                                rows="4"
                                placeholder="Exprimez-vous..."
                            />
                        </div>
                        {errors.titre && (
                            <div className="text-danger">
                                {errors.titre}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Ajouter une image / média</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => setData('media', e.target.files[0])}
                            />
                        </div>

                        {errors.titre && (
                            <div className="text-danger">
                                {errors.media}
                            </div>
                        )}

                        <div className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-success" disabled={processing}>
                                Publier
                            </button>

                            <a href="/" className="btn btn-secondary">
                                Annuler
                            </a>
                        </div>

                    </form>

                </div>
            </div>
        </div>
        </>
    );
};

export default Edit;