<?php

namespace App\Http\Controllers;

use App\Jobs\primeDetailsStore;
use App\Models\Equipe;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use App\Models\Personne;
use App\Models\Prime;

class primeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $search=$request->search;
        $type=$request->type;
        $equipe=$request->equipe;
        
        $joueurs = DB::table('primes')
                ->join('prime_personne', 'primes.id', '=', 'prime_personne.prime_id')
                ->join('personnes', 'prime_personne.personne_id', '=', 'personnes.id')
                ->join('equipes', 'personnes.equipe_id', '=', 'equipes.id')
                ->select('personnes.nom', 'personnes.prenom', 'personnes.type', 'personnes.fonction', 'personnes.poste', 'primes.libellé', 'primes.montant', 'equipes.nom as nom_equipe')
                ->when($search,function($query) use($search){

                    $query->where("personnes.nom","like","%${search}%");
                    $query->orWhere("personnes.prenom","like","%${search}%");


                  
                })
                ->when($type,function($query) use($type){
                   
                    if($type!="all"){
                    $query->where("personnes.type",$type);
                   }
                   
                })
                ->when($equipe,function($query) use($equipe){
                    if($equipe!="all"){
                   $query->where("personnes.equipe_id",$equipe);
                }
                })
                ->get();


              

        $personnes=Personne::all('id','nom','prenom','equipe_id','type');
        $equipes=Equipe::all('id','nom');
        return Inertia::render('Admin/Prime/Prime',[
            'personnes'=>$personnes,
            'equipes'=>$equipes,
            'joueurs'=>$joueurs,
            'search'=>$search,
            'type'=>$type,
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
    public function store(Request $request)
    {
        $validated = $request->validate([
            'libelle' => 'bail|required|string',
            'montant' => 'bail|required|numeric',
            'remarque' => 'bail|nullable|string',
            'equipe'=>'bail|required'
        ]);

        $prime=Prime::create([
            'libellé'=>$request->libelle,
            'montant'=>$request->montant,
            'remarque'=>$request->remarque
        ]);

        if($prime){
            $personnes=Personne::where('equipe_id',$request->equipe)->get();
            $filteredPersonnes = $personnes->whereNotBetween('id', $request->exclure);
            dispatch(new primeDetailsStore($filteredPersonnes,$prime));
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
        //
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
}
