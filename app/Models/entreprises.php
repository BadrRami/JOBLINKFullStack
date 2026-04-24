<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class entreprises extends Model
{
    protected $fillable = [
        'nom',
        'description',
        'tel',
        'email',
        'domaine_id',
        'adresse',
        'annee_creation',
        'site_web',
        'logo',
        'user_id'
    ];
}
