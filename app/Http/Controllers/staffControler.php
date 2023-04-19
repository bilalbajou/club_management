<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Models\Staff;
use Illuminate\Http\Request;
use App\Http\Requests\storeJoueurRequest;
use App\Models\Equipe;
use App\Jobs\mailWelcomeStaff;
use App\Models\reglementSalaire;
use App\Models\Personne;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\Prime;
use Illuminate\Http\Client\Request as ClientRequest;
use Illuminate\Support\Facades\DB;

class staffControler extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $search=$request->search;
        $fonction=$request->fonction;
        $equipe=$request->equipe;

        $staffs=Personne::with('equipe')
        ->where('type','staff')
        ->when($search,function($query) use($search){
            $query->where("nom","like","%${search}%");
            $query->orWhere("prenom","like","%${search}%");
        })
        ->when($fonction,function($query) use($fonction){
           
            if($fonction!="all"){
            $query->where("fonction",$fonction);
           }
           
        })
        ->when($equipe,function($query) use($equipe){
            if($equipe!="all"){
           $query->where("equipe_id",$equipe);
        }
        })
        
        ->latest()
        ->paginate(30)
        ;
        
       $equipes=Equipe::all(['nom','id']);
      return Inertia::render('Admin/Staff/Staff',[
        'equipes'=>$equipes,
        'staffs'=>$staffs,
        'search'=>$search,
        'fonction'=>$fonction,
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

        $staff = new Personne();
        $data = $request->only(['nom', 'prenom', 'age', 'salaire', 'cin', 'adresse', 'telephone', 'email', 'poste']);
        $data['equipe_id'] = $request->equipe;
        $data['type'] = 'staff';

        if ($request->file('image')) {
            $image = $request->file('image');
            $data['image'] = uniqid() . "_" . $image->getClientOriginalName();
            $image->move(public_path('staff/image'), $data['image']);
        }

        if ($request->file('contrat')) {
            $contrat = $request->file('contrat');
            $data['contrat'] = uniqid() . "_" . $contrat->getClientOriginalName();
            $contrat->move(public_path('staff/contrat'), $data['contrat']);
        }

        $staff->fill($data);

        if ($staff->save() && $staff->email) {
            dispatch(new mailWelcomeStaff($staff));
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
        $staff=Personne::findOrfail($id);
        $equipes=Equipe::all(['id','nom']);
      
        return Inertia::render('Admin/Staff/Components/updateStaff',[
         'staff'=>$staff,'equipes'=>$equipes
        ]);
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
        $staff=Personne::findOrfail($id);
        $staff->nom=$request->nom;
        $staff->prenom=$request->prenom;
        $staff->age=$request->age;
        $staff->salaire=$request->salaire;
        $staff->cin=$request->cin;
        $staff->adresse=$request->adresse;
        $staff->telephone=$request->telephone;
        $staff->email=$request->email;
        $staff->fonction=$request->fonction;
        $staff->equipe_id=$request->equipe;
        if($request->file('image')){
          $image=$request->file('image');
          $staff->image=uniqid()."_".$image->getClientOriginalName();
          $image->move(public_path('staff/image'),$staff->image);

        }

        if($request->file('contrat')){
            $contrat=$request->file('contrat');
            
            $staff->contrat=uniqid()."_".$contrat->getClientOriginalName();
            $contrat->move(public_path('staff/contrat'),$staff->contrat);
        }


         $staff->save();
         
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
        return to_route('staffs.index');
    }


    public function generateFicheStaff($id){
        $staff=Personne::findOrfail($id);
        $pdf = Pdf::loadView('pdf.ficheStaff');
        return $pdf->download(uniqid().$staff->nom.' '.$staff->prenom.'.pdf');    
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
            DB::insert('insert into prime_personne (personne_id, prime_id) values (?, ?)', [$request->staff_id, $prime->id]);
        }
         
    }
    public function reglerSalaire(Request $request){
        $validated = $request->validate([
            'libelle' => 'bail|nullable',
            'montant' => 'bail|required|numeric',
            'mois' => 'bail|required',     
        ]);
       $staff=Personne::find($request->staff_id);
       $reglementSalaire=new reglementSalaire();
       $reglementSalaire->libellé=$request->libelle;
       if($request->montant===$staff->salaire){
        $reglementSalaire->montant=$request->montant;
    }   else{
        $reglementSalaire->montant=$request->montant;
        $reglementSalaire->reste=$staff->salaire-$request->montant;
    }
       $reglementSalaire->mois=$request->mois;
        $reglementSalaire->personne_id=$request->staff_id;
        $reglementSalaire->reglement_date=Date('Y-m-d H:i:s');
        $reglementSalaire->save();
    }
}
