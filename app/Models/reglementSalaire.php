<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reglementSalaire extends Model
{
    use HasFactory;

    protected $fillable=['mois','montant','remarque','joueur_id'];


    public function joueurs(){
        
        return $this->hasMany(reglementSalaire::class);
    }
}
