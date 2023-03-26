<?php

namespace App\Jobs;

use App\Models\Joueur;
use App\Models\Staff;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use App\Mail\reporterEntrainementMail;
use App\Models\Equipe;
use Illuminate\Queue\SerializesModels;

class reporterEntrainement implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $entrainement;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($entrainement)
    {
        $this->entrainement=$entrainement;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueurs=Joueur::all()->where('equipe_id',$this->entrainement->equipe_id);
        $staffs=Staff::all()->where('equipe_id',$this->entrainement->equipe_id);
        $equipe=Equipe::find($this->entrainement->equipe_id);

        foreach($joueurs as $joueur){
            if($joueur->email){
                Mail::to($joueur->email)->send(new reporterEntrainementMail($this->entrainement,$equipe));
            }
        }

        foreach($staffs as $staff){
            if($staff->email){
                Mail::to($staff->email)->send(new reporterEntrainementMail($this->entrainement,$equipe));
            }
        }

    }
}
