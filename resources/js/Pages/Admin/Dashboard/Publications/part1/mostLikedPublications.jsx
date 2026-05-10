import React from 'react';
import '../../../../../../css/Admin/Dashboard/publications/charts.css';

const MostLikedPublications = ({ data }) => {

    if (!data || data.length === 0) {
        return (
            <div className="jl-chart-card">
                <h2 className="jl-chart-title">Publications les plus aimées</h2>
                <div className="jl-chart-empty">
                    <i className="bi bi-hand-thumbs-up"></i>
                    Aucune donnée disponible
                </div>
            </div>
        );
    }

    // Top 3 — ordre podium : 2e, 1er, 3e
    const top = data.slice(0, 3);
    const podiumOrder = [top[1], top[0], top[2]].filter(Boolean);
    const podiumRanks  = [2, 1, 3];
    const podiumHeights = ['140px', '180px', '110px'];
    const podiumColors = [
        'hsl(220, 20%, 60%)',          // argent
        'hsl(42, 95%, 52%)',            // or
        'hsl(25, 70%, 55%)',            // bronze
    ];
    const medals = ['🥈', '🥇', '🥉'];

    return (
        <div className="jl-chart-card">
            <h2 className="jl-chart-title">Publications les plus aimées</h2>

            {/* PODIUM */}
            <div className="jl-podium">
                {podiumOrder.map((pub, i) => (
                    pub && (
                        <div key={pub.id ?? i} className="jl-podium-col">

                            {/* Infos au-dessus du podium */}
                            <div className="jl-podium-info">
                                <span className="jl-podium-medal">{medals[i]}</span>
                                <p className="jl-podium-author">{pub.user?.name ?? pub.author ?? '—'}</p>
                                <p className="jl-podium-titre">{pub.titre ?? pub.title}</p>
                                <span className="jl-podium-likes">
                                    <i className="bi bi-hand-thumbs-up-fill"></i>
                                    {pub.likes_count ?? pub.NBLikes ?? 0}
                                </span>
                                <p className="jl-podium-date">
                                    {new Date(pub.created_at).toLocaleDateString('fr-FR', {
                                        day: '2-digit', month: 'short', year: 'numeric'
                                    })}
                                </p>
                            </div>

                            {/* Bloc podium */}
                            <div
                                className="jl-podium-block"
                                style={{
                                    height: podiumHeights[i],
                                    background: podiumColors[i],
                                }}
                            >
                                <span className="jl-podium-rank">#{podiumRanks[i]}</span>
                            </div>

                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default MostLikedPublications;