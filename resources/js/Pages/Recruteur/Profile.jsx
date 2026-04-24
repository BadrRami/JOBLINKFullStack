import React, { useEffect } from 'react';
import Menu from '../Menu';
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

    useEffect(() => {
        if (user) {
            setData({
                _method: 'PUT',
                name: user.name || '',
                prenom: user.prenom || '',
                email: user.email || '',
                etat: user.recruteur?.etat || '',
                tel: user.employee?.tel || user.recruteur?.tel || '',
                filiere: user.employee?.filiere || '',
                niveau_etude: user.employee?.niveau_etude || '',
                poste: user.recruteur?.poste || '',
                photo: null,
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('users.update', user.id));
    };

    return (
        <>
            <Menu />

            <div className="container mt-4">

                {/* ✅ équivalent session success */}
                {flash.success && (
                    <div className="alert alert-success">
                        {flash.success}
                    </div>
                )}

                <h3 className="mb-4">Modifier le profil</h3>

                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                        </div>

                        {/* Etat */}
                        <div className="col-md-6 mb-3">
                            <label>Etat</label>
                            <select
                                className="form-control"
                                value={data.etat}
                                onChange={(e) => setData('etat', e.target.value)}
                            >
                                {user.role === "Recruteur" ? (
                                    <>
                                        <option value="profil validé">profil validé</option>
                                        <option value="profil en attente">profil en attente</option>
                                    </>
                                ) : (
                                    <>
                                        <option value="profile validé">profile validé</option>
                                        <option value="en attente de validation">en attente de validation</option>
                                    </>
                                )}
                            </select>
                        </div>

                        {/* 👇 CONDITION EXACTE */}
                        {user.role === "Employée" ? (
                            <>
                                {/* Téléphone */}
                                <div className="col-md-6 mb-3">
                                    <label>Téléphone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        value={data.tel}
                                        onChange={(e) => setData('tel', e.target.value)}
                                    />
                                </div>

                                {/* Filière */}
                                <div className="col-md-6 mb-3">
                                    <label>Filière</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.filiere}
                                        onChange={(e) => setData('filiere', e.target.value)}
                                    />
                                </div>

                                {/* Niveau */}
                                <div className="col-md-6 mb-3">
                                    <label>Niveau d'étude</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.niveau_etude}
                                        onChange={(e) => setData('niveau_etude', e.target.value)}
                                    />
                                </div>

                                {/* Photo */}
                                <div className="col-md-12 mb-3 text-center">
                                    <img
                                        src={user.recruteur?.photo
                                            ? `/storage/photos/${user.recruteur.photo}`
                                            : '/images.png'}
                                        className="rounded-circle mb-3"
                                        width="120"
                                    />
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => setData('photo', e.target.files[0])}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Téléphone */}
                                <div className="col-md-6 mb-3">
                                    <label>Téléphone</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        value={data.tel}
                                        onChange={(e) => setData('tel', e.target.value)}
                                    />
                                </div>

                                {/* Poste */}
                                <div className="col-md-6 mb-3">
                                    <label>Poste</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={data.poste}
                                        onChange={(e) => setData('poste', e.target.value)}
                                    />
                                </div>

                                {/* Photo */}
                                <div className="col-md-12 mb-3 text-center">
                                    <img
                                        src={user.recruteur?.photo
                                            ? `/storage/photos/${user.recruteur.photo}`
                                            : '/images.png'}
                                        className="rounded-circle mb-3"
                                        width="120"
                                    />
                                    <input
                                        type="file"
                                        className="form-control"
                                        onChange={(e) => setData('photo', e.target.files[0])}
                                    />
                                </div>
                            </>
                        )}

                    </div>

                    <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" disabled={processing}>
                            Modifier
                        </button>

                        <a href={route('profile.admin')} className="btn btn-secondary">
                            Annuler
                        </a>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Modifier;