<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class sauvegardes extends Model
{
    protected $fillable = [
        'idOffre',
        'user_id'
    ];
     // Relation vers l'offre sauvegardée
    public function offre()
    {
        return $this->belongsTo(Offre::class, 'idOffre');
    }

    // Optionnel : relation vers l'utilisateur
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
