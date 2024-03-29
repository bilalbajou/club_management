<?php

namespace App\Models;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Matche extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable=['adversaire','lieu','date','remarque','championat','etat'];
    
    public function personnes()
    {
        return $this->belongsToMany(Personne::class, 'personne_match', 'match_id', 'personne_id');
    }

 

}
