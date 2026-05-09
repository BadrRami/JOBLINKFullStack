import React from 'react';
import Menu from '../../Menu';
import { usePage, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../../../css/entreprises/ajouter-entreprise.css';

const Ajouter = ({ domaines }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        nom: '',
        description: '',
        tel: '',
        email: '',
        domaine_id: '',
        adresse: '',
        annee_creation: '',
        site_web: '',
        logo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('entrepriseRecruteur.store'), {
            forceFormData: true,
            onSuccess: () => reset(),
            onError: (errors) => console.log(errors),
        });
    };

    return (
        <div id="jl-ajouter-ent-page">
            <Menu />

            <div id="jl-ajouter-ent-body">
                <div id="jl-ajouter-ent-card">

                    {/* Header sombre */}
                    <div id="jl-ajouter-ent-header">
                        <div id="jl-ajouter-ent-header-icon">
                            <i className="bi bi-buildings-fill"></i>
                        </div>
                        <div>
                            <h4 id="jl-ajouter-ent-title">Ajouter une entreprise</h4>
                            <p id="jl-ajouter-ent-subtitle">Renseignez les informations de votre entreprise</p>
                        </div>
                    </div>

                    {/* Flash */}
                    {flash.success && (
                        <div className="jl-flash jl-flash-success">{flash.success}</div>
                    )}

                    <form
                        id="jl-ajouter-ent-form"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >

                        {/* Nom + Téléphone */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Nom de l'entreprise</label>
                                <input
                                    type="text"
                                    name="nom"
                                    className="jl-input"
                                    placeholder="Ex: Google"
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Téléphone</label>
                                <input
                                    type="tel"
                                    name="tel"
                                    className="jl-input"
                                    placeholder="06XXXXXXXX"
                                    value={data.tel}
                                    onChange={(e) => setData('tel', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Email + Domaine */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="jl-input"
                                    placeholder="contact@entreprise.com"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Domaine</label>
                                <select
                                    name="domaine"
                                    className="jl-select"
                                    value={data.domaine_id}
                                    onChange={(e) => setData('domaine_id', e.target.value)}
                                >
                                    <option value="">-- Choisissez un domaine --</option>
                                    {domaines.map((domaine) => (
                                        <option key={domaine.id} value={domaine.id}>
                                            {domaine.nom}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Adresse + Année de création */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Adresse</label>
                                <input
                                    type="text"
                                    name="adresse"
                                    className="jl-input"
                                    placeholder="Ville, Rue..."
                                    value={data.adresse}
                                    onChange={(e) => setData('adresse', e.target.value)}
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Année de création</label>
                                <input
                                    type="number"
                                    name="annee_creation"
                                    className="jl-input"
                                    placeholder="2020"
                                    value={data.annee_creation}
                                    onChange={(e) => setData('annee_creation', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Site web + Logo */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Site web</label>
                                <input
                                    type="url"
                                    name="site_web"
                                    className="jl-input"
                                    placeholder="https://example.com"
                                    value={data.site_web}
                                    onChange={(e) => setData('site_web', e.target.value)}
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Logo</label>
                                <div className="jl-file-wrap">
                                    <input
                                        type="file"
                                        name="logo"
                                        className="jl-file-input"
                                        onChange={(e) => setData('logo', e.target.files[0])}
                                    />
                                    <span className="jl-file-btn">
                                        <i className="bi bi-upload"></i>
                                        Choisir un logo
                                    </span>
                                    <span className="jl-file-name">
                                        {data.logo ? data.logo.name : 'Aucun fichier'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Description pleine largeur */}
                        <div className="jl-field">
                            <label className="jl-label">Description</label>
                            <textarea
                                name="description"
                                className="jl-textarea"
                                placeholder="Décrivez votre entreprise..."
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                            />
                        </div>

                        {/* Actions */}
                        <div id="jl-ajouter-ent-actions">
                            <a
                                href={route('profile.recruteur')}
                                id="jl-ajouter-ent-back"
                            >
                                <i className="bi bi-arrow-left"></i>
                                Retour
                            </a>
                            <button
                                type="submit"
                                id="jl-ajouter-ent-submit"
                                disabled={processing}
                            >
                                <i className="bi bi-check-lg"></i>
                                {processing ? 'Enregistrement...' : 'Enregistrer'}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}

export default Ajouter;