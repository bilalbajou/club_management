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
    
    public function personnes(){
        return $this->hasMany(Personne::class);
    }

    public function entrainements(){
        return $this->hasMany(Entrainement::class);
    }
}
