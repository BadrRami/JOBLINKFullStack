import React from 'react';
import Menu from '../../Menu';
import { usePage } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';
const Ajouter = ({domaines}) => {
    const { flash } = usePage().props;
    const { data, setData, post, processing, errors,reset   } = useForm({
            nom: '',
            description: '',
            tel : '',
            email : '',
            domaine_id : '',
            adresse : '',
            annee_creation : '',
            site_web : '',
            logo : null,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('entrepriseRecruteur.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset(); // vide le formulaire
            },
            onError: (errors) => {
                console.log(errors);
            }
        });
    }
    return (
        <div>
            <Menu />
            <div className="container mt-5">
    <div className="card shadow-lg border-0">
        <div className="card-header bg-dark text-white">
            <h4 className="mb-0">🏢 Ajouter une entreprise</h4>
        </div>

        <div className="card-body">

            {flash.success && (
                <div classNameName="alert alert-success">
                    {flash.success}
                </div>
            )}

            <form action="" method="POST" onSubmit={handleSubmit} encType="multipart/form-data">
                

                <div className="row">

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Nom de l'entreprise</label>
                        <input type="text" 
                        name="nom" 
                        className="form-control" 
                        placeholder="Ex: Google" 
                        required 
                        value={data.nom} 
                        onChange={(e) => setData('nom', e.target.value)}
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Téléphone</label>
                        <input type="tel" 
                        name="tel" 
                        className="form-control" 
                        placeholder="06XXXXXXXX"
                        value={data.tel}
                        onChange={(e) => setData('tel', e.target.value)}
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" 
                        placeholder="contact@entreprise.com"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                         
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Domaine</label>
                        <select name="domaine" className="form-select" value={data.domaine_id} onChange={(e) => setData('domaine_id', e.target.value)}>
                            <option value="">-- Choisissez un domaine --</option>
                            {domaines.map((domaine) => (
                                <option key={domaine.id} value={domaine.id}>
                                    {domaine.nom}
                                </option>
                            ))}
                        </select>
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Adresse</label>
                        <input 
                        type="text" name="adresse" className="form-control" 
                        placeholder="Ville, Rue..." 
                        value={data.adresse}
                        onChange={(e) => setData('adresse', e.target.value)}
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Année de création</label>
                        <input type="number" name="annee_creation" className="form-control" 
                        placeholder="2020"
                        value={data.annee_creation}
                        onChange={(e) => setData('annee_creation', e.target.value)}
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Site web</label>
                        <input type="url" name="site_web" className="form-control" 
                        placeholder="https://example.com"
                        value={data.site_web}
                        onChange={(e) => setData('site_web', e.target.value)}
                        />
                    </div>

                    
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Logo</label>
                        <input type="file" name="logo" className="form-control" 
                        onChange={(e) => setData('logo', e.target.files[0])}
                        />
                    </div>

                    
                    <div className="col-md-12 mb-3">
                        <label className="form-label">Description</label>
                        <textarea name="description" className="form-control" 
                        rows="4" placeholder="Décrivez votre entreprise..."
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        ></textarea>
                    </div>

                </div>

                
                <div className="d-flex justify-content-between mt-4">
                    <a href={route('profile.recruteur')} className="btn btn-secondary">
                        ⬅ Retour
                    </a>

                    <button type="submit" className="btn btn-success">
                        ✅ Enregistrer
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>

        </div>
    );
}

export default Ajouter;
