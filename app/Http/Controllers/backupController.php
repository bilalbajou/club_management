<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class backupController extends Controller
{
    

    public function index(){

        dispatch(function () {
            Artisan::call('backup:run');
           });
      
    }
}
