<?php

namespace App\Jobs;

use App\Models\Joueur;
use App\Models\Staff;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class matcheStoreDetailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $matche;
    protected $request;
    protected $joueurs;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($matche,$request)
    {
        $this->matche=$matche;
        $this->request=$request;
      

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $joueurs=Joueur::all('id','equipe_id')->where('equipe_id','=',$this->request->equipe);
        // $staffs=Staff::all('id','equipe_id')->where('equipe_id','=',$this->request->equipe);
       
        // $filteredjoueurs = $this->joueurs->whereNotBetween('id', $this->request->exclure);

        // foreach($filteredjoueurs as $joueur){
        //     // DB::insert('insert into joueur_match (matche_id, joueur_id,staff_id) values (?,?)', [$this->matche->id,$joueur->id]);
        // }




        
        
    }
}
