<?php

namespace App\Models;

use Brick\Math\Exception\MathException;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Joueur extends Model
{
    use HasFactory;
    use SoftDeletes;


    public function equipe(){
        
        return $this->belongsTo(Equipe::class);
    }

    public function matches()
    {
        return $this->belongsToMany(Matche::class, 'joueur_match', 'match_id', 'joueur_id');
    }
    public function entrainements()
    {
        return $this->belongsToMany(Entrainement::class, 'joueur_entrainement', 'entrainement_id', 'joueur_id');
    }

}
