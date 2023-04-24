<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\DB;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class salaireDetailsStore implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    protected $personnes;
    protected $mois;
    protected $libelle;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($personnes,$mois,$libelle)
    {
        $this->personnes=$personnes;
        $this->mois=$mois;
        $this->libelle=$libelle;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        foreach ($this->personnes as $personne) {
            if($personne->salaire){
            DB::insert('insert into reglement_salaires(libellé,montant,mois,reglement_date,personne_id) values (?,?,?,?,?)', [$this->libelle,$personne->salaire,$this->mois,Date('Y-m-d H:i:s'),$personne->id]);
        }
        }
    }
}
