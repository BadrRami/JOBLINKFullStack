import React from 'react';
import '../../../../css/Admin/Dashboard/LeftBar.css'
const LeftBar = () => {
    return (
        <div>
            <ul>
                <li><a href=""><i class="bi bi-people-fill"></i>Utilisateurs</a></li>
                <li><a href=""><i class="bi bi-file-earmark-post"></i>Publications</a></li>
                <li><a href=""><i class="bi bi-briefcase-fill"></i>Offres</a></li>
                <li><a href=""><i class="bi bi-buildings-fill"></i>Entreprises</a></li>
            </ul>
        </div>
    );
}

export default LeftBar;
