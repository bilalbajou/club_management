<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Validation\Rules\Enum;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('matches', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->string('adversaire');
            $table->string('lieu');
            $table->dateTime('date');
            $table->text("remarque")->nullable();
            $table->string("resultat")->nullable();
            $table->enum('etat', ['programmé', 'reporté','annulé'])->default('programmé');
            $table->string('championat')->nullable();
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
        Schema::dropIfExists('matches');
    }
};
