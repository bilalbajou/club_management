<?php

use App\Http\Controllers\entrainementController;
use App\Http\Controllers\equipeController;
use App\Http\Controllers\joueurController;
use App\Http\Controllers\matchController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\staffControler;
use App\Http\Controllers\UserController;
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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('/test',function(){
    return Inertia::render('Test');
});
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
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


    

    
});

Route::middleware(['auth','isAdmin'])->group(function () {
    Route::resource('users',UserController::class);
    Route::patch('/users/activer/{id}',[UserController::class,'activer'])->name('users.activer');
    Route::patch('/users/desactiver/{id}',[UserController::class,'desactiver'])->name('users.desactiver');



});

require __DIR__.'/auth.php';
