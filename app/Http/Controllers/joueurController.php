<?php

namespace App\Http\Controllers;

use App\Http\Requests\storeJoueurRequest;
use App\Jobs\mailWelcomeJoueur;
use App\Models\Adhesion;
use App\Models\Equipe;
// use Illuminate\Support\Facades\Request;
use Illuminate\Http\Request;
use App\Models\Joueur;
use App\Models\Personne;
use App\Models\Plan;
use App\Models\Prime;
use App\Models\reglementSalaire;
use App\Service\emailVerify;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Barryvdh\DomPDF\Facade\Pdf;
use DateTime;
use Illuminate\Support\Facades\Date;

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

        $joueurs=Personne::with(['equipe','plan'])
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
        ->paginate(9)
        ;

     
        $plans=Plan::all();

       $equipes=Equipe::all(['nom','id']);
      return Inertia::render('Admin/Joueur/Joueur',[
        'equipes'=>$equipes,
        'joueurs'=>$joueurs,
        'search'=>$search,
        'poste'=>$poste,
        'equipe'=>$equipe,
        'plans'=>$plans
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


        // $joueur=new Personne();
        // $joueur->nom=$request->nom;
        // $joueur->prenom=$request->prenom;
        // $joueur->age=$request->age;
        // $joueur->salaire=$request->salaire;
        // $joueur->cin=$request->cin;
        // $joueur->adresse=$request->adresse;
        // $joueur->telephone=$request->telephone;
        // $joueur->email=$request->email;
        // $joueur->poste=$request->poste;
        // $joueur->equipe_id=$request->equipe;
        // $joueur->type="joueur";
        // if($request->file('image')){
        //   $image=$request->file('image');
        //   $joueur->image=uniqid()."_".$image->getClientOriginalName();
        //   $image->move(public_path('joueur/image'),$joueur->image);

        // }

        // if($request->file('contrat')){
        //     $contrat=$request->file('contrat');

        //     $joueur->contrat=uniqid()."_".$contrat->getClientOriginalName();
        //     $contrat->move(public_path('joueur/contrat'),$joueur->contrat);
        // }


        // if($joueur->save()){
        //     if($joueur->email){
        //         dispatch(new mailWelcomeJoueur($joueur));
        //     }

        // }

        $joueur = new Personne();
        $data = $request->only(['nom', 'prenom', 'age', 'salaire', 'cin', 'adresse', 'telephone', 'email', 'poste']);
        $data['plan_id'] =$request->plan_id;
        $data['equipe_id'] = $request->equipe;
        $data['type'] = 'joueur';

        if ($request->file('image')) {
            $image = $request->file('image');
            $data['image'] = uniqid() . "_" . $image->getClientOriginalName();
            $image->move(public_path('joueur/image'), $data['image']);
        }

        if ($request->file('contrat')) {
            $contrat = $request->file('contrat');
            $data['contrat'] = uniqid() . "_" . $contrat->getClientOriginalName();
            $contrat->move(public_path('joueur/contrat'), $data['contrat']);
        }

        $joueur->fill($data);

        if ($joueur->save() && $joueur->email) {
            dispatch(new mailWelcomeJoueur($joueur));
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
           $plans=Plan::all();
         
           return Inertia::render('Admin/Joueur/Components/updateJoueur',[
            'joueur'=>$joueur,'equipes'=>$equipes,'plans'=>$plans

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
        $joueur->plan_id=$request->plan_id;

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

    public function reglerSalaire(Request $request){

        $validated = $request->validate([
            'libelle' => 'bail|nullable',
            'montant' => 'bail|required|numeric',
            'mois' => 'bail|required',     
        ]);
       $joueur=Personne::find($request->joueur_id);
       $reglementSalaire=new reglementSalaire();

       $reglementSalaire->libellé=$request->libelle;
       if($request->montant===$joueur->salaire){
        $reglementSalaire->montant=$request->montant;
    }else{
        $reglementSalaire->montant=$request->montant;
        $reglementSalaire->reste=$joueur->salaire-$request->montant;
    }
       $reglementSalaire->mois=$request->mois;
        $reglementSalaire->personne_id=$request->joueur_id;
        $reglementSalaire->reglement_date=Date('Y-m-d H:i:s');
        if($reglementSalaire->montant<=$joueur->salaire){
        $reglementSalaire->save();
        }
    
       


      
         
    }

    public function reglerAdhesion($id){
       $joueur=Personne::findOrfail($id);
     if($joueur->plan_id){
       $plan=Plan::findOrfail($joueur->plan_id);
       $joueur->montant_global=$joueur->montant_global+$plan->montant;

       $joueur->derniere_paiement=Carbon::now()->format('Y-m-d');
       $joueur->date_echeance=Carbon::now()->addMonths($plan->duree)->format('Y-m-d');
        if($joueur->save()){
          
        }
   

    }





    }
}
