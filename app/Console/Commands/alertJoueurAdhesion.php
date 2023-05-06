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
        
        $dateAujourdhui = date('Y-m-d');
        $joueurs = Personne::where('type', 'joueur')
                           ->whereNotNull('plan_id')
                           ->whereNotNull('date_echeance')
                           ->where('date_echeance', '>=', $dateAujourdhui)
                           ->where('date_echeance','=', now()->addDay(3)->format('Y-m-d'))
                           ->get();

        foreach($joueurs as $joueur){
            if($joueur->email){
            $plan=Plan::findOrfail($joueur->plan_id);
            Mail::to($joueur->email)->send(new alerterAdhesion($plan,$joueur));
        }
        }
        
    }
}
