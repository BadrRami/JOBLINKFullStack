<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\InscriptionController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\posts;
use App\Http\Controllers\OffreControlleur;
use App\Http\Controllers\EntreprisesController;
use App\Http\Controllers\LikesController;
use App\Http\Controllers\CommantaireController;
use App\Http\Controllers\ConversationController;
use App\Http\Controllers\MessageController;
// Admin Controllers
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\OffresController;
use App\Http\Controllers\Admin\PostsController;
use App\Http\Controllers\Admin\AdminEntreprisesController;
use App\Http\Controllers\Admin\dashboard\UserAnalyticsController;
// Employee Controllers
use App\Http\Controllers\sauvegarde;
// Recruteur Controller
use App\Http\Controllers\OffreController;
use App\Http\Controllers\GererEntrepriseController;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Accueil');
});
Route::get('/Offres', function () {
    return Inertia::render('Offres');
})->name('offres');
Route::middleware('guest')->group(function (){
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'traiter'])->name('login.traiter');

    Route::get('/register', [InscriptionController::class, 'index'])->name('register');
    Route::post('/register', [InscriptionController::class, 'traiter'])->name('register.traiter');
});
Route::middleware('auth')->group(function () {
    // Profile Recruteur routes
    Route::get('/profile/recruteur', [ProfileController::class, 'showRecruteur'])
        ->name('profile.recruteur');

    Route::get('/profile/recruteur/edit', [ProfileController::class, 'editRecruteur'])
        ->name('profile.recruteur.edit');
    
    Route::put('/profile/recruteur', [ProfileController::class, 'updateRecruteur'])
        ->name('profile.recruteur.update');

    Route::get('/ajouterEntreprise', [GererEntrepriseController::class, 'create'])->name('entrepriseRecruteur.create');
    Route::post('/ajouterEntreprise', [GererEntrepriseController::class, 'store'])->name('entrepriseRecruteur.store');
    
    // Profile Employee routes
    Route::get('/profile/employee', [ProfileController::class, 'showEmployee'])
        ->name('profile.employee');

    Route::get('/profile/employee/edit', [ProfileController::class, 'editEmployee'])
        ->name('profile.employee.edit');
    
    Route::put('/profile/employee', [ProfileController::class, 'updateEmployee'])
        ->name('profile.employee.update');

    // Profile Admin routes
    Route::get('/profile/admin', [ProfileController::class, 'showAdmin'])
        ->name('profile.admin');
    Route::get('/profile/admin/edit', [ProfileController::class, 'editAdmin'])
        ->name('profile.admin.edit');
    Route::put('/profile/admin', [ProfileController::class, 'updateAdmin'])
        ->name('profile.admin.update');





    // Dashboard Admin routes
    Route::get('/Dashboard' , [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/admin/users/stats', [UserAnalyticsController::class, 'index']);






    // CRUD Users routes
    Route::get('/users', [UserController::class, 'index'])->name('users.index');
    Route::get('/users/{id}', [UserController::class, 'show'])->name('users.show');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::put('/users/{id}', [UserController::class , 'update'])->name('users.update'); 
    Route::delete('/users/{user}', [UserController::class, 'destroy'])->name('users.destroy'); 
    
    // CRUD OFFRES ADMIN
    Route::resource('offresAdmin', OffresController::class)->except(['show']);

    // CRUD ENTREPRISES ADMIN
    Route::resource('entrepriseAdmin', AdminEntreprisesController::class)->except(['show','create','store','edit','update'])
    ->names([
        'index' => 'entrepriseAdmin.index',
        'destroy' => 'entreprise.destroy',
    ]);

    // CRUD PUBLICATIONS ADMIN
    Route::resource('postsAdmin', PostsController::class)->except(['show']);

    
    // CRUD Publications
    Route::get('/publications', [PostController::class, 'index'])->name('publications.index');
    Route::get('/publications/create', [PostController::class, 'create'])->name('publications.create');
    Route::post('/publications', [PostController::class, 'store'])->name('publications.store');
    Route::get('/publications/{post}/edit', [PostController::class, 'edit'])->name('publications.edit');
    Route::put('/publications/{post}', [PostController::class, 'update'])->name('publications.update');
    Route::delete('/publications/{post}', [PostController::class, 'destroy'])->name('publications.destroy');
    // Logout route
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    // CRUD Offres routes
    Route::get('/recruteur/offres', [OffreController::class, 'index'])->name('offresrecruteur.index');
    Route::get('/offres/create', [OffreController::class, 'create'])->name('offres.create');
    Route::post('/offres', [OffreController::class, 'store'])->name('offres.store');
    Route::get('/offres/{offre}/edit', [OffreController::class, 'edit'])->name('offres.edit');
    Route::put('/offres/{offre}', [OffreController::class, 'update'])->name('offres.update');
    Route::delete('/offres/{offre}', [OffreController::class, 'destroy'])->name('offres.destroy');


    // CRUD Sauvegardes routes
    Route::get('/sauvegardes', [sauvegarde::class , 'index'])->name('sauvegarde.index');
    Route::post('/sauvegardes', [sauvegarde::class , 'add'])->name('sauvegarde.store');
    Route::delete('/sauvegardes/{id}', [sauvegarde::class , 'delete'])->name('sauvegarde.delete');


    // Likes routes
    Route::post('/likes', [LikesController::class, 'store'])->name('likes.store');
    Route::delete('/likes', [LikesController::class, 'destroy'])->name('likes.destroy');

    // Comments routes 
    Route::resource('/comments', CommantaireController::class);


    // Conversation 
    Route::get('/conversation/create', [ConversationController::class, 'create'])
    ->name('conversation.create');
    Route::get('/conversation/{id}', [ConversationController::class, 'show'])
    ->name('conversation.show');
    Route::post('/conversation', [ConversationController::class, 'store']);

    // Messages of conversation routes

    Route::post('/massage',[MessageController::class, 'store'])->name('message.store');


});
Route::get('/offres', [OffreControlleur::class, 'index'])->name('offres.index');
Route::get('/posts', [posts::class, 'index'])->name('posts.index');
Route::get('/entreprises', [EntreprisesController::class, 'index'])->name('entreprises.index');