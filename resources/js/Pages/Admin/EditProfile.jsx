import React from 'react';
import Menu from '../Menu';
import { useForm, usePage } from '@inertiajs/react';
import '../../../css/Admin/ModiferProfile.css';

const EditProfile = ({ user }) => {
    const { flash } = usePage().props;

    const { data, setData, put, processing, errors, reset } = useForm({
        name: '',
        prenom: '',
        email: '',
    });

    React.useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                prenom: user.prenom || '',
                email: user.email || '',
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('profile.admin.update', user.id));
    };

    return (
        <div id="jl-edit-page">
            <Menu />

            <div id="jl-edit-body">
                <div id="jl-edit-card">

                    {/* Header sombre */}
                    <div id="jl-edit-header">
                        <div id="jl-edit-header-icon">
                            <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                        </div>
                        <div id="jl-edit-header-text">
                            <h2 id="jl-edit-title">Modifier votre profil</h2>
                            <p id="jl-edit-subtitle">Mettez à jour vos informations personnelles</p>
                        </div>
                    </div>

                    {/* Flash message succès */}
                    {flash?.success && (
                        <div id="jl-edit-flash">{flash.success}</div>
                    )}

                    {/* Formulaire */}
                    <form id="jl-edit-form" onSubmit={handleSubmit} method="POST">

                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-edit-name">Nom</label>
                            <input
                                id="jl-edit-name"
                                type="text"
                                name="name"
                                className="jl-input"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Votre nom"
                            />
                            {errors.name && <span className="jl-error">{errors.name}</span>}
                        </div>

                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-edit-prenom">Prénom</label>
                            <input
                                id="jl-edit-prenom"
                                type="text"
                                name="prenom"
                                className="jl-input"
                                value={data.prenom}
                                onChange={(e) => setData('prenom', e.target.value)}
                                placeholder="Votre prénom"
                            />
                            {errors.prenom && <span className="jl-error">{errors.prenom}</span>}
                        </div>

                        <div className="jl-field">
                            <label className="jl-label" htmlFor="jl-edit-email">Email</label>
                            <input
                                id="jl-edit-email"
                                type="email"
                                name="email"
                                className="jl-input"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="votre@email.com"
                            />
                            {errors.email && <span className="jl-error">{errors.email}</span>}
                        </div>

                        <div id="jl-edit-actions">
                            <button
                                type="submit"
                                className="jl-btn jl-btn-save"
                                disabled={processing}
                            >
                                {processing ? "Enregistrement..." : "Enregistrer"}
                            </button>
                            <a
                                href={route('profile.admin')}
                                className="jl-btn jl-btn-back"
                            >
                                Retour
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;