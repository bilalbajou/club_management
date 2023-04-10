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
        Schema::create('prime_personne', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->foreignId('prime_id')->constrained();

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
        Schema::dropIfExists('prime_personne');

    }
};
