<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class recruteur extends Model
{
    protected $fillable = [
        'user_id',
        'poste',
        'entreprise_id',
    ];
}
