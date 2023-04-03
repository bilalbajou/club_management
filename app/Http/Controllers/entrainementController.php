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
    public function index(Request $request)
    {
        $etat=$request->etat;
        $equipe=$request->equipe;
        $date=$request->date;
        $entrainements=Entrainement::with('equipe')
        ->when($etat,function($query) use($etat){
            if($etat!="all"){
            $query->where("etat",$etat);
           }
        })
        ->when($equipe,function($query) use($equipe){
            if($equipe!="all"){
           $query->where("equipe_id",$equipe);
        }
        })
        ->when($date,function($query) use($date){
            if((count($date)==2)&&($date[1]!=null)){
          $query->whereBetween('date',$date);
        }
        })
        
        ->latest()
        ->get();
        ;
        $equipes=Equipe::all(['nom','id']);
        return Inertia::render('Admin/Entrainement/Entrainement',[
            'equipes'=>$equipes,
            'entrainements'=>$entrainements,
            'etat'=>$etat,
            'equipe'=>$equipe,
            'date'=>$date
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
