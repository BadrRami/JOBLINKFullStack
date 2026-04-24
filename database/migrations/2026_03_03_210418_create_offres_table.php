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
        Schema::create('offres', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->text('description');
            $table->enum('type',['full-time', 'part-time', 'stage', 'mission','freelance']);
            $table->enum('etat',['active', 'inactive']);
            $table->string('localisation');
            $table->foreignId('domaine_id')
                ->constrained()
                ->onDelete('cascade');
            $table->foreignId('ville_id')
                ->constrained()
                ->onDelete('cascade');
            $table->foreignId('users_id')
                ->constrained()
                ->onDelete('cascade')->nullable();
            $table->decimal('salaire', 10, 2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offres');
    }
};
