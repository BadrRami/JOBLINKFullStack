import React from 'react';
import Menu from './Menu';
import { useForm } from '@inertiajs/react';
import '../../css/Candidature.css';

const Candidature = ({ offre }) => {

    const { data, setData, post, processing, errors } = useForm({
        offre_id: offre.id,
        cv: null,
        lettre_motivation: '',
    });

    const postuler = (e) => {
        e.preventDefault();

        post('/candidatures', {
            forceFormData: true,
        });
    };

    return (
        <div id="jl-cand-form-page">
            <Menu />

            <div id="jl-cand-form-body">
                <div id="jl-cand-form-card">

                    <div id="jl-cand-form-header">
                        <div id="jl-cand-form-header-icon">
                            <i className="bi bi-briefcase-fill"></i>
                        </div>

                        <div>
                            <h2 id="jl-cand-form-title">
                                Postuler à l'offre
                            </h2>

                            {offre?.titre && (
                                <p id="jl-cand-form-offre">
                                    {offre.titre}
                                </p>
                            )}
                        </div>
                    </div>

                    <form id="jl-cand-form" onSubmit={postuler} >

                        {/* CV */}
                        <div className="jl-field">

                            <label className="jl-label">
                                CV <span>*</span>
                            </label>

                            <div className="jl-file-wrap">

                                <input
                                    type="file"
                                    className="jl-file-input"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) =>
                                        setData('cv', e.target.files[0])
                                    }
                                />

                                <span className="jl-file-btn">
                                    <i className="bi bi-upload"></i>
                                    Choisir un fichier
                                </span>

                                <span className="jl-file-name">
                                    {data.cv
                                        ? data.cv.name
                                        : 'Aucun fichier sélectionné'}
                                </span>

                            </div>

                            {errors.cv && (
                                <span className="jl-error">
                                    {errors.cv}
                                </span>
                            )}

                        </div>

                        {/* Lettre */}
                        <div className="jl-field">

                            <label className="jl-label">
                                Lettre de motivation <span>*</span>
                            </label>

                            <textarea
                                className="jl-textarea"
                                value={data.lettre_motivation}
                                onChange={(e) =>
                                    setData(
                                        'lettre_motivation',
                                        e.target.value
                                    )
                                }
                                placeholder="Présentez-vous et expliquez pourquoi vous êtes le candidat idéal..."
                            />

                            {errors.lettre_motivation && (
                                <span className="jl-error">
                                    {errors.lettre_motivation}
                                </span>
                            )}

                        </div>

                        <button
                            id="jl-cand-form-submit"
                            type="submit"
                            disabled={processing}
                        >
                            <i className="bi bi-send-fill"></i>

                            {processing
                                ? 'Envoi...'
                                : 'Envoyer ma candidature'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Candidature;