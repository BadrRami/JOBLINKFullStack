import React, { useState } from 'react';
import { useForm, Link } from '@inertiajs/react';
import Menu from '../Menu';
import '../../../css/profile/edit-profile-recruteur.css';

const EditProfile = ({ user }) => {

    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        prenom: user.prenom || '',
        email: user.email || '',
        tel: user.tel || '',
        filiere: user.employee?.filiere || '',
        niveau_etude: user.employee?.niveau_etude || '',
        photo: null,
        gender: user.gender || '',
        birth_date: user.birth_date || '',
    });

    // ✅ useState ajouté — manquait dans l'original
    const [preview, setPreview] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !data.name || !data.prenom || !data.email ||
            !data.tel || !data.filiere || !data.niveau_etude ||
            !data.gender || !data.birth_date
        ) {
            alert('Veuillez remplir tous les champs');
        }
        put(route('profile.employee.update', { forceFormData: true }));
    };

    const photoSrc = preview
        || (user.employee?.photo
            ? `/storage/photos/${user.employee.photo}`
            : user.photo
                ? `/storage/photos/${user.photo}`
                : '/images.png');

    return (
        <div id="jl-edit-rec-page">
            <Menu />

            <div id="jl-edit-rec-body">
                <div id="jl-edit-rec-card">

                    {/* Header sombre avec avatar actuel */}
                    <div id="jl-edit-rec-header">
                        <img
                            id="jl-edit-rec-avatar"
                            src={photoSrc}
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
                                {/* ✅ error à l'intérieur du jl-field */}
                                {errors.name && <span className="jl-error">{errors.name}</span>}
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
                                {errors.prenom && <span className="jl-error">{errors.prenom}</span>}
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
                                {errors.email && <span className="jl-error">{errors.email}</span>}
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
                                {errors.tel && <span className="jl-error">{errors.tel}</span>}
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
                                {errors.filiere && <span className="jl-error">{errors.filiere}</span>}
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
                                {errors.niveau_etude && <span className="jl-error">{errors.niveau_etude}</span>}
                            </div>
                        </div>

                        {/* Genre + Date de naissance */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Genre</label>
                                <select
                                    className="jl-select"
                                    name="gender"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    <option value="femme">Femme</option>
                                    <option value="homme">Homme</option>
                                </select>
                                {errors.gender && <span className="jl-error">{errors.gender}</span>}
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Date de naissance</label>
                                <input
                                    type="date"
                                    className="jl-input"
                                    name="birth_date"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.target.value)}
                                />
                                {errors.birth_date && <span className="jl-error">{errors.birth_date}</span>}
                            </div>
                        </div>

                        {/* Section photo */}
                        <div id="jl-edit-rec-photo-section">
                            <img
                                id="jl-edit-rec-photo-preview"
                                src={photoSrc}
                                alt="photo actuelle"
                            />
                            <div id="jl-edit-rec-photo-info">
                                <span id="jl-edit-rec-photo-label">Photo de profil</span>
                                <div className="jl-file-wrap">
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        className="jl-file-input"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                setData('photo', file);
                                                setPreview(URL.createObjectURL(file));
                                            }
                                        }}
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