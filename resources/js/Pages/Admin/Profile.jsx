import React from 'react';
import Menu from '../Menu';

const Profile = ({ user }) => {
    return (
        <div>
            <Menu />
            <div className="container mt-5">

<div className="card shadow-lg p-4">

<div className="row align-items-center">

<div className="col-md-3 text-center">

{user.photo ? (
    <img 
        src={`/storage/profil/${user.photo}`}
        alt="Photo de profil"
        classNameName="rounded-circle border img-fluid"
        width="150"
    />
) : (
    <img 
        src="/images.png"
        alt="Photo de profil"
        classNameName="rounded-circle border img-fluid"
        width="150"
    />
)}

</div>

<div className="col-md-9">

<h3 className="mb-3">
{user.name} {user.prenom}
</h3>

<p className="mb-1">
<strong>Email :</strong> {user.email}
</p>

<p className="mb-1">
<strong>Rôle :</strong> 
<span className="badge bg-danger">
{user.role}
</span>
</p>

</div>

</div>

<hr/>

<div className="d-flex gap-2 flex-wrap">

<a href={route('profile.admin.edit')} className="btn btn-warning">
Modifier Profil
</a>


<a href={route('dashboard')} className="btn btn-secondary">
    Dashboard
</a>

<form action="#" method="POST" onsubmit="return confirm('Supprimer votre compte ?')">


<button className="btn btn-danger">
Supprimer mon compte
</button>

</form>

</div>

</div>

</div>

        </div>
    );
}

export default Profile;
