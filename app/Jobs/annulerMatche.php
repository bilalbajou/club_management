<?php

namespace App\Jobs;

use App\Mail\annulerMatcheMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class annulerMatche implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $matche;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($matche)
    {
        $this->matche = $matche;
    }


    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueurs = DB::table('personne_match')
        ->join('personnes', 'personne_match.personne_id', '=', 'personnes.id')
        ->join('equipes', 'equipes.id', '=', 'personnes.equipe_id')
        ->select('personnes.email', 'equipes.nom')
        ->where('personne_match.matche_id', '=', $this->matche->id)
        ->get();

       

        foreach ($joueurs as $joueur) {
            if ($joueur->email) {
                Mail::to($joueur->email)->send(new annulerMatcheMail($this->matche,$joueur));
            }
        }

       
    }
}
