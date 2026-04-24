import React from 'react';
import Menu from './Menu';
import { useForm, Link } from '@inertiajs/react';
import { route } from 'ziggy-js';

const Login = () => {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login.traiter')); // ✅ Inertia envoie data automatiquement
    };

    return (
        <div>
            <Menu />
            <h1>Se connecter</h1>

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
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>

                {/* Checkbox */}
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Check me out</label>
                </div>

                {/* Submit */}
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={processing}
                >
                    {processing ? "Connexion..." : "Se connecter"}
                </button>

                <p>
                    Vous n'avez pas un compte ?{' '}
                    <Link className="nav-link d-inline" href="/register">
                        Inscription
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default Login;