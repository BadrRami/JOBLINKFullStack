import React from 'react';
import Menu from '../../Menu';
import { useForm, usePage } from '@inertiajs/react';

const Modifier = ({ user }) => {
    const { flash } = usePage().props;

    const { data, setData, put, processing, errors } = useForm({
        name: '',
        prenom: '',
        email: '',
        etat: '',
        tel: '',
        filiere: '',
        niveau_etude: '',
        poste: '',
    });

    React.useEffect(() => {
        if (user) {
            setData({
                name: user.name || '',
                prenom: user.prenom || '',
                email: user.email || '',
                etat: user.recruteur?.etat || '',
                tel: user.employee?.tel || user.recruteur?.tel || '',
                filiere: user.employee?.filiere || '',
                niveau_etude: user.employee?.niveau_etude || '',
                poste: user.recruteur?.poste || '',
            });
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('users.update', user.id));
    };

    return (
        <div>
            <Menu />
            <h1>Modifier un utilisateur</h1>

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
                                    <option value="profil validé">profil validé</option>
                                    <option value="en attente de validation">en attente de validation</option>
                                </>
                            )}
                        </select>
                    </div>

                    {/* Condition */}
                    {user.role === "Employé" ? (
                        <>
                            <div className="col-md-6 mb-3">
                                <label>Téléphone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={data.tel}
                                    onChange={(e) => setData('tel', e.target.value)}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label>Filière</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.filiere}
                                    onChange={(e) => setData('filiere', e.target.value)}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label>Niveau d'étude</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.niveau_etude}
                                    onChange={(e) => setData('niveau_etude', e.target.value)}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-md-6 mb-3">
                                <label>Téléphone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    value={data.tel}
                                    onChange={(e) => setData('tel', e.target.value)}
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <label>Poste</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={data.poste}
                                    onChange={(e) => setData('poste', e.target.value)}
                                />
                            </div>
                        </>
                    )}

                </div>

                <div className="d-flex justify-content-between">
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