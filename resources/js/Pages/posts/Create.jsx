import React from 'react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import Menu from '../Menu';
import '../../../css/posts/CRUD/create-post.css'

const Create = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        titre: '',
        media: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('publications.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    };

    return (
        <div id="jl-create-page">
            <Menu />

            <div id="jl-create-body">
                <div id="jl-create-card">

                    {/* Header sombre */}
                    <div id="jl-create-header">
                        <div id="jl-create-header-icon">
                            <i className="bi bi-pencil-square"></i>
                        </div>
                        <div>
                            <h4 id="jl-create-title">Créer un nouveau poste</h4>
                            <p id="jl-create-subtitle">Partagez une actualité, une offre ou une idée</p>
                        </div>
                    </div>

                    <form id="jl-create-form" onSubmit={handleSubmit} encType="multipart/form-data">

                        {/* Contenu */}
                        <div className="jl-field">
                            <label className="jl-label">Contenu du poste</label>
                            <textarea
                                className="jl-textarea"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                rows="4"
                                placeholder="Exprimez-vous..."
                            />
                            {errors.titre && (
                                <span className="jl-error">{errors.titre}</span>
                            )}
                        </div>

                        {/* Média */}
                        <div className="jl-field">
                            <label className="jl-label">Ajouter une image / média</label>
                            <div className="jl-file-wrap">
                                <input
                                    type="file"
                                    className="jl-file-input"
                                    onChange={(e) => setData('media', e.target.files[0])}
                                />
                                <span className="jl-file-btn">
                                    <i className="bi bi-image"></i>
                                    Choisir un fichier
                                </span>
                                <span className="jl-file-name">
                                    {data.media ? data.media.name : 'Aucun fichier sélectionné'}
                                </span>
                            </div>
                            {errors.media && (
                                <span className="jl-error">{errors.media}</span>
                            )}
                        </div>

                        {/* Actions */}
                        <div id="jl-create-actions">
                            <button
                                id="jl-create-submit"
                                type="submit"
                                disabled={processing}
                            >
                                <i className="bi bi-send-fill"></i>
                                {processing ? 'Publication...' : 'Publier'}
                            </button>
                            <a id="jl-create-cancel" href="/">
                                <i className="bi bi-x-lg"></i>
                                Annuler
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Create;