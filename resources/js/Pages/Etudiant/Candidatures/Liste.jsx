import React from 'react';
import Candidature from './Candidature';
import Menu from '../../Menu'
const Liste = ({ candidatures }) => {
    return (
        <div>
            <Menu />
            {candidatures.length > 0 ? (
                candidatures.map((candidature) => (
                    <Candidature 
                        key={candidature.id} 
                        candidature={candidature} 
                    />
                ))
            ) : (
                <p>Aucune candidature</p>
            )}
        </div>
    );
}

export default Liste;