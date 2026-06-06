<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    protected $fillable = [
        'user_id',
        'filiere',
        'niveau_etude',
        'latitude',
        'longitude',
    ];
}
