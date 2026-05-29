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
            ['nom' => 'Sciences sociales'],
            ['nom' => 'Environnement'],
            ['nom' => 'Agriculture'],
            ['nom' => 'Tourisme'],
            ['nom' => 'Transport'],
            ['nom' => 'Construction'],
            ['nom' => 'Énergie'],
            ['nom' => 'Télécommunications'],
            ['nom' => 'Médias et communication'],
            ['nom' => 'Sport et loisirs'],
            ['nom' => 'Alimentation et restauration'],
            ['nom' => 'Mode et beauté'],
            ['nom' => 'Automobile'],
            ['nom' => 'Aéronautique'],
            ['nom' => 'Maritime'],
            ['nom' => 'Pharmaceutique'],
            ['nom' => 'Biotechnologie'],
            ['nom' => 'Recherche et développement'],
            ['nom' => 'Autre']
        ];

        foreach ($domaines as $domaine) {
            \DB::table('domaines')->insert($domaine);
        }
    }
}
