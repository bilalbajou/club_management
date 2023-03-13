<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeJoueurRequest;
use App\Jobs\mailWelcomeJoueur;
use App\Models\Equipe;
use Illuminate\Support\Facades\Request;
use App\Models\Joueur;
use App\Service\emailVerify;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class joueurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        
        // dd($request);
        $joueurs=Joueur::with('equipe')
        ->when($request,function($query) use($request){

        })
        ->latest()
        ->paginate(30)
        ;
       $equipes=Equipe::all(['nom','id']);
      return Inertia::render('Admin/Joueur/Joueur',[
        'equipes'=>$equipes,
        'joueurs'=>$joueurs
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
    public function store(storeJoueurRequest $request,emailVerify $emailVerify)
    {
        
        
        $joueur=new Joueur();
        $joueur->nom=$request->nom;
        $joueur->prenom=$request->prenom;
        $joueur->age=$request->age;
        $joueur->salaire=$request->salaire;
        $joueur->cin=$request->cin;
        $joueur->adresse=$request->adresse;
        $joueur->telephone=$request->telephone;
        $joueur->email=$request->email;
        $joueur->poste=$request->poste;
        $joueur->equipe_id=$request->equipe;
        // if($joueur->email){
        //     $emailVerify->verify($joueur->email);
        // }
        if($request->file('image')){
          $image=$request->file('image');
          $joueur->image=uniqid()."_".$image->getClientOriginalName();
          $image->move(public_path('joueur/image'),$joueur->image);

        }

        if($request->file('contrat')){
            $contrat=$request->file('contrat');
            
            $joueur->contrat=uniqid()."_".$contrat->getClientOriginalName();
            $contrat->move(public_path('joueur/contrat'),$joueur->contrat);
        }


        if($joueur->save()){
            if($joueur->email){
                dispatch(new mailWelcomeJoueur($joueur));
            }

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
           $joueur=Joueur::findOrfail($id);
           $equipes=Equipe::all(['id','nom']);
         
           return Inertia::render('Admin/Joueur/Components/updateJoueur',[
            'joueur'=>$joueur,'equipes'=>$equipes
           ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(storeJoueurRequest $request, $id)
    {
        $joueur=Joueur::findOrfail($id);
        $joueur->nom=$request->nom;
        $joueur->prenom=$request->prenom;
        $joueur->age=$request->age;
        $joueur->salaire=$request->salaire;
        $joueur->cin=$request->cin;
        $joueur->adresse=$request->adresse;
        $joueur->telephone=$request->telephone;
        $joueur->email=$request->email;
        $joueur->poste=$request->poste;
        $joueur->equipe_id=$request->equipe;
        if($request->file('image')){
          $image=$request->file('image');
          $joueur->image=uniqid()."_".$image->getClientOriginalName();
          $image->move(public_path('joueur/image'),$joueur->image);
        }

        if($request->file('contrat')){
            $contrat=$request->file('contrat');
            $joueur->contrat=uniqid()."_".$contrat->getClientOriginalName();
            $contrat->move(public_path('joueur/contrat'),$joueur->contrat);
        }


         $joueur->save();
         

    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        Joueur::findOrFail($id)->delete();
        return to_route('joueurs.index');
    }
}
