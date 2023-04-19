<?php

namespace App\Models;

use Brick\Math\Exception\MathException;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Personne extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $fillable =['nom', 'prenom', 'age', 'salaire', 'cin', 'adresse', 'telephone', 'email', 'poste','type','equipe_id','image','contrat'];


    public function equipe(){
        
        return $this->belongsTo(Equipe::class);
    }

    // public function reglementSalaire(){
        
    //     return $this->belongsTo(reglementSalaire::class);
    // }

    public function matches()
    {
        return $this->belongsToMany(Matche::class, 'personne_match', 'match_id', 'personne_id');
    }
  

    public function primes()
    {
        return $this->belongsToMany(Prime::class, 'prime_personne', 'prime_id', 'personne_id');
    }

    public function reglementSalaire()
    {
        return $this->hasMany(ReglementSalaire::class);
    }

}
