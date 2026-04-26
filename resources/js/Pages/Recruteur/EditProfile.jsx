import React, { useState } from 'react';
import Menu from '../Menu';
import { useForm } from '@inertiajs/react';

const EditProfile = ({ user }) => {

    const { data, setData, put, processing } = useForm({
        name: user.name || '',
        prenom: user.prenom || '',
        email: user.email || '',
        tel: user.tel || '',
        poste: user.recruteur?.poste || '',
        photo: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('profile.recruteur.update', {
            forceFormData: true
        }));
    };

    return (
        <>
            <Menu />

            <h1>Modifier votre profil</h1>

            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <label>Nom</label>
                <input
                    type="text"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                />
                <br />

                <label>Prénom</label>
                <input
                    type="text"
                    value={data.prenom}
                    onChange={(e) => setData('prenom', e.target.value)}
                />
                <br />

                <label>Email</label>
                <input
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                />
                <br />

                <label>Téléphone</label>
                <input
                    type="tel"
                    value={data.tel}
                    onChange={(e) => setData('tel', e.target.value)}
                />
                <br />

                <label>Poste</label>
                <input
                    type="text"
                    value={data.poste}
                    onChange={(e) => setData('poste', e.target.value)}
                />
                <br />

                {/* Photo actuelle */}
                {user.photo ? (
                    <img
                        src={`/storage/photos/${user.recruteur.photo}`}
                        alt="photo"
                        width="80"
                    />
                ) : (
                    <img src="/images.png" alt="photo profile" width="80" />
                )}

                <br />

                <label>Photo de profil</label>
                <input
                    type="file"
                    onChange={(e) => setData('photo', e.target.files[0])}
                />
                <br />

                <button type="submit" disabled={processing}>
                    Modifier
                </button>

            </form>
        </>
    );
};

export default EditProfile;