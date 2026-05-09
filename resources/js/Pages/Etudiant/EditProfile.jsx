import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import Menu from '../Menu';
import '../../../css/profile/edit-profile-recruteur.css';

const EditProfile = ({ user }) => {

    const { data, setData, put, processing } = useForm({
        name: user.name || '',
        prenom: user.prenom || '',
        email: user.email || '',
        tel: user.employee?.tel || '',
        filiere: user.employee?.filiere || '',
        niveau_etude: user.employee?.niveau_etude || '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('profile.employee.update', { forceFormData: true }));
    };

    return (
        <div id="jl-edit-rec-page">
            <Menu />

            <div id="jl-edit-rec-body">
                <div id="jl-edit-rec-card">

                    {/* Header sombre avec avatar actuel */}
                    <div id="jl-edit-rec-header">
                        <img
                            id="jl-edit-rec-avatar"
                            src={
                                user.employee?.photo
                                    ? `/storage/photos/${user.employee.photo}`
                                    : user.photo
                                        ? `/storage/photos/${user.photo}`
                                        : '/images.png'
                            }
                            alt="profil"
                        />
                        <div id="jl-edit-rec-header-info">
                            <h2 id="jl-edit-rec-title">Modifier votre profil</h2>
                            <p id="jl-edit-rec-subtitle">
                                {user.name} {user.prenom}
                            </p>
                        </div>
                    </div>

                    <form
                        id="jl-edit-rec-form"
                        onSubmit={handleSubmit}
                        encType="multipart/form-data"
                    >

                        {/* Nom + Prénom */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Nom</label>
                                <input
                                    type="text"
                                    className="jl-input"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Prénom</label>
                                <input
                                    type="text"
                                    className="jl-input"
                                    value={data.prenom}
                                    onChange={(e) => setData('prenom', e.target.value)}
                                    placeholder="Votre prénom"
                                />
                            </div>
                        </div>

                        {/* Email + Téléphone */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Email</label>
                                <input
                                    type="email"
                                    className="jl-input"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="votre@email.com"
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Téléphone</label>
                                <input
                                    type="tel"
                                    className="jl-input"
                                    value={data.tel}
                                    onChange={(e) => setData('tel', e.target.value)}
                                    placeholder="06XXXXXXXX"
                                />
                            </div>
                        </div>

                        {/* Filière + Niveau d'étude */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Filière</label>
                                <input
                                    type="text"
                                    className="jl-input"
                                    value={data.filiere}
                                    onChange={(e) => setData('filiere', e.target.value)}
                                    placeholder="Ex: Informatique"
                                />
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Niveau d'étude</label>
                                <input
                                    type="text"
                                    className="jl-input"
                                    value={data.niveau_etude}
                                    onChange={(e) => setData('niveau_etude', e.target.value)}
                                    placeholder="Ex: Bac+3, Master..."
                                />
                            </div>
                        </div>

                        {/* Section photo */}
                        <div id="jl-edit-rec-photo-section">
                            <img
                                id="jl-edit-rec-photo-preview"
                                src={
                                    user.employee?.photo
                                        ? `/storage/photos/${user.employee.photo}`
                                        : user.photo
                                            ? `/storage/photos/${user.photo}`
                                            : '/images.png'
                                }
                                alt="photo actuelle"
                            />
                            <div id="jl-edit-rec-photo-info">
                                <span id="jl-edit-rec-photo-label">Photo de profil</span>
                                <div className="jl-file-wrap">
                                    <input
                                        type="file"
                                        className="jl-file-input"
                                        onChange={(e) => setData('photo', e.target.files[0])}
                                    />
                                    <span className="jl-file-btn">
                                        <i className="bi bi-upload"></i>
                                        Changer la photo
                                    </span>
                                    <span className="jl-file-name">
                                        {data.photo ? data.photo.name : 'Aucun fichier'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                id="jl-edit-rec-submit"
                                type="submit"
                                disabled={processing}
                                style={{ flex: 1 }}
                            >
                                <i className="bi bi-check-lg"></i>
                                {processing ? 'Enregistrement...' : 'Enregistrer les modifications'}
                            </button>
                            <Link
                                href="/profile/employee"
                                style={{
                                    height: '46px',
                                    padding: '0 20px',
                                    background: '#f1f5f9',
                                    color: '#475569',
                                    border: '1px solid #e2e8f0',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '7px',
                                    fontFamily: "'Segoe UI', sans-serif",
                                    transition: 'background 0.2s',
                                }}
                            >
                                <i className="bi bi-x-lg"></i>
                                Annuler
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;