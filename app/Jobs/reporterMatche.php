<?php

namespace App\Jobs;

use App\Mail\reporterMatcheMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;

class reporterMatche implements ShouldQueue
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
        $this->matche=$matche;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueurs = DB::table('joueur_match')
        ->join('joueurs', 'joueur_match.joueur_id', '=', 'joueurs.id')
        ->join('equipes', 'equipes.id', '=', 'joueurs.equipe_id')
        ->select('joueurs.email', 'equipes.nom')
        ->where('joueur_match.matche_id', '=', $this->matche->id)
        ->get();

    $staffs = DB::table('staff_match')
        ->join('staff', 'staff_match.staff_id', '=', 'staff.id')
        ->join('equipes', 'equipes.id', '=', 'staff.equipe_id')
        ->select('staff.email', 'equipes.nom')
        ->where('staff_match.matche_id', '=', $this->matche->id)
        ->get();

    foreach ($joueurs as $joueur) {
        if ($joueur->email) {
            Mail::to($joueur->email)->send(new reporterMatcheMail($this->matche,$joueur));
        }
    }

    foreach ($staffs as $staff) {
        if ($staff->email) {
            Mail::to($staff->email)->send(new reporterMatcheMail($this->matche,$staff));
        }
    }
    }
}
