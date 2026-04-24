import React from 'react';
import Menu from '../Menu';
import { useForm, usePage } from '@inertiajs/react';
const EditProfile = ({ user }) => {
    const { flash } = usePage().props;
    
        const { data, setData, put, processing, errors, reset } = useForm({
        name: '',
        prenom: '',
        email: '',
        });
        React.useEffect(() => {
                if (user) {
                    setData({
                        name: user.name || '',
                        prenom: user.prenom || '',
                        email: user.email || '',
                    });
                }
            }, [user]);
        const handleSubmit = (e) => {
        e.preventDefault();

        put(route('profile.admin.update', user.id));
    };
    
    return (
        <div>
            <Menu />
            <div className="container mt-5">



<div className="card shadow-lg p-4">

<h2 className="mb-4 text-center">Modifier votre profil</h2>

<form action="" onSubmit={handleSubmit} method="POST">


<div className="mb-3">
<label className="form-label">Nom</label>
<input type="text" className="form-control" name="name" value={data.name} onChange={(e) => setData('name', e.target.value)} />
</div>

<div className="mb-3">
<label className="form-label">Prénom</label>
<input type="text" className="form-control" name="prenom" value={data.prenom} onChange={(e) => setData('prenom', e.target.value)} />
</div>

<div className="mb-3">
<label className="form-label">Email</label>
<input type="email" className="form-control" name="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
</div>

<div className="d-flex gap-2">

<button type="submit" className="btn btn-warning">
Modifier
</button>

<a href={route('profile.admin')} className="btn btn-secondary">
Retour
</a>

</div>

</form>

</div>

</div>
        </div>
    );
}

export default EditProfile;
