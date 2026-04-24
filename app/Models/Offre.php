<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Offre extends Model
{
    use HasFactory;
    protected $fillable=[
        'titre',
        'description',
        'type',
        'etat',
        'localisation',
        'domaine_id',
        'ville_id',
        'users_id',
        'salaire'
    ];

    public function domaine()
    {
        return $this->belongsTo(Domaine::class);
    }

    public function ville()
    {
        return $this->belongsTo(Villes::class);
    }
}
