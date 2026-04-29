import React from 'react';
import '../../../css/Accueil/Profile.css';

const Profile = ({ user }) => {
    const photo = user.photo
        ? `/storage/photos/${user.photo}`
        : '/images.png';

    return (
        <div id="jl-profile-card">
            <div id="jl-profile-avatar-wrapper">
                <img
                    src={photo}
                    alt={user.name}
                    id="jl-profile-avatar"
                />
            </div>
            <h4 id="jl-profile-name">{user.name} {user.prenom}</h4>
        </div>
    );
};

export default Profile;