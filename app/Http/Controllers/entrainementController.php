<?php

namespace App\Http\Controllers;

use App\Jobs\annulerEntrainement;
use App\Jobs\ConvEntrainement;
use App\Jobs\reporterEntrainement;
use Illuminate\Http\Request;
use App\Models\Equipe;
use App\Models\Entrainement;
use Inertia\Inertia;
class entrainementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $entrainements=Entrainement::with('equipe')->get();
        $equipes=Equipe::all(['nom','id']);
        return Inertia::render('Admin/Entrainement/Entrainement',[
            'equipes'=>$equipes,
            'entrainements'=>$entrainements
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
            'date' => 'required',
            'equipe'=>'required',
            'remarque'=>'nullable|string'
        ]);

       $entrainement= Entrainement::create([
            'date'=>$request->date,
            'equipe_id'=>$request->equipe,
            'remarque'=>$request->remarque
        ]);

        if($entrainement){
            dispatch(new ConvEntrainement($entrainement));
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
        $entrainement=Entrainement::find($id);
        $entrainement->date=$request->date;
        $entrainement->etat="reporté";
        if($entrainement->save()){
            dispatch(new reporterEntrainement($entrainement));

            
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
        $entrainement=Entrainement::find($id);
        $entrainement->etat="annulé";
        if($entrainement->save()){
            dispatch(new annulerEntrainement($entrainement));
        }
    }
   
}
