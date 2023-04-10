<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personne_match', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignId('matche_id')->constrained();

            $table->foreignId('personne_id')->constrained();


       

        
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('joueur_match');
    }
};
