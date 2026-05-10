import React from 'react';
import Menu from './Menu';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../css/Register.css';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        nom: '',
        prenom: '',
        statut: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.email || !data.password || !data.nom || !data.prenom || !data.statut) {
            alert('Veuillez remplir tous les champs');
        }
        post(route('register'));
    };

    return (
        <div id="jl-register-page">
            <Menu />

            <div id="jl-register-body">
                <div id="jl-register-card">

                    <div id="jl-register-header">
                        <h1 id="jl-register-title">Créer un compte</h1>
                        <p id="jl-register-subtitle">Rejoignez JobLink et trouvez votre prochaine opportunité</p>
                    </div>

                    <form id="jl-register-form" onSubmit={handleSubmit}>

                        {/* Nom + Prénom sur la même ligne */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-input-nom">Nom</label>
                                <input
                                    id="jl-input-nom"
                                    type="text"
                                    name="nom"
                                    className="jl-input"
                                    value={data.nom}
                                    onChange={(e) => setData('nom', e.target.value)}
                                    placeholder="Dupont"
                                />
                                {errors.nom && <span className="jl-error">{errors.nom}</span>}
                            </div>

                            <div className="jl-field">
                                <label className="jl-label" htmlFor="jl-input-prenom">Prénom</label>
                                <input
                                    id="jl-input-prenom"
                                    type="text"
                                    name="prenom"
                                    className="jl-input"
                                    value={data.prenom}
                                    onChange={(e) => setData('prenom', e.target.value)}
                                    placeholder="Jean"
                                />
                                {errors.prenom && <span className="jl-error">{errors.prenom}</span>}
                            </div>
                        </div>

                        {/* Email */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-input-email">Adresse email</label>
                            <input
                                id="jl-input-email"
                                type="email"
                                name="email"
                                className="jl-input"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="exemple@email.com"
                            />
                            {errors.email && <span className="jl-error">{errors.email}</span>}
                        </div>

                        {/* Password */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-input-password">Mot de passe</label>
                            <input
                                id="jl-input-password"
                                type="password"
                                name="password"
                                className="jl-input"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                            />
                            {errors.password && <span className="jl-error">{errors.password}</span>}
                        </div>

                        {/* Statut */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-select-statut">Statut</label>
                            <select
                                id="jl-select-statut"
                                name="statut"
                                className="jl-select"
                                value={data.statut}
                                onChange={(e) => setData('statut', e.target.value)}
                            >
                                <option value="">-- Choisir un statut --</option>
                                <option value="Recruteur">Recruteur</option>
                                <option value="Employee">Employée</option>
                            </select>
                            {errors.statut && <span className="jl-error">{errors.statut}</span>}
                        </div>

                        {/* Submit */}
                        <button
                            id="jl-register-submit"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Inscription en cours..." : "S'inscrire"}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;