import React from 'react';
import Menu from '../Menu';
import { Link, router } from '@inertiajs/react';
import { route } from 'ziggy-js';

const Profile = ({ user }) => {

    const handleDelete = () => {
        if (confirm("Voulez-vous vraiment supprimer votre compte ?")) {
            router.delete('/profile/delete');
        }
    };

    return (
        <div>
            <Menu />

            <div className="container mt-5">

                <div className="card shadow-lg p-4">

                    <div className="row align-items-center">

                        {/* PHOTO */}
                        <div className="col-md-3 text-center">
                            <img
                                src={user.photo ? `/storage/photos/${user.photo}` : '/images.png'}
                                className="img-fluid rounded-circle border"
                                width="150"
                                alt="profil"
                            />
                        </div>

                        {/* INFOS */}
                        <div className="col-md-9">

                            <h3 className="mb-3">
                                {user.name} {user.prenom}
                            </h3>

                            <p><strong>Email :</strong> {user.email}</p>
                            <p><strong>Rôle :</strong> {user.role}</p>

                            <p><strong>Téléphone :</strong> {user.employee?.tel}</p>
                            <p><strong>Filière :</strong> {user.employee?.filiere}</p>
                            <p><strong>Niveau :</strong> {user.employee?.niveau_etude}</p>

                            <span className="badge bg-info">
                                {user.employee?.etat}
                            </span>

                        </div>

                    </div>

                    <hr />

                    {/* ACTIONS */}
                    <div className="d-flex gap-2 flex-wrap">

                        <Link href="/profile/employee/edit" className="btn btn-warning">
                            Modifier Profil
                        </Link>

                        {user.employee?.etat !== 'profile validé' && (
                            <div className="alert alert-warning">
                                Vous ne pouvez pas créer des offres tant que votre compte n'est pas validé
                            </div>
                        )}

                        {user.employee?.etat === 'profile validé' && (
                            <>
                                <Link href={route('publications.create')} className="btn btn-secondary">
                                    Créer un poste
                                </Link>

                                <Link href={route('publications.index')} className="btn btn-dark">
                                    Mes postes
                                </Link>

                                <Link href="" className="btn btn-success">
                                    Mes Candidatures
                                </Link>
                            </>
                        )}

                        <Link href="" className="btn btn-primary">
                            Sauvegardes
                        </Link>

                        <button
                            className="btn btn-danger"
                            onClick={handleDelete}
                        >
                            Supprimer mon compte
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;