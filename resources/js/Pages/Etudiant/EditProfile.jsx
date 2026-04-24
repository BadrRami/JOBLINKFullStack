import React from 'react';
import { useForm, Link } from '@inertiajs/react';
import Menu from '../Menu';

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
        <>
        <Menu />
        <div className="container mt-4">

            <div className="card shadow-lg p-4">

                <h3 className="mb-4">Modifier votre profil</h3>

                <form onSubmit={handleSubmit} encType="multipart/form-data">

                    <div className="row">

                        {/* Nom */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Nom</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                        </div>

                        {/* Prénom */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.prenom}
                                onChange={(e) => setData('prenom', e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </div>

                        {/* Téléphone */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Téléphone</label>
                            <input
                                type="tel"
                                className="form-control"
                                value={data.tel}
                                onChange={(e) => setData('tel', e.target.value)}
                            />
                        </div>

                        {/* Filière */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Filière</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.filiere}
                                onChange={(e) => setData('filiere', e.target.value)}
                            />
                        </div>

                        {/* Niveau */}
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Niveau d'étude</label>
                            <input
                                type="text"
                                className="form-control"
                                value={data.niveau_etude}
                                onChange={(e) => setData('niveau_etude', e.target.value)}
                            />
                        </div>

                        {/* Photo actuelle */}
                        <div className="col-md-12 mb-3 text-center">

                            {user.employee?.photo ? (
                                <img
                                    src={`/storage/photos/${user.employee.photo}`}
                                    className="rounded-circle mb-3"
                                    width="120"
                                    alt="profile"
                                />
                            ) : (
                                <img
                                    src="/images.png"
                                    className="rounded-circle mb-3"
                                    width="120"
                                    alt="default"
                                />
                            )}

                            <br />

                            <label className="form-label">Photo de profil</label>
                            <input
                                type="file"
                                className="form-control"
                                onChange={(e) => setData('photo', e.target.files[0])}
                            />

                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-3 d-flex gap-2">

                        <button type="submit" className="btn btn-primary" disabled={processing}>
                            Modifier
                        </button>

                        <Link href="/profile/employee" className="btn btn-secondary">
                            Annuler
                        </Link>

                    </div>

                </form>

            </div>

        </div>
        </>
    );
};

export default EditProfile;