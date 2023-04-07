<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entrainement extends Model
{

    use HasFactory;
    protected $fillable=['date','remarque','equipe_id','etat'];
    
    

    public function equipe()
    {
        return $this->belongsTo(Equipe::class);
    }
}
