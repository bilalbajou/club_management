<?php

namespace App\Http\Controllers;

use App\Http\Requests\matchStoreRequest;
use App\Jobs\matcheStoreDetailJob;
use App\Models\Equipe;
use App\Models\Joueur;
use App\Models\Matche;
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
    public function index()
    {
        $joueurs=Joueur::all(['id','nom','prenom','equipe_id']);
        $equipes=Equipe::all(['id','nom']);
        return Inertia::render('Admin/Match/Match',[
            'equipes'=>$equipes,
            'joueurs' => $joueurs
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

       
    //   $matche = Matche::create([
    //         'adversaire'=>$request->adversaire,
    //         'lieu'=>$request->lieu,
    //         'date'=>$request->date,
    //         'remarque'=>$request->remarque
    //     ]);
       
   
        
    //     dispatch(new matcheStoreDetailJob($request,$matche));

      

        


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
