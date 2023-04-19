<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class reglementSalaire extends Model
{
    use HasFactory;
    protected $fillable = [
        'libellé','mois','reste','montant','reglement_date'
    ];

    public function personnes()
    {
        return $this->belongsTo(Personne::class);
    }



}
