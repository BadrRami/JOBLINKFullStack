<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class recruteur extends Model
{
    protected $fillable = [
        'user_id',
        'nom',
        'prenom',
        'email',
        'tel',
        'poste',
        'etat',
        'entreprise_id',
        'photo'
    ];
}
