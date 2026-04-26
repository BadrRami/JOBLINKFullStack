import React from 'react';
import Menu from './Menu';
import { useForm, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';
import '../../css/Login.css';

const Login = () => {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login.traiter'));
    };

    return (
        <div id="jl-login-page">
            <Menu />

            <div id="jl-login-body">
                <div id="jl-login-card">

                    <div id="jl-login-header">
                        <h1 id="jl-login-title">Se connecter</h1>
                        <p id="jl-login-subtitle">Bienvenue sur JobLink, connectez-vous pour continuer</p>
                    </div>

                    <form id="jl-login-form" onSubmit={handleSubmit}>

                        {/* Email */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-input-email">
                                Adresse email
                            </label>
                            <input
                                id="jl-input-email"
                                type="email"
                                name="email"
                                className="jl-input"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="exemple@email.com"
                            />
                            {errors.email && (
                                <span className="jl-error">{errors.email}</span>
                            )}
                        </div>

                        {/* Password */}
                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-input-password">
                                Mot de passe
                            </label>
                            <input
                                id="jl-input-password"
                                type="password"
                                name="password"
                                className="jl-input"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                            />
                            {errors.password && (
                                <span className="jl-error">{errors.password}</span>
                            )}
                        </div>

                        {/* Checkbox */}
                        <div className="jl-checkbox-group">
                            <input
                                id="jl-remember"
                                type="checkbox"
                                className="jl-checkbox"
                            />
                            <label className="jl-checkbox-label" htmlFor="jl-remember">
                                Se souvenir de moi
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            id="jl-login-submit"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Connexion en cours..." : "Se connecter"}
                        </button>

                        {/* Register link */}
                        <p id="jl-login-register">
                            Vous n'avez pas de compte ?{' '}
                            <Link className="jl-register-link" href="/register">
                                S'inscrire
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;