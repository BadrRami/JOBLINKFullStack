<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('entreprises', function (Blueprint $table) {
            $table->id();

            $table->string('nom')->index();
            $table->text('description');
            $table->string('tel', 10);
            $table->string('email')->unique();
            
            $table->foreignId('domaine_id')
                ->constrained()
                ->onDelete('cascade');

            $table->string('adresse');
            $table->year('annee_creation');
            $table->string('site_web')->nullable();

            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entreprises');
    }
};
