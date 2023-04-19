<?php

namespace App\Http\Controllers;

use App\Mail\userMail;
use App\Models\User;
use App\Rules\emailvalid;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $users=User::all(['id','name','email','role','etat']);
        return Inertia::render('Admin/Utilisateur/Utilisateur',[
            'users'=>$users
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
            'name' => 'bail|required|string',
            'email' => ['bail','email','unique:App\Models\User,email',new emailvalid()],
            'role' => 'bail|required|string'
        ]);

        $random = str_shuffle('abcdefghjklmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ234567890!$%^&!$%^&');
        $password = substr($random, 8, 10);

        $user=User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($password),
            'role'=>$request->role
        ]);

        if($user){
            Mail::to($user->email)->queue(new userMail($user,$password));
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
            'name' => 'bail|required|string',
            'email' => ['bail','email',new emailvalid()],
            'role' => 'bail|required|string'
        ]);

        $user=User::find($id);
        $user->name=$request->name;
        $user->email=$request->email;
        $user->role=$request->role;
        $user->save();
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
    public function activer($id)
    {
        $user=User::find($id);
        $user->etat='1';
        $user->save();
           
    }

    public function desactiver($id)
    {
        $user=User::find($id);
        $user->etat='0';
        $user->save();

    }

   
}
