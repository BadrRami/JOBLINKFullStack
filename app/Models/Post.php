<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\User;
use App\Models\Likes;
use App\Models\Commantaire;
class Post extends Model
{
    use HasFactory;
    protected $fillable=[
        'titre',
        'description',
        'NBComments',
        'media',
        'user_id'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function likes()
    {
        return $this->hasMany(Likes::class);
    }
public function comments()
{
    return $this->hasMany(Commantaire::class);
}
}
