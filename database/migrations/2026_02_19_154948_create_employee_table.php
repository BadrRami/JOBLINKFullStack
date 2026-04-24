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
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('nom')->index()->nullable()->default('');
            $table->string('prenom')->nullable()->default('');
            $table->string('email')->unique();
            $table->string('tel', 10)->nullable();
            $table->string('niveau_etude')->nullable();
            $table->enum('etat', ['profile validé', 'en attente de validation'])->default('en attente de validation');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('employees');
    }
};
