<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Offre;
use App\Models\User;
use App\Models\Post;
use App\Models\entreprises;
class DashboardController extends Controller
{
    public function index(){
        $offres = Offre::count();
        $recruteurs = User::where('role','Recruteur')->count();
        $employees = User::where('role','Employée')->count();
        $users = User::count();
        $posts = Post::count();
        $entreprises = entreprises::count();
        return inertia('Admin/Dashboard', compact('offres', 'recruteurs', 'employees', 'users', 'posts','entreprises'));
    }
}
