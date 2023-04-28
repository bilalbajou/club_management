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
        Schema::create('personnes', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('nom');
            $table->string('prenom');
            $table->integer('age');
            $table->string('cin')->nullable();
            $table->string('email')->nullable();
            $table->string('poste')->nullable();
            $table->string('fonction')->nullable();
            $table->enum('type',['joueur','staff']);
            $table->string('adresse')->nullable();
            $table->string('telephone')->nullable();
            $table->double('salaire')->nullable();
            $table->string('contrat')->nullable();
            $table->string('image')->nullable();
            $table->date('derniere_paiement')->nullable();
            $table->date('date_echeance')->nullable();
            $table->double('montant_global')->nullable();
            $table->foreignId('plan_id')->nullable()->constrained();
            $table->foreignId('equipe_id')->constrained();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personnes');
    }
};
