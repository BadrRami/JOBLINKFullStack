import React, { useState } from 'react';
import Menu from './Menu';
import { router } from '@inertiajs/react';

const Candidature = ({ offre }) => {
    const [cv, setCv] = useState(null);
    const [lettre, setLettre] = useState('');

    const postuler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('offre_id', offre.id);
        formData.append('cv', cv);
        formData.append('lettre_motivation', lettre);

        router.post('/candidatures', formData);
    };

    return (
        <div>
            <Menu />

            <form onSubmit={postuler}>
                <div>
                    <label>CV <span>*</span></label>
                    <input 
                        type="file" 
                        onChange={(e) => setCv(e.target.files[0])}
                    />
                </div>

                <div>
                    <label>Lettre de motivation <span>*</span></label>
                    <textarea 
                        value={lettre} 
                        onChange={(e) => setLettre(e.target.value)}
                    />
                </div>

                <button type="submit">Postuler</button>
            </form>
        </div>
    );
}

export default Candidature;