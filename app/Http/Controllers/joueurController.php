<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeJoueurRequest;
use App\Jobs\mailWelcomeJoueur;
use App\Models\Equipe;
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use App\Models\Joueur;
use App\Models\Personne;
use App\Models\Prime;
use App\Service\emailVerify;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;

class joueurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search=$request->search;
        $poste=$request->poste;
        $equipe=$request->equipe;

        $joueurs=Personne::with('equipe')
        ->where('type','joueur')
        ->when($search,function($query) use($search){
            $query->where("nom","like","%$search%");
            $query->orWhere("prenom","like","%$search%");
        })
        ->when($poste,function($query) use($poste){
           
            if($poste!="all"){
            $query->where("poste",$poste);
           }
           
        })
        ->when($equipe,function($query) use($equipe){
            if($equipe!="all"){
           $query->where("equipe_id",$equipe);
        }
        })
        
        ->latest()
        ->paginate(12)
        ;
       $equipes=Equipe::all(['nom','id']);
      return Inertia::render('Admin/Joueur/Joueur',[
        'equipes'=>$equipes,
        'joueurs'=>$joueurs,
        'search'=>$search,
        'poste'=>$poste,
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
    public function store(storeJoueurRequest $request)
    {
        
        
        $joueur=new Personne();
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
        $joueur->type="joueur";
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
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
           $joueur=Personne::findOrfail($id);
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
        $joueur=Personne::findOrfail($id);
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

        Personne::findOrFail($id)->delete();
        return to_route('joueurs.index');
    }

    public function generateFicheJoueur($id){
        $joueur=Personne::findOrfail($id);
        $pdf = PDF::loadView('pdf.ficheJoueur',compact('joueur'));
        return $pdf->download(uniqid().$joueur->nom.' '.$joueur->prenom.'.pdf');    
    }

    public function reglerPrime(Request $request){
        $validated = $request->validate([
            'libelle' => 'required|string',
            'montant' => 'required|numeric',
            'remarque' => 'nullable|string',     
        ]);
       $prime= Prime::create([
            'libellé'=>$request->libelle,
            'montant'=>$request->montant,
            'remarque'=>$request->remarque
        ]);

        if($prime){
            DB::insert('insert into prime_personne (personne_id, prime_id) values (?, ?)', [$request->joueur_id, $prime->id]);
        }
         
    }
}
