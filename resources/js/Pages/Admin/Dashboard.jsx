import React from 'react';
import LeftBar from './Dashboard/LeftBar';
import '../../../css/admin/dashboard.css';

const Dashboard = () => {
    const actions = [
        {
            icon: 'bi-people-fill',
            title: 'Utilisateurs',
            description: 'Consulter, modifier et gérer tous les comptes utilisateurs',
            href: '/admin/users',
            color: 'blue',
        },
        {
            icon: 'bi-briefcase-fill',
            title: 'Offres',
            description: 'Voir les statistiques des offres publiées par les recruteurs',
            href: '/admin/offres',
            color: 'green',
        },
        {
            icon: 'bi-file-earmark-post',
            title: 'Publications',
            description: 'Modérer et supprimer les publications des utilisateurs',
            href: '/admin/publications',
            color: 'amber',
        },
        {
            icon: 'bi-buildings-fill',
            title: 'Entreprises',
            description: 'Consulter les entreprises associées aux recruteurs',
            href: '/entreprises',
            color: 'purple',
        },
        {
            icon: 'bi-bar-chart-fill',
            title: 'Statistiques',
            description: 'Accéder aux graphiques et rapports de la plateforme',
            href: '/admin/statistiques',
            color: 'cyan',
        },
        {
            icon: 'bi-shield-lock-fill',
            title: 'Profil Admin',
            description: 'Modifier vos informations et paramètres de compte',
            href: '/profile/admin',
            color: 'red',
        },
    ];

    return (
        <div id="jl-dashboard-page">
            <LeftBar />

            <main id="jl-dashboard-content">

                <div id="jl-dashboard-header">
                    <div>
                        <h1 id="jl-dashboard-title">Tableau de bord</h1>
                        <p id="jl-dashboard-subtitle">Bienvenue dans l'espace d'administration de JobLink</p>
                    </div>
                </div>

                <div id="jl-dashboard-grid">
                    {actions.map((action, index) => (
                        <a
                            key={index}
                            href={action.href}
                            className={`jl-dashboard-card jl-card-${action.color}`}
                        >
                            <div className="jl-dashboard-card-icon">
                                <i className={`bi ${action.icon}`}></i>
                            </div>
                            <div className="jl-dashboard-card-body">
                                <h3 className="jl-dashboard-card-title">{action.title}</h3>
                                <p className="jl-dashboard-card-desc">{action.description}</p>
                            </div>
                            <i className="bi bi-chevron-right jl-dashboard-card-arrow"></i>
                        </a>
                    ))}
                </div>

            </main>
        </div>
    );
}

export default Dashboard;