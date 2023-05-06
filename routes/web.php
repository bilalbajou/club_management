<?php

use App\Http\Controllers\adhesionController;
use App\Http\Controllers\backupController;
use App\Http\Controllers\entrainementController;
use App\Http\Controllers\equipeController;
use App\Http\Controllers\joueurController;
use App\Http\Controllers\matchController;
use App\Http\Controllers\planController;
use App\Http\Controllers\primeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\reg_salaireController;
use App\Http\Controllers\regSalaireController;
use App\Http\Controllers\salaireReglelemntController;
use App\Http\Controllers\staffControler;
use App\Http\Controllers\UserController;
use App\Models\Entrainement;
use App\Models\Equipe;
use App\Models\Matche;
use App\Models\Personne;
use App\Models\Prime;
use App\Models\Plan;
use App\Models\reglementSalaire;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/test',function(){
    return Inertia::render('Admin');
});
Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION
       
    ]);
});

Route::get('/dashboard', function () {
    $nb_joueurs=Personne::where('type','joueur')->count();
    $nb_staffs=Personne::where('type','staff')->count();
    $montant_primes=Prime::all()->sum('montant');
    $montant_salaire=reglementSalaire::all()->sum('montant');
    $nb_plans=Plan::all()->count();
    $nb_matche=Matche::all()->count();
    $nb_entrainement=Entrainement::all()->count();
    $nb_equipes=Equipe::all()->count();
    
    
    

 

    return Inertia::render('Dashboard',[
        'nb_joueurs'=>$nb_joueurs,
        'nb_staffs'=>$nb_staffs,
        'montant_primes'=>$montant_primes,
        'montant_salaire'=>$montant_salaire,
        'nb_plans'=>$nb_plans,
        'nb_matches'=>$nb_matche,
        'nb_entrainements'=>$nb_entrainement,
        'nb_equipes'=>$nb_equipes
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('joueurs',joueurController::class);
    Route::resource('staffs',staffControler::class);
    Route::resource('matches',matchController::class);
    Route::put('/annuler/matche/{id}',[matchController::class,'annuler'])->name('matches.annuler');
    Route::resource('equipes',equipeController::class);
    Route::resource('entrainements',entrainementController::class);
    Route::put('/annuler/entrainement/{id}',[entrainementController::class,'annuler'])->name('entrainement.annuler');
    Route::get('/listeJoueurs',[equipeController::class,'getJoueurs'])->name('equipe.joueurs');
    Route::get('/generatepdf/joueur/{id}',[joueurController::class,'generateFicheJoueur'])->name('joueurs.generate');
    Route::get('/generatepdf/staff/{id}',[staffControler::class,'generateFicheStaff'])->name('staffs.generate');
    Route::resource('salaires',reg_salaireController::class);
    Route::resource('primes',primeController::class);

    Route::post('/joueurs/prime',[joueurController::class,'reglerPrime'])->name('joueurs.prime');
    Route::post('/joueurs/salaire',[joueurController::class,'reglerSalaire'])->name('joueurs.salaire');
    Route::put('/joueurs/adhesion/{id}',[joueurController::class,'reglerAdhesion'])->name('joueurs.adhesion');


    Route::post('/staffs/prime',[staffControler::class,'reglerPrime'])->name('staffs.prime');
    Route::post('/staffs/salaire',[staffControler::class,'reglerSalaire'])->name('staffs.salaire');

    Route::resource('salaires',salaireReglelemntController::class);
    Route::resource('plans',planController::class);
    Route::get('/adhesions',[adhesionController::class,'index'])->name('adhesions.index');
    Route::get('/backup',[backupController::class,'index'])->name('backup.index');









    

    
});

Route::middleware(['auth','isAdmin'])->group(function () {
    Route::resource('users',UserController::class);
    Route::patch('/users/activer/{id}',[UserController::class,'activer'])->name('users.activer');
    Route::patch('/users/desactiver/{id}',[UserController::class,'desactiver'])->name('users.desactiver');



});

require __DIR__.'/auth.php';
