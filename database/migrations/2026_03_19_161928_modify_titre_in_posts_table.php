<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            // Changer le type de titre en texte
            $table->text('titre')->change();

            // Ajouter NBLikes si elle n'existe pas
            if (!Schema::hasColumn('posts', 'NBLikes')) {
                $table->integer('NBLikes')->default(0);
            }

            // Ajouter NBComments si elle n'existe pas
            if (!Schema::hasColumn('posts', 'NBComments')) {
                $table->integer('NBComments')->default(0);
            }

            // Rendre media nullable, même si elle existe déjà
            $table->string('media')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            // Revenir à string pour titre si besoin
            $table->string('titre')->change();

            // Supprimer les colonnes si nécessaire
            if (Schema::hasColumn('posts', 'NBLikes')) {
                $table->dropColumn('NBLikes');
            }
            if (Schema::hasColumn('posts', 'NBComments')) {
                $table->dropColumn('NBComments');
            }
            if (Schema::hasColumn('posts', 'media')) {
                $table->dropColumn('media');
            }
        });
    }
};