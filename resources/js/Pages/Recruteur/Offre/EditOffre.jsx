import React from 'react';
import Menu from '../../Menu';
import { useForm, usePage } from '@inertiajs/react';

const EditOffre = ({ offre, domaines, villes }) => {

    const { flash } = usePage().props;

    const { data, setData, put, processing, errors, reset } = useForm({
        titre: '',
        description: '',
        type: '',
        domaine_id: '',
        ville_id: '',
        localisation: '',
        salaire: '',
        etat: '',
    });

    React.useEffect(() => {
        if (offre) {
            setData({
                titre: offre.titre || '',
                description: offre.description || '',
                type: offre.type || '',
                domaine_id: offre.domaine_id || '',
                ville_id: offre.ville_id || '',
                localisation: offre.localisation || '',
                salaire: offre.salaire || '',
                etat: offre.etat || '',
            });
        }
    }, [offre]);

    const handleSubmit = (e) => {
        e.preventDefault();

        put(route('offres.update', offre.id));
    };

    return (
        <div>
            <Menu />
            {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )}
            
            <form onSubmit={handleSubmit}>

                <label htmlFor="Titre">Titre</label>
                <input
                    type="text"
                    value={data.titre}
                    onChange={(e) => setData('titre', e.target.value)}
                />
                {errors.titre && <div className="text-danger">{errors.titre}</div>}
                <br />

                <label htmlFor="Description">Description</label>
                <input
                    type="text"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                {errors.description && <div className="text-danger">{errors.description}</div>}
                <br />

                <label htmlFor="Type">Type</label>
                <select
                    value={data.type}
                    onChange={(e) => setData('type', e.target.value)}
                >
                    <option value="">-- Choisir --</option>
                    <option value="full-time">full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="stage">stage</option>
                    <option value="mission">mission</option>
                    <option value="freelance">freelance</option>
                </select>
                <br />

                <label>Domaine</label>
                <select
                    value={data.domaine_id}
                    onChange={(e) => setData('domaine_id', e.target.value)}
                >
                    <option value="">-- Choisir --</option>
                    {domaines.map((d) => (
                        <option key={d.id} value={d.id}>{d.nom}</option>
                    ))}
                </select>
                <br />

                <label>Ville</label>
                <select
                    value={data.ville_id}
                    onChange={(e) => setData('ville_id', e.target.value)}
                >
                    <option value="">-- Choisir --</option>
                    {villes.map((v) => (
                        <option key={v.id} value={v.id}>{v.nom}</option>
                    ))}
                </select>
                <br />

                <label>Localisation</label>
                <input
                    type="text"
                    value={data.localisation}
                    onChange={(e) => setData('localisation', e.target.value)}
                />
                <br />

                <label>Salaire</label>
                <input
                    type="number"
                    value={data.salaire}
                    onChange={(e) => setData('salaire', e.target.value)}
                />
                <br />

                <label>Etat</label>
                <select
                    value={data.etat}
                    onChange={(e) => setData('etat', e.target.value)}
                >
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                </select>
                <br />

                <button type="submit" disabled={processing}>
                    Modifier
                </button>

            </form>
        </div>
    );
}

export default EditOffre;
