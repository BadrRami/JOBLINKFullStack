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
        Schema::create('recruteurs', function (Blueprint $table) {
            $table->id();
             $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->string('poste')->nullable();
            $table->foreignId('entreprise_id')
                    ->nullable()
                    ->constrained()
                    ->nullOnDelete();
                    
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('recruteurs');
    }
};
