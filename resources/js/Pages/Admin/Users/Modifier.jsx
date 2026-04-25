import React from 'react';
import Menu from '../../Menu';
import { useForm, usePage } from '@inertiajs/react';

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
    });

    const [preview, setPreview] = React.useState(null);

    React.useEffect(() => {
        if (user) {
            console.log("role:", user?.role);
console.log("employee:", user?.employee);
console.log("isEmployee:", isEmployee);
            setData({
                _method: 'PUT',
                name: user.name || '',
                prenom: user.prenom || '',
                email: user.email || '',
                etat: user.etat || '',
                tel: user.tel || '',
                filiere: user.employee?.filiere || '',
                niveau_etude: user.employee?.niveau_etude || '',
                poste: user.recruteur?.poste || '',
                photo: null,
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.update', user.id), {
            forceFormData: true,
        });
    };

    const normalizeRole = (role) =>
        role?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    const isEmployee = ["employe", "employee"].includes(normalizeRole(user?.role));
    const isRecruteur = normalizeRole(user?.role) === "recruteur";

    const currentPhoto = isRecruteur
        ? user.photo
        : user.photo;

    const photoSrc = preview || (currentPhoto ? `/storage/photos/${currentPhoto}` : '/images.png');

    return (
        <div>
            <Menu />
            <h1>Modifier un utilisateur</h1>

            {flash.success && <div className="alert alert-success">{flash.success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="row">

                    {/* Nom */}
                    <div className="col-md-6 mb-3">
                        <label>Nom</label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                    </div>

                    {/* Prénom */}
                    <div className="col-md-6 mb-3">
                        <label>Prénom</label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.prenom}
                            onChange={(e) => setData('prenom', e.target.value)}
                        />
                        {errors.prenom && <div className="text-danger">{errors.prenom}</div>}
                    </div>

                    {/* Email */}
                    <div className="col-md-6 mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        {errors.email && <div className="text-danger">{errors.email}</div>}
                    </div>

                    {/* Etat */}
                    <div className="col-md-6 mb-3">
                        <label>Etat</label>
                        <select
                            className="form-control"
                            value={data.etat}
                            onChange={(e) => setData('etat', e.target.value)}
                        >
                            <option value="profil validé">profil validé</option>
                            <option value="profil en attente">profil en attente</option>
                            
                        </select>
                        {errors.etat && <div className="text-danger">{errors.etat}</div>}
                    </div>

                    {/* Téléphone (commun) */}
                    <div className="col-md-6 mb-3">
                        <label>Téléphone</label>
                        <input
                            type="tel"
                            className="form-control"
                            value={data.tel}
                            onChange={(e) => setData('tel', e.target.value)}
                        />
                        {errors.tel && <div className="text-danger">{errors.tel}</div>}
                    </div>

                    {/* Champs spécifiques Employé */}
                    {isEmployee && (
                        <>
                            <div className="col-md-6 mb-3">
                                <label>Filière</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.filiere}
                                    onChange={(e) => setData('filiere', e.target.value)}
                                />
                                {errors.filiere && <div className="text-danger">{errors.filiere}</div>}
                            </div>

                            <div className="col-md-6 mb-3">
                                <label>Niveau d'étude</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.niveau_etude}
                                    onChange={(e) => setData('niveau_etude', e.target.value)}
                                />
                                {errors.niveau_etude && <div className="text-danger">{errors.niveau_etude}</div>}
                            </div>
                        </>
                    )}

                    {/* Champs spécifiques Recruteur */}
                    {isRecruteur && (
                        <div className="col-md-6 mb-3">
                            <label>Poste</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.poste}
                                onChange={(e) => setData('poste', e.target.value)}
                            />
                            {errors.poste && <div className="text-danger">{errors.poste}</div>}
                        </div>
                    )}

                    {/* Photo */}
                    <div className="col-md-12 mb-3">
                        <img
                            src={photoSrc}
                            className="img-fluid rounded-circle border"
                            width="150"
                            alt="profil"
                        />
                    </div>

                    <div className="col-md-12 mb-3">
                        <label>Photo</label>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setData('photo', file);
                                    setPreview(URL.createObjectURL(file));
                                }
                            }}
                        />
                        {errors.photo && <div className="text-danger">{errors.photo}</div>}
                    </div>

                </div>

                <div className="d-flex justify-content-between mt-3">
                    <button type="submit" className="btn btn-primary" disabled={processing}>
                        Modifier
                    </button>

                    <a href={route('users.index')} className="btn btn-secondary">
                        Annuler
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Modifier;