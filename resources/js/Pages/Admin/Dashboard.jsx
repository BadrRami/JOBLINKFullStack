import React from 'react';
import Menu from '../Menu';

const Dashboard = ({ users, recruteurs, employees, offres, posts, entreprises }) => {
    return (
        <div>
          <Menu />  
<div className="container mt-4">

<h2 className="mb-4 fw-bold">Dashboard Admin</h2>

<div className="row">

{/* Utilisateurs */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-primary shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Utilisateurs</h5>
<h2>{users}</h2>
</div>
</div>
</div>

{/* Recruteurs */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-success shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Recruteurs</h5>
<h2>{recruteurs}</h2>
</div>
</div>
</div>

{/* Employés */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-warning shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Employés</h5>
<h2>{employees}</h2>
</div>
</div>
</div>

{/* Offres */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-danger shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Offres</h5>
<h2>{offres}</h2>
</div>
</div>
</div>

{/* Posts */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-info shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Posts</h5>
<h2>{posts}</h2>
</div>
</div>
</div>

{/* Entreprises */}
<div className="col-md-3 mb-4">
<div className="card text-white bg-secondary shadow h-100">
<div className="card-body text-center">
<h5 className="card-title">Entreprises</h5>
<h2>{entreprises}</h2>
</div>
</div>
</div>
</div>

{/* Actions rapides */}
<div className="card shadow mt-4">
<div className="card-header bg-dark text-white">
Actions rapides
</div>
<div className="card-body d-flex gap-3 flex-wrap">

<a href={route('users.index')} className="btn btn-success">
Gérer les utilisateurs
</a>

<a href={route('offresAdmin.index')} className="btn btn-primary">
Gérer les offres
</a>

<a href={route('postsAdmin.index')} className="btn btn-dark">
    Gérer les publications
</a>


<a href={route('entrepriseAdmin.index')} className="btn btn-warning">
    Gérer les entreprises
    
</a>



</div>
</div>

</div>
        </div>
    );
}

export default Dashboard;
