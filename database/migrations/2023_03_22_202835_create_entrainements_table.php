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
        Schema::create('entrainements', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->dateTime('date');
            $table->text("remarque")->nullable();
            $table->enum('etat', ['programmé', 'reporté','annulé'])->default('programmé');
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
        Schema::dropIfExists('entrainements');
    }
};
