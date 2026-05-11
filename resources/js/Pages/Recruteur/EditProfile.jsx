import React from 'react';
import Menu from '../Menu';
import { useForm, usePage } from '@inertiajs/react';
import '../../../css/profile/edit-profile-recruteur.css';

const EditProfile = ({ user }) => {

    const { flash } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: user.name || '',
        prenom: user.prenom || '',
        email: user.email || '',
        tel: user.tel || '',
        poste: user.recruteur?.poste || '',
        gender: user.gender || '',
        birth_date: user.birth_date || '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !data.name.trim() ||
            !data.prenom.trim() ||
            !data.email.trim() ||
            !data.tel.trim() ||
            !data.poste.trim() ||
            !data.gender ||
            !data.birth_date
        ) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        put(route('profile.recruteur.update', { forceFormData: true }));
    };

    return (
        <div id="jl-edit-rec-page">

            <Menu />

            {flash?.success && (
                <div className="jl-flash jl-flash-success">
                    {flash.success}
                </div>
            )}

            <div id="jl-edit-rec-body">

                <div id="jl-edit-rec-card">

                    {/* HEADER */}
                    <div id="jl-edit-rec-header">

                        <img
                            id="jl-edit-rec-avatar"
                            src={
                                data.photo
                                    ? URL.createObjectURL(data.photo)
                                    : user.photo
                                        ? `/storage/photos/${user.photo}`
                                        : '/images.png'
                            }
                            alt="photo profil"
                        />

                        <div id="jl-edit-rec-header-info">
                            <h2 id="jl-edit-rec-title">
                                Modifier votre profil
                            </h2>

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

                        {/* NOM + PRENOM */}
                        <div className="jl-field-row">

                            <div className="jl-field">

                                <label className="jl-label">
                                    Nom
                                </label>

                                <input
                                    type="text"
                                    className="jl-input"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Votre nom"
                                />

                                {errors.name && (
                                    <span className="jl-error">
                                        {errors.name}
                                    </span>
                                )}

                            </div>

                            <div className="jl-field">

                                <label className="jl-label">
                                    Prénom
                                </label>

                                <input
                                    type="text"
                                    className="jl-input"
                                    name="prenom"
                                    value={data.prenom}
                                    onChange={(e) =>
                                        setData('prenom', e.target.value)
                                    }
                                    placeholder="Votre prénom"
                                />

                                {errors.prenom && (
                                    <span className="jl-error">
                                        {errors.prenom}
                                    </span>
                                )}

                            </div>

                        </div>

                        {/* EMAIL + TEL */}
                        <div className="jl-field-row">

                            <div className="jl-field">

                                <label className="jl-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="jl-input"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="votre@email.com"
                                />

                                {errors.email && (
                                    <span className="jl-error">
                                        {errors.email}
                                    </span>
                                )}

                            </div>

                            <div className="jl-field">

                                <label className="jl-label">
                                    Téléphone
                                </label>

                                <input
                                    type="tel"
                                    className="jl-input"
                                    name="tel"
                                    value={data.tel}
                                    onChange={(e) =>
                                        setData('tel', e.target.value)
                                    }
                                    placeholder="06XXXXXXXX"
                                />

                                {errors.tel && (
                                    <span className="jl-error">
                                        {errors.tel}
                                    </span>
                                )}

                            </div>

                        </div>

                        {/* GENDER + POSTE + DATE */}
                        <div className="jl-field-row">

                            <div className="jl-field">

                                <label className="jl-label">
                                    Genre
                                </label>

                                <select
                                    name="gender"
                                    className="jl-select"
                                    value={data.gender}
                                    onChange={(e) =>
                                        setData('gender', e.target.value)
                                    }
                                >
                                    <option value="">
                                        -- Choisir --
                                    </option>

                                    <option value="femme">
                                        Femme
                                    </option>

                                    <option value="homme">
                                        Homme
                                    </option>
                                </select>

                                {errors.gender && (
                                    <span className="jl-error">
                                        {errors.gender}
                                    </span>
                                )}

                            </div>

                            <div className="jl-field">

                                <label className="jl-label">
                                    Poste
                                </label>

                                <input
                                    type="text"
                                    className="jl-input"
                                    name="poste"
                                    value={data.poste}
                                    onChange={(e) =>
                                        setData('poste', e.target.value)
                                    }
                                    placeholder="Ex: DRH, Manager..."
                                />

                                {errors.poste && (
                                    <span className="jl-error">
                                        {errors.poste}
                                    </span>
                                )}

                            </div>

                            <div className="jl-field">

                                <label className="jl-label">
                                    Date de naissance
                                </label>

                                <input
                                    type="date"
                                    className="jl-input"
                                    name="birth_date"
                                    value={data.birth_date}
                                    onChange={(e) =>
                                        setData('birth_date', e.target.value)
                                    }
                                />

                                {errors.birth_date && (
                                    <span className="jl-error">
                                        {errors.birth_date}
                                    </span>
                                )}

                            </div>

                        </div>

                        {/* PHOTO */}
                        <div id="jl-edit-rec-photo-section">

                            <img
                                id="jl-edit-rec-photo-preview"
                                src={
                                    data.photo
                                        ? URL.createObjectURL(data.photo)
                                        : user.photo
                                            ? `/storage/photos/${user.photo}`
                                            : '/images.png'
                                }
                                alt="photo actuelle"
                            />

                            <div id="jl-edit-rec-photo-info">

                                <span id="jl-edit-rec-photo-label">
                                    Photo de profil
                                </span>

                                <div className="jl-file-wrap">

                                    <input
                                        type="file"
                                        className="jl-file-input"
                                        name="photo"
                                        accept=".jpg,.jpeg,.png"
                                        onChange={(e) =>
                                            setData(
                                                'photo',
                                                e.target.files[0]
                                            )
                                        }
                                    />

                                    <span className="jl-file-btn">
                                        <i className="bi bi-upload"></i>
                                        Changer la photo
                                    </span>

                                    <span className="jl-file-name">
                                        {data.photo
                                            ? data.photo.name
                                            : 'Aucun fichier'}
                                    </span>

                                </div>

                                {errors.photo && (
                                    <span className="jl-error">
                                        {errors.photo}
                                    </span>
                                )}

                            </div>

                        </div>

                        {/* BUTTON */}
                        <button
                            id="jl-edit-rec-submit"
                            type="submit"
                            disabled={processing}
                        >

                            <i className="bi bi-check-lg"></i>

                            {processing
                                ? 'Enregistrement...'
                                : 'Enregistrer les modifications'}

                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
};

export default EditProfile;