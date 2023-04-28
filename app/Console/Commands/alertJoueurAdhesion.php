<?php

namespace App\Console\Commands;

use App\Mail\alerterAdhesion;
use App\Models\Personne;
use App\Models\Plan;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class alertJoueurAdhesion extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'alertAdhesion';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'alerterJoueurAdhesion';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        
        $joueurs=Personne::all()
        ->where('type','joueur')
        ->where('date_echeance','!=',null)
        ->where('date_echeance','=',now()->addDays(5));
        foreach($joueurs as $joueur){
            if($joueur->email){
            $plan=Plan::findOrfail($joueur->plan_id);
            Mail::to($joueur->email)->queue(new alerterAdhesion($plan,$joueur));
        }
        }
        
    }
}
