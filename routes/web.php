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
use App\Http\Controllers\Admin\dashboard\PublicationsAnalyticsController;
use App\Http\Controllers\Admin\dashboard\EntreprisesAnalyticsController;
use App\Http\Controllers\Admin\OffresStatistiqueController;

// Employee Controllers
use App\Http\Controllers\sauvegarde;
use App\Http\Controllers\CandidatureController;
// Recruteur Controller
use App\Http\Controllers\OffreController;
use App\Http\Controllers\GererEntrepriseController;
use App\Http\Controllers\Recruteur\CandidaturesController;

use App\Http\Controllers\AIController;
use App\Http\Controllers\Accueil;
use Inertia\Inertia;

Route::post('/employee/location', [ProfileController::class, 'updateLocation']);

Route::get('/offres-proches', [OffreController::class, 'offresProches'])
    ->middleware('auth')
    ->name('offres.proches');





Route::middleware('guest')->group(function (){
    Route::get('/login', [LoginController::class, 'index'])->name('login');
    Route::post('/login', [LoginController::class, 'traiter'])->name('login.traiter');

    Route::get('/register', [InscriptionController::class, 'index'])->name('register');
    Route::post('/register', [InscriptionController::class, 'traiter'])->name('register.traiter');
});
Route::middleware('auth')->group(function () {
    Route::get('/',[Accueil::class , 'index']);
    Route::get('/Offres', function () {
        return Inertia::render('Offres');
    })->name('offres');

    ////////////////////////////////////////////////////////////////////////////////////////////////
    // Profile Recruteur routes
    Route::get('/profile/recruteur', [ProfileController::class, 'showRecruteur'])
        ->name('profile.recruteur')->middleware('checkRecruteur');
    Route::get('/profile/recruteur/edit', [ProfileController::class, 'editRecruteur'])
        ->name('profile.recruteur.edit')->middleware('checkRecruteur');
    Route::put('/profile/recruteur', [ProfileController::class, 'updateRecruteur'])
        ->name('profile.recruteur.update')->middleware('checkRecruteur');

    // CRUD Entreprises routes for Recruteur
    Route::get('/ajouterEntreprise', [GererEntrepriseController::class, 'create'])
        ->name('entrepriseRecruteur.create')->middleware('checkRecruteur');
    Route::post('/ajouterEntreprise', [GererEntrepriseController::class, 'store'])
        ->name('entrepriseRecruteur.store')->middleware('checkRecruteur');

    // Candidatures Reçus par recruteur
    Route::get('/candidaturesreçus',[CandidaturesController::class, 'index'])
        ->name('candidaturesreçus.index')->middleware('checkRecruteur');
    Route::put('/changerEtat', [CandidaturesController::class , 'update'])
        ->name('changerEtat.update');

    // CRUD Offres routes
    Route::get('/recruteur/offres', [OffreController::class, 'index'])
        ->name('offresrecruteur.index')->middleware('checkRecruteur');
    Route::get('/offres/create', [OffreController::class, 'create'])
        ->name('offres.create')->middleware('checkRecruteur');
    Route::post('/offres', [OffreController::class, 'store'])
        ->name('offres.store')->middleware('checkRecruteur');
    Route::get('/offres/{offre}/edit', [OffreController::class, 'edit'])
        ->name('offres.edit')->middleware('checkRecruteur');
    Route::put('/offres/{offre}', [OffreController::class, 'update'])
        ->name('offres.update')->middleware('checkRecruteur');
    Route::delete('/offres/{offre}', [OffreController::class, 'destroy'])
        ->name('offres.destroy')->middleware('checkRecruteur');

    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////


    

    // Profile Employee routes
    Route::get('/profile/employee', [ProfileController::class, 'showEmployee'])
        ->name('profile.employee')->middleware('checkEmployee');

    Route::get('/profile/employee/edit', [ProfileController::class, 'editEmployee'])
        ->name('profile.employee.edit')->middleware('checkEmployee');

    Route::put('/profile/employee', [ProfileController::class, 'updateEmployee'])
        ->name('profile.employee.update')->middleware('checkEmployee');

    // Candidatures Routes
    Route::get('/candidatures',[CandidatureController::class,'index'])
    ->name('candidature.index')->middleware('checkEmployee');
    Route::get('/candidatures/create/{offre}',[CandidatureController::class,'create'])
    ->name('candidature.create')->middleware('checkEmployee');
    Route::post('/candidatures',[CandidatureController::class,'store'])
    ->name('candidature.store')->middleware('checkEmployee');

    // CRUD Sauvegardes routes
    Route::get('/sauvegardes', [sauvegarde::class , 'index'])
        ->name('sauvegarde.index')->middleware('checkEmployee');
    Route::post('/sauvegardes', [sauvegarde::class , 'add'])
        ->name('sauvegarde.store')->middleware('checkEmployee');
    Route::delete('/sauvegardes/{id}', [sauvegarde::class , 'delete'])
        ->name('sauvegarde.delete')->middleware('checkEmployee');


    
    
    //Route::get('/candidature',[CandidatureController::class,'store'])->name('candidature.store');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Routes Admin
    // Profile Admin routes
    Route::get('/profile/admin', [ProfileController::class, 'showAdmin'])
        ->name('profile.admin')->middleware('checkAdminMember');
    Route::get('/profile/admin/edit', [ProfileController::class, 'editAdmin'])
        ->name('profile.admin.edit')->middleware('checkAdminMember');
    Route::put('/profile/admin', [ProfileController::class, 'updateAdmin'])
        ->name('profile.admin.update')->middleware('checkAdminMember');

    // Dashboard Admin routes
    Route::get('/Dashboard' , [DashboardController::class, 'index'])
        ->name('dashboard')->middleware('checkAdminMember');
    Route::get('/admin/users/stats', [UserAnalyticsController::class, 'index'])
        ->name('usersStatistique.index')->middleware('checkAdminMember');
    Route::get('/admin/publication/stats', [PublicationsAnalyticsController::class, 'index'])
        ->name('publicationsStatistique.index')->middleware('checkAdminMember');
    Route::get('/admin/offres/stats', [OffresStatistiqueController::class, 'index'])
    ->name('offresStatistique.index')
    ->middleware('checkAdminMember');
    Route::get('/admin/entreprises/stats', [EntreprisesAnalyticsController::class, 'index'])
    ->name('entreprisesStatistique.index')
    ->middleware('checkAdminMember');
    // CRUD Users routes
    Route::get('/users', [UserController::class, 'index'])
        ->name('users.index')->middleware('checkAdminMember');
    Route::get('/users/{id}', [UserController::class, 'show'])
        ->name('users.show')->middleware('checkAdminMember');
    Route::get('/users/{id}/edit', [UserController::class, 'edit'])
        ->name('users.edit')->middleware('checkAdminMember');
    Route::put('/users/{id}', [UserController::class , 'update'])
        ->name('users.update')->middleware('checkAdminMember'); 
    Route::delete('/users/{user}', [UserController::class, 'destroy'])
        ->name('users.destroy')->middleware('checkAdminMember'); 
    
    // CRUD OFFRES ADMIN
    Route::resource('offresAdmin', OffresController::class)
        ->except(['show'])->middleware('checkAdminMember');
    
    // CRUD ENTREPRISES ADMIN
    Route::resource('entrepriseAdmin', AdminEntreprisesController::class)->except(['show','create','store','edit','update'])
        ->names([
            'index' => 'entrepriseAdmin.index',
            'destroy' => 'entreprise.destroy',
        ])
        ->middleware('checkAdminMember');

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



    // Route::post('/ask-ai', [AIController::class, 'ask'])->name('ai.index');
    Route::get('/ai', function () {
    return Inertia::render('ChatAI');
})->name('ai.page');

Route::post('/ask-ai', [AIController::class, 'ask'])->name('ai.ask');


});
Route::get('/offres', [OffreControlleur::class, 'index'])->name('offres.index');
Route::get('/posts', [posts::class, 'index'])->name('posts.index');
Route::get('/entreprises', [EntreprisesController::class, 'index'])->name('entreprises.index');