import React from 'react';
import Menu from '../../../../Menu';
import { useForm, usePage } from '@inertiajs/react';
import '../../../../../../css/Admin/Dashboard/Users/part2/admin-modifier-user.css';

const Modifier = ({ user }) => {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        _method: 'PUT',
        name: '',
        prenom: '',
        email: '',
        etat: '',
        tel: '',
        filiere: '',
        niveau_etude: '',
        poste: '',
        photo: null,
        birth_date: '',
        gender: '',
    });

    const [preview, setPreview] = React.useState(null);

    React.useEffect(() => {
        if (user) {
            setData({
                _method: 'PUT',
                name: user.name || '',
                prenom: user.prenom || '',
                email: user.email || '',
                etat: user.etat || '',
                tel: user.tel || '',
                gender: user.gender?.toLowerCase() || '',
                birth_date: user.birth_date ? user.birth_date.split('T')[0] : '',
                filiere: user.employee?.filiere || '',
                niveau_etude: user.employee?.niveau_etude || '',
                poste: user.recruteur?.poste || '',
                photo: null,
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !data.name || !data.prenom || !data.email || !data.tel ||
            !data.etat || !data.filiere || !data.niveau_etude ||
            !data.gender || !data.birth_date
        ) {
            alert('Veuillez remplir tous les champs');
        }
        post(route('users.update', user.id), { forceFormData: true });
    };

    const normalizeRole = (role) =>
        role?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    const isEmployee = ["employe", "employee"].includes(normalizeRole(user?.role));
    const isRecruteur = normalizeRole(user?.role) === "recruteur";

    const currentPhoto = user.photo;
    const photoSrc = preview || (currentPhoto ? `/storage/photos/${currentPhoto}` : '/images.png');

    return (
        <div id="jl-mod-page">
            <Menu />

            <div id="jl-mod-body">
                <div id="jl-mod-card">

                    {/* Header sombre */}
                    <div id="jl-mod-header">
                        <img id="jl-mod-avatar" src={photoSrc} alt="profil" />
                        <div id="jl-mod-header-info">
                            <h2 id="jl-mod-title">Modifier un utilisateur</h2>
                            <p id="jl-mod-subtitle">{user.name} {user.prenom}</p>
                            <span id="jl-mod-role-badge">{user.role}</span>
                        </div>
                    </div>

                    {/* Flash */}
                    {flash.success && (
                        <div className="jl-flash jl-flash-success">{flash.success}</div>
                    )}

                    <form id="jl-mod-form" onSubmit={handleSubmit}>

                        {/* Informations générales */}
                        <span className="jl-mod-section">Informations générales</span>

                        {/* Nom + Prénom */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Nom</label>
                                <input type="text" className="jl-input" name="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)} />
                                {errors.name && <span className="jl-error">{errors.name}</span>}
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Prénom</label>
                                <input type="text" className="jl-input" name="prenom"
                                    value={data.prenom}
                                    onChange={(e) => setData('prenom', e.target.value)} />
                                {errors.prenom && <span className="jl-error">{errors.prenom}</span>}
                            </div>
                        </div>

                        {/* Email + État */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Email</label>
                                <input type="email" className="jl-input" name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)} />
                                {errors.email && <span className="jl-error">{errors.email}</span>}
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">État</label>
                                <select className="jl-select" name="etat"
                                    value={data.etat}
                                    onChange={(e) => setData('etat', e.target.value)}>
                                    <option value="profil validé">Profil validé</option>
                                    <option value="profil en attente">Profil en attente</option>
                                </select>
                                {errors.etat && <span className="jl-error">{errors.etat}</span>}
                            </div>
                        </div>

                        {/* Téléphone + Genre */}
                        <div className="jl-field-row">
                            <div className="jl-field">
                                <label className="jl-label">Téléphone</label>
                                <input type="tel" className="jl-input" name="tel"
                                    value={data.tel}
                                    onChange={(e) => setData('tel', e.target.value)} />
                                {errors.tel && <span className="jl-error">{errors.tel}</span>}
                            </div>
                            <div className="jl-field">
                                <label className="jl-label">Genre</label>
                                <select className="jl-select" name="gender"
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}>
                                    <option value="">-- Choisir --</option>
                                    <option value="femme">Femme</option>
                                    <option value="homme">Homme</option>
                                </select>
                                {errors.gender && <span className="jl-error">{errors.gender}</span>}
                            </div>
                        </div>

                        {/* Date de naissance */}
                        <div className="jl-field">
                            <label className="jl-label">Date de naissance</label>
                            <input type="date" className="jl-input" name="birth_date"
                                value={data.birth_date}
                                onChange={(e) => setData('birth_date', e.target.value)} />
                            {errors.birth_date && <span className="jl-error">{errors.birth_date}</span>}
                        </div>

                        {/* Champs Employé */}
                        {isEmployee && (
                            <>
                                <span className="jl-mod-section">Informations employé</span>
                                <div className="jl-field-row">
                                    <div className="jl-field">
                                        <label className="jl-label">Filière</label>
                                        <input type="text" className="jl-input" name="filiere"
                                            value={data.filiere}
                                            onChange={(e) => setData('filiere', e.target.value)} />
                                        {errors.filiere && <span className="jl-error">{errors.filiere}</span>}
                                    </div>
                                    <div className="jl-field">
                                        <label className="jl-label">Niveau d'étude</label>
                                        <input type="text" className="jl-input" name="niveau_etude"
                                            value={data.niveau_etude}
                                            onChange={(e) => setData('niveau_etude', e.target.value)} />
                                        {errors.niveau_etude && <span className="jl-error">{errors.niveau_etude}</span>}
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Champs Recruteur */}
                        {isRecruteur && (
                            <>
                                <span className="jl-mod-section">Informations recruteur</span>
                                <div className="jl-field">
                                    <label className="jl-label">Poste</label>
                                    <input type="text" className="jl-input" name="poste"
                                        value={data.poste}
                                        onChange={(e) => setData('poste', e.target.value)} />
                                    {errors.poste && <span className="jl-error">{errors.poste}</span>}
                                </div>
                            </>
                        )}

                        {/* Photo */}
                        <span className="jl-mod-section">Photo de profil</span>
                        <div id="jl-mod-photo-section">
                            <img id="jl-mod-photo-preview" src={photoSrc} alt="photo actuelle" />
                            <div id="jl-mod-photo-info">
                                <span id="jl-mod-photo-label">Photo actuelle</span>
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
                        <div id="jl-mod-actions">
                            <button id="jl-mod-submit" type="submit" disabled={processing}>
                                <i className="bi bi-check-lg"></i>
                                {processing ? 'Enregistrement...' : 'Enregistrer'}
                            </button>
                            <a id="jl-mod-cancel" href={route('users.index')}>
                                <i className="bi bi-x-lg"></i>
                                Annuler
                            </a>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modifier;