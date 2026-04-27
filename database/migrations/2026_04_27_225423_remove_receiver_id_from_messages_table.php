<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
        public function up(): void
{
    Schema::table('messages', function (Blueprint $table) {
        $table->dropForeign(['receiver_id']);  // ✅ 1. supprimer la foreign key d'abord
        $table->dropIndex(['receiver_id']);    // ✅ 2. ensuite l'index
        $table->dropColumn('receiver_id');     // ✅ 3. enfin la colonne
    });
}
    

    public function down(): void
    {
        Schema::table('messages', function (Blueprint $table) {
            $table->unsignedBigInteger('receiver_id')->nullable();
            $table->index('receiver_id');
        });
    }
};