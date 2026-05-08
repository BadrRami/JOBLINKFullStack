// import React, { useState } from 'react';
// import Menu from './Menu';
// import { router } from '@inertiajs/react';

// const Candidature = ({ offre }) => {
//     const [cv, setCv] = useState(null);
//     const [lettre, setLettre] = useState('');

//     const postuler = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('offre_id', offre.id);
//         formData.append('cv', cv);
//         formData.append('lettre_motivation', lettre);

//         router.post('/candidatures', formData);
//     };

//     return (
//         <div>
//             <Menu />

//             <form onSubmit={postuler}>
//                 <div>
//                     <label>CV <span>*</span></label>
//                     <input 
//                         type="file" 
//                         onChange={(e) => setCv(e.target.files[0])}
//                     />
//                 </div>

//                 <div>
//                     <label>Lettre de motivation <span>*</span></label>
//                     <textarea 
//                         value={lettre} 
//                         onChange={(e) => setLettre(e.target.value)}
//                     />
//                 </div>

//                 <button type="submit">Postuler</button>
//             </form>
//         </div>
//     );
// }

// export default Candidature;

import React, { useState } from 'react';
import Menu from './Menu';
import { router } from '@inertiajs/react';
import '../../../resources/css/Candidature.css';

const Candidature = ({ offre }) => {
    const [cv, setCv]         = useState(null);
    const [lettre, setLettre] = useState('');
    const [loading, setLoading] = useState(false);

    const postuler = (e) => {
        e.preventDefault();
        if (!cv || !lettre.trim()) return;

        const formData = new FormData();
        formData.append('offre_id', offre.id);
        formData.append('cv', cv);
        formData.append('lettre_motivation', lettre);

        setLoading(true);
        router.post('/candidatures', formData, {
            onFinish: () => setLoading(false),
        });
    };

    return (
        <div id="jl-candidature-page">
            <Menu />

            <div id="jl-candidature-wrapper">

                {/* ── En-tête offre ── */}
                <div id="jl-candidature-offre">
                    <div id="jl-candidature-offre-icon">
                        <i className="bi bi-briefcase-fill"></i>
                    </div>
                    <div>
                        <p id="jl-candidature-offre-titre">{offre?.titre}</p>
                        <p id="jl-candidature-offre-entreprise">{offre?.entreprise}</p>
                    </div>
                </div>

                {/* ── Formulaire ── */}
                <form id="jl-candidature-form" onSubmit={postuler}>

                    {/* CV */}
                    <div className="jl-field">
                        <label className="jl-label">
                            CV <span className="jl-required">*</span>
                        </label>
                        <label className="jl-file-label">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="jl-file-input"
                                onChange={(e) => setCv(e.target.files[0])}
                            />
                            <i className="bi bi-upload"></i>
                            <span>{cv ? cv.name : 'Choisir un fichier…'}</span>
                        </label>
                    </div>

                    {/* Lettre */}
                    <div className="jl-field">
                        <label className="jl-label">
                            Lettre de motivation <span className="jl-required">*</span>
                        </label>
                        <textarea
                            className="jl-textarea"
                            value={lettre}
                            onChange={(e) => setLettre(e.target.value)}
                            placeholder="Expliquez pourquoi vous correspondez à ce poste…"
                            rows={7}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        id="jl-candidature-submit"
                        disabled={loading || !cv || !lettre.trim()}
                    >
                        {loading
                            ? <><i className="bi bi-arrow-repeat jl-spin"></i> Envoi en cours…</>
                            : <><i className="bi bi-send-fill"></i> Postuler</>
                        }
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Candidature;