<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Equipe extends Model
{
    use SoftDeletes;

    use HasFactory;
    protected $fillable=['nom'];
    
    public function joueurs(){
        return $this->hasMany(Joueur::class);
    }

    public function staffs(){
        return $this->hasMany(Staff::class);
    }
    public function entrainements(){
        return $this->hasMany(Entrainement::class);
    }
}
