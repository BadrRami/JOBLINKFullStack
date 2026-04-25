import React from 'react';
import Menu from './Menu';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';

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
        post(route('register')); // ✅ Inertia gère déjà data
    };

    return (
        <div>
            <Menu />

            <form onSubmit={handleSubmit}>

                {/* Email */}
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>

                {/* Nom */}
                <div className="mb-3">
                    <label>Nom</label>
                    <input
                        type="text"
                        name="nom"
                        className="form-control"
                        value={data.nom}
                        onChange={(e) => setData('nom', e.target.value)}
                    />
                    {errors.nom && <div className="text-danger">{errors.nom}</div>}
                </div>

                {/* Prénom */}
                <div className="mb-3">
                    <label>Prénom</label>
                    <input
                        type="text"
                        name="prenom"
                        className="form-control"
                        value={data.prenom}
                        onChange={(e) => setData('prenom', e.target.value)}
                    />
                    {errors.prenom && <div className="text-danger">{errors.prenom}</div>}
                </div>

                {/* Statut */}
                <div className="mb-3">
                    <label>Statut</label>
                    <select
                        name="statut"
                        className="form-control"
                        value={data.statut}
                        onChange={(e) => setData('statut', e.target.value)}
                    >
                        <option value="">-- Choisir --</option>
                        <option value="Recruteur">Recruteur</option>
                        <option value="Employee">Employée</option>
                        <option value="Admin">Admin</option>
                    </select>
                    {errors.statut && <div className="text-danger">{errors.statut}</div>}
                </div>

                {/* Submit */}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={processing}
                >
                    {processing ? "Inscription..." : "S'inscrire"}
                </button>

            </form>
        </div>
    );
};

export default Register;