<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adhesion extends Model
{
    use HasFactory;
    protected $fillable = [
        'date_debut',
        'date_fin',
        'montant',
        'joueur_id',
    ];
    public function joueur()
    {
        return $this->belongsTo(Personne::class);
    }
}
