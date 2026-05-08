import React, { useState } from 'react';
import Menu from './Menu';
import { router } from '@inertiajs/react';
import '../../css/Candidature.css';

const Candidature = ({ offre }) => {
    const [cv, setCv] = useState(null);
    const [lettre, setLettre] = useState('');

    const postuler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('offre_id', offre.id);
        formData.append('cv', cv);
        formData.append('lettre_motivation', lettre);
        router.post('/candidatures', formData);
    };

    return (
        <div id="jl-cand-form-page">
            <Menu />

            <div id="jl-cand-form-body">
                <div id="jl-cand-form-card">

                    {/* Header sombre */}
                    <div id="jl-cand-form-header">
                        <div id="jl-cand-form-header-icon">
                            <i className="bi bi-briefcase-fill"></i>
                        </div>
                        <div>
                            <h2 id="jl-cand-form-title">Postuler à l'offre</h2>
                            {offre?.titre && (
                                <p id="jl-cand-form-offre">{offre.titre}</p>
                            )}
                        </div>
                    </div>

                    <form id="jl-cand-form" onSubmit={postuler}>

                        {/* CV */}
                        <div className="jl-field">
                            <label className="jl-label">
                                CV <span>*</span>
                            </label>
                            <div className="jl-file-wrap">
                                <input
                                    type="file"
                                    className="jl-file-input"
                                    onChange={(e) => setCv(e.target.files[0])}
                                />
                                <span className="jl-file-btn">
                                    <i className="bi bi-upload"></i>
                                    Choisir un fichier
                                </span>
                                <span className="jl-file-name">
                                    {cv ? cv.name : 'Aucun fichier sélectionné'}
                                </span>
                            </div>
                        </div>

                        {/* Lettre de motivation */}
                        <div className="jl-field">
                            <label className="jl-label">
                                Lettre de motivation <span>*</span>
                            </label>
                            <textarea
                                className="jl-textarea"
                                value={lettre}
                                onChange={(e) => setLettre(e.target.value)}
                                placeholder="Présentez-vous et expliquez pourquoi vous êtes le candidat idéal..."
                            />
                        </div>

                        {/* Submit */}
                        <button id="jl-cand-form-submit" type="submit">
                            <i className="bi bi-send-fill"></i>
                            Envoyer ma candidature
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Candidature;