<?php

namespace App\Jobs;

use App\Mail\ConvMatchjoueur;
use App\Models\Joueur;
use App\Models\Staff;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class matcheStoreDetailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $matche;
    protected $exclure;
    protected $equipe;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($matche,$exclure,$equipe)
    {
        $this->matche=$matche;
        $this->exclure=$exclure;
       $this->equipe=$equipe;

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueurs=Joueur::all('id','equipe_id','email','nom','prenom')->where('equipe_id',$this->equipe);
        $staffs=Staff::all('id','equipe_id','email','nom','prenom')->where('equipe_id',$this->equipe);
        $filteredjoueurs = $joueurs->whereNotBetween('id', $this->exclure);

        foreach($filteredjoueurs as $joueur){
             DB::insert('insert into joueur_match(matche_id,joueur_id) values (?,?)', [$this->matche->id,$joueur->id]);
             sleep(2);
             if($joueur->email){
             Mail::to($joueur->email)->send(new ConvMatchjoueur($this->matche,$joueur));
            }



        }

        
        foreach($staffs as $staff){
          DB::insert('insert into staff_match (matche_id,staff_id) values (?,?)', [$this->matche->id,$staff->id]);
          sleep(2);
          if($staff->email){
          Mail::to($staff->email)->send(new ConvMatchjoueur($this->matche,$staff));
           }
        }






        
        
    }
}
