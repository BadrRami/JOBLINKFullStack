<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Domaines extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $domaines = [
            ['nom' => 'Informatique'],
            ['nom' => 'Santé'],
            ['nom' => 'Finance'],
            ['nom' => 'Éducation'],
            ['nom' => 'Marketing'],
            ['nom' => 'Vente'],
            ['nom' => 'Ressources humaines'],
            ['nom' => 'Ingénierie'],
            ['nom' => 'Droit'],
            ['nom' => 'Art et design'],
        ];

        foreach ($domaines as $domaine) {
            \DB::table('domaines')->insert($domaine);
        }
    }
}
