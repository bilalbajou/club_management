<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prime extends Model
{

    protected $fillable=['libellé','montant','remarque'];
    use HasFactory;
    public function personnes()
    {
        return $this->belongsToMany(Personne::class, 'prime_personne', 'match_id', 'personne_id');
    }



}
