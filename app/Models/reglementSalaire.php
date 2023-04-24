<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class reglementSalaire extends Model
{
    use SoftDeletes;

    use HasFactory;
    protected $fillable = [
        'libellé','mois','reste','montant','reglement_date'
    ];

    public function personnes()
    {
        return $this->belongsTo(Personne::class);
    }



}
