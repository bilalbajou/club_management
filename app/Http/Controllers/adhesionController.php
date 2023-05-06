<?php

namespace App\Http\Controllers;

use App\Models\Equipe;
use App\Models\Personne;
use App\Models\Plan;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;

class adhesionController extends Controller
{
    
    public function index(Request $request){

        $etat=$request->etat;
        $plan=$request->plan;
        $equipe=$request->equipe;
        $search=$request->search;



        $plans=Plan::all();
        $equipes=Equipe::all();
        $joueurs = DB::table('personnes')
            ->join('plans', 'personnes.plan_id', '=', 'plans.id')
            ->join('equipes', 'personnes.equipe_id', '=', 'equipes.id')
            ->select('personnes.id','personnes.nom','personnes.prenom','personnes.age','personnes.montant_global','personnes.derniere_paiement','personnes.date_echeance','equipes.id','equipes.nom as equipeNom', 'plans.id','plans.duree')
            ->whereNotNull('personnes.date_echeance')
            ->where('type','joueur')
            ->when($search,function($query) use($search){
                $query->where("personnes.nom","like","%$search%");
                $query->orWhere("prenom","like","%$search%");
            })
            ->when($etat,function($query) use($etat){   
                if($etat!="all"){
                     switch($etat){
                        case "valide":
                            $query->where("personnes.date_echeance",">=",date("Y-m-d"));
                            break;
                        case "expiré":
                            $query->where("personnes.date_echeance","<",date("Y-m-d"));
                            break;
                    
                     }
                    
                    
               }
               
            })
            ->when($equipe,function($query) use($equipe){
                if($equipe!="all"){
               $query->where("equipe_id",$equipe);
            }
            }) 
            ->when($plan,function($query) use($plan){
                if($plan!="all"){
               $query->where("plan_id",$plan);
            }
            }) 
            ->get();

            return Inertia::render('Admin/Adhesion/Adhesion',[
                'joueurs'=>$joueurs,
                'plans'=>$plans,
                'equipes'=>$equipes,
                'etat'=>$etat,
                'plan'=>$plan,
                'equipe'=>$equipe,
                'search'=>$search

            ]);

    }
}
