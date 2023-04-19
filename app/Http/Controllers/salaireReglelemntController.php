<?php

namespace App\Http\Controllers;
use Inertia\Inertia;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Personne;
use App\Models\Equipe;


class salaireReglelemntController extends Controller
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
        $salaires = DB::table('reglement_salaires')
        ->join('personnes', 'personnes.id', '=', 'reglement_salaires.personne_id')
        ->join('equipes', 'equipes.id', '=', 'personnes.equipe_id')
        ->select('reglement_salaires.id', 'personnes.nom','personnes.prenom', 'reglement_salaires.montant', 'reglement_salaires.reglement_date', 'reglement_salaires.reste', 'reglement_salaires.mois', 'equipes.nom as nom_equipe')
     
        ->when($search, function ($query) use ($search) {

            $query->where("personnes.nom", "like", "%${search}%");
            $query->orWhere("personnes.prenom", "like", "%${search}%");
        })
            ->when($type, function ($query) use ($type) {

                if ($type != "all") {
                    $query->where("personnes.type", $type);
                }
            })
            ->when($equipe, function ($query) use ($equipe) {
                if ($equipe != "all") {
                    $query->where("personnes.equipe_id", $equipe);
                }
            })
            ->get();

            

              

        $personnes=Personne::all('id','nom','prenom','equipe_id','type');
        $equipes=Equipe::all('id','nom');
        return Inertia::render('Admin/Salaire/Salaire',[
            'personnes'=>$personnes,
            'equipes'=>$equipes,
            'salaires'=>$salaires,
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
        //
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
