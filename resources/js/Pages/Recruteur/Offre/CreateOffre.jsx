import React from 'react';
import Menu from '../../Menu';
import { useForm, usePage } from '@inertiajs/react';
import '../../../../css/CRUD_Offre/create-offre.css';

const CreateOffre = ({ domaines, villes }) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        titre: '',
        description: '',
        type: '',
        domaine_id: '',
        ville_id: '',
        localisation: '',
        salaire: '',
        type_salaire:'',
        etat: 'active',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.titre || !data.description || !data.type ||
            !data.domaine_id || !data.ville_id || !data.localisation ||
            !data.salaire || !data.etat || !data.type_salaire
        ){
            alert('Veuillez remplire tous les champs')
            
        }
        post(route('offres.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <div id="jl-create-offre-page">
            <Menu />

            <div id="jl-create-offre-body">
                <div id="jl-create-offre-card">

                    {/* Header sombre */}
                    <div id="jl-create-offre-header">
                        <div id="jl-create-offre-header-icon">
                            <i className="bi bi-briefcase-fill"></i>
                        </div>
                        <div>
                            <h2 id="jl-create-offre-title">Créer une offre</h2>
                            <p id="jl-create-offre-subtitle">Publiez une nouvelle opportunité d'emploi</p>
                        </div>
                    </div>

                    {/* Flash messages */}
                    {flash.success && (
                        <div className="jl-flash jl-flash-success">{flash.success}</div>
                    )}
                    {flash.error && (
                        <div className="jl-flash jl-flash-error">{flash.error}</div>
                    )}

                    <form id="jl-create-offre-form" onSubmit={handleSubmit}>

                        {/* Titre */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-offre-titre">Titre</label>
                            <input
                                id="jl-offre-titre"
                                type="text"
                                className="jl-input"
                                value={data.titre}
                                onChange={(e) => setData('titre', e.target.value)}
                                placeholder="Ex: Développeur React Senior"
                            />
                            {errors.titre && <span className="jl-error">{errors.titre}</span>}
                        </div>

                        {/* Description */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-offre-description">Description</label>
                            <textarea
                                id="jl-offre-description"
                                className="jl-textarea"
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Décrivez le poste, les missions et les compétences requises..."
                            />
                            {errors.description && <span className="jl-error">{errors.description}</span>}
                        </div>

                        {/* Type + Domaine sur la même ligne */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-type">Type</label>
                                <select
                                    id="jl-offre-type"
                                    className="jl-select"
                                    value={data.type}
                                    onChange={(e) => setData('type', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="stage">Stage</option>
                                    <option value="mission">Mission</option>
                                    <option value="freelance">Freelance</option>
                                </select>
                                 {errors.type && <span className="jl-error">{errors.type}</span>}
                            </div>

                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-domaine">Domaine</label>
                                <select
                                    id="jl-offre-domaine"
                                    className="jl-select"
                                    value={data.domaine_id}
                                    onChange={(e) => setData('domaine_id', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    {domaines.map((d) => (
                                        <option key={d.id} value={d.id}>{d.nom}</option>
                                    ))}
                                </select>
                                 {errors.domaine_id && <span className="jl-error">{errors.domaine_id}</span>}
                            </div>
                        </div>

                        {/* Ville + Localisation sur la même ligne */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-ville">Ville</label>
                                <select
                                    id="jl-offre-ville"
                                    className="jl-select"
                                    value={data.ville_id}
                                    onChange={(e) => setData('ville_id', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    {villes.map((v) => (
                                        <option key={v.id} value={v.id}>{v.nom}</option>
                                    ))}
                                </select>
                                {errors.ville_id && <span className="jl-error">{errors.ville_id}</span>}
                            </div>

                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-localisation">Localisation</label>
                                <input
                                    id="jl-offre-localisation"
                                    type="text"
                                    className="jl-input"
                                    value={data.localisation}
                                    onChange={(e) => setData('localisation', e.target.value)}
                                    placeholder="Ex: Quartier Maarif"
                                />
                                {errors.localisation && <span className="jl-error">{errors.localisation}</span>}
                            </div>
                        </div>

                        {/*Type de salaire  */}
                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-type-salaire">Type de salaire</label>
                                <select
                                    id="jl-offre-type-salaire"
                                    className="jl-select"
                                    value={data.type_salaire}
                                    onChange={(e) => setData('type_salaire', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    <option value="mensuel">Mensuel</option>
                                    <option value="comission">Comission</option>
                                    <option value="horaire">Horaire</option>
                                </select>
                                {errors.type_salaire && <span className="jl-error">{errors.type_salaire}</span>}
                            </div>

                        {/* Salaire + Etat sur la même ligne */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-salaire">Salaire</label>
                                <input
                                    id="jl-offre-salaire"
                                    type="number"
                                    className="jl-input"
                                    value={data.salaire}
                                    onChange={(e) => setData('salaire', e.target.value)}
                                    placeholder="Ex: 8000"
                                />
                                {errors.salaire && <span className="jl-error">{errors.salaire}</span>}
                            </div>

                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-offre-etat">État</label>
                                <select
                                    id="jl-offre-etat"
                                    className="jl-select"
                                    value={data.etat}
                                    onChange={(e) => setData('etat', e.target.value)}
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                {errors.etat && <span className="jl-error">{errors.etat}</span>}
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            id="jl-create-offre-submit"
                            type="submit"
                            disabled={processing}
                        >
                            <i className="bi bi-plus-circle-fill"></i>
                            {processing ? 'Création en cours...' : 'Créer l\'offre'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateOffre;