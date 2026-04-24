<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    protected $fillable = [
        'user_id',
        'nom',
        'prenom',
        'email',
        'tel',
        'filiere',
        'niveau_etude',
        'etat',
        'photo'
    ];
}
