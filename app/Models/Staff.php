<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Staff extends Model
{
    use HasFactory;
    use SoftDeletes;



    public function equipe(){
        
        return $this->belongsTo(Equipe::class);
    }


    public function matches()
    {
        return $this->belongsToMany(Matche::class, 'joueur_match', 'match_id', 'staff_id');
    }
}
