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
        Schema::create('reglement_salaires', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('libellé')->nullable();
            $table->float('montant');
            $table->float('reste')->default(0);
            $table->enum('mois',['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre']);
            $table->dateTime('reglement_date');
            $table->foreignId('personne_id')->constrained();
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
        Schema::dropIfExists('reglement_salaires');
    }
};
