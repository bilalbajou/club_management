<?php

namespace App\Http\Controllers;

use App\Http\Requests\matchStoreRequest;
use App\Jobs\annulerMatche;
use App\Jobs\matcheStoreDetailJob;
use App\Jobs\reporterMatche;
use App\Models\Equipe;
use App\Models\Joueur;
use App\Models\Matche;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\Console\Input\Input;

class matchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search=$request->search;
        $etat=$request->etat;
        $equipe=$request->equipe;
        $date=$request->date;
        $matches=$matches = DB::table('matches')
        ->join('joueur_match', 'joueur_match.matche_id', '=', 'matches.id')
        ->join('joueurs', 'joueurs.id', '=', 'joueur_match.joueur_id')
        ->select('matches.*', DB::raw('count(joueur_match.joueur_id) as nb_joueurs'))
        ->groupBy('joueur_match.matche_id')
        ->when($search,function($query) use($search){
            $query->where("matches.adversaire","like","%${search}%");
          
        })
        ->when($etat,function($query) use($etat){
           
            if($etat!="all"){
            $query->where("matches.etat",$etat);
           }
           
        })
        ->when($equipe,function($query) use($equipe){
            if($equipe!="all"){
           $query->where("joueurs.equipe_id",$equipe);
        }
        })
        ->when($date,function($query) use($date){
          $query->whereBetween('date',$date);
       
        })
        ->get();


        $joueurs=Joueur::all(['id','nom','prenom','equipe_id']);
        $equipes=Equipe::all(['id','nom']);
        return Inertia::render('Admin/Match/Match',[
            'equipes'=>$equipes,
            'joueurs' => $joueurs,
            'matches'=>$matches,
            'search'=>$search,
            'etat'=>$etat,
            'equipe'=>$equipe
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(matchStoreRequest $request)
    {

       
       
      $matche = Matche::create([
            'adversaire'=>$request->adversaire,
            'lieu'=>$request->lieu,
            'date'=>$request->date,
            'remarque'=>$request->remarque,
            'championat'=>$request->championat
        ]);

        if($matche){
        $exclure=$request->exclure;
        $equipe=$request->equipe;
        dispatch(new matcheStoreDetailJob($matche,$exclure,$equipe));
 
        }

        


    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'date' => 'required'   
        ]);
        $matche=Matche::find($id);
        $matche->date=$request->date;
        $matche->etat="reporté";
        if($matche->save()){
            dispatch(new reporterMatche($matche));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function annuler($id){
        $matche=Matche::find($id);
        $matche->etat="annulé";
        if($matche->save()){
            dispatch(new annulerMatche($matche));
        }
    }
}
