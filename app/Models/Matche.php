<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matche extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable=['adversaire','lieu','date','remarque','championat'];
    
    public function joueurs()
    {
        return $this->belongsToMany(Joueur::class, 'joueur_match', 'match_id', 'joueur_id');
    }

}
