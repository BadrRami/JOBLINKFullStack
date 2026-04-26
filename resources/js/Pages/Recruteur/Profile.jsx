import React from 'react';
import Menu from '../Menu';
import { usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
const Profile = ({user}) => {
    const { flash } = usePage().props;
    return (
        <div>
            <Menu />
            <div className="container mt-5">
                {flash.success && (
                <div classNameName="alert alert-success">
                    {flash.success}
                </div>
            )}

    <div className="card shadow-lg p-4">

        <div className="row align-items-center">

            <div className="col-md-3 text-center">
                <img src={user.photo ? `/storage/photos/${user.photo}` : '/images.png'}
                     className="img-fluid rounded-circle border"
                     width="150"/>
            </div>

            <div className="col-md-9">
                <h3 className="mb-3">
                    {user.name} {user.prenom}
                </h3>

                <p className="mb-1"><strong>Email :</strong> {user.email}</p>
                <p className="mb-1"><strong>Rôle :</strong> {user.role}</p>
                <p className="mb-1"><strong>Téléphone :</strong> {user.recruteur?.tel}</p>
                <p className="mb-1"><strong>Poste :</strong> {user.recruteur?.poste}</p>

                <p className="mt-2">
                    <span className="badge bg-info">
                        {user.etat}
                    </span>
                </p>
            </div>

        </div>

        <hr/>

        <div className="d-flex gap-2 flex-wrap">

            <a href={route('profile.recruteur.edit')} className="btn btn-warning">
                Modifier Profil
            </a>
            <a href={route('entrepriseRecruteur.create')} className="btn btn-info">
                Associer à une entreprise
            </a>
            {user.etat === 'profil en attente' ?(
            <div className="alert alert-warning">
                <p>vous ne pouvez pas créer des offres car votre compte et en attend de validation</p>
            </div>
            ) : (
                <>
            <a href={route('offresrecruteur.index')} className="btn btn-success">
                Mes Offres
            </a>

            <a href={route('offres.create')} className="btn btn-primary">
                Créer une Offre
            </a>
            <a href={route('publications.create')} className="btn btn-secondary">
                Créer un poste
            </a>
            <a href={route('publications.index')} className="btn btn-dark">
                Mes postes
            </a>
            </>
            )}
            
                <button className="btn btn-danger">
                    Supprimer mon compte
                </button>
            

        </div>

    </div>
</div>
        </div>
    );
}

export default Profile;
