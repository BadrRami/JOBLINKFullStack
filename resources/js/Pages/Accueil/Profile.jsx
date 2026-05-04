import React from 'react';

const Profile = ({ user }) => {
    return (
        <div id="jl-profile-widget">

            {/* Bannière sombre */}
            <div className="jl-profile-widget-banner"></div>

            {/* Avatar chevauchant la bannière */}
            <div className="jl-profile-widget-avatar-wrap">
                <img
                    src={user.photo ? `/storage/photos/${user.photo}` : '/images.png'}
                    className="jl-profile-widget-avatar"
                    alt="avatar"
                />
            </div>

            {/* Infos */}
            <div className="jl-profile-widget-body">
                <p className="jl-profile-widget-name">
                    {user.name} {user.prenom}
                </p>
                <p className="jl-profile-widget-role">{user.role}</p>
                <hr className="jl-profile-widget-divider" />
            </div>

            <a href="/profile" className="jl-profile-widget-link">
                Voir mon profil →
            </a>

        </div>
    );
}

export default Profile;