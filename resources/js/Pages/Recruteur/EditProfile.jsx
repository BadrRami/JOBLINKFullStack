import React from 'react';
import Menu from '../Menu';
import { useForm } from '@inertiajs/react';
import '../../../css/profile/edit-profile-recruteur.css';

const EditProfile = ({ user }) => {
    const { data, setData, put, processing } = useForm({
        name: user.name || '',
        prenom: user.prenom || '',
        email: user.email || '',
        tel: user.tel || '',
        poste: user.recruteur?.poste || '',
        gender: user.gender || '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('profile.recruteur.update', {
            forceFormData: true
        }));
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
                                user.photo
                                    ? `/storage/photos/${user.photo}`
                                    : '/images.png'
                            }
                            alt="photo profil"
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

                        {/* Genre + Poste */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Genre</label>
                                <select
                                    name="gender"
                                    className="jl-select"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                >
                                    <option value="">-- Choisir --</option>
                                    <option value="femme">Femme</option>
                                    <option value="homme">Homme</option>
                                </select>
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Poste</label>
                                <input
                                    type="text"
                                    className="jl-input"
                                    value={data.poste}
                                    onChange={(e) => setData('poste', e.target.value)}
                                    placeholder="Ex: DRH, Manager..."
                                />
                            </div>
                        </div>

                        {/* Section photo */}
                        <div id="jl-edit-rec-photo-section">
                            <img
                                id="jl-edit-rec-photo-preview"
                                src={
                                    user.photo
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

                        {/* Submit */}
                        <button
                            id="jl-edit-rec-submit"
                            type="submit"
                            disabled={processing}
                        >
                            <i className="bi bi-check-lg"></i>
                            {processing ? 'Enregistrement...' : 'Enregistrer les modifications'}
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;