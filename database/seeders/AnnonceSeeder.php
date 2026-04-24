<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnnonceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table("annonces")->insert([
            [
            'titre'=>"Joli Appart au centre ville",
            'description'=>"2 chambres, cuisine et un salon",
            'type'=>"Appartement",
            'ville'=>"Fès",
            'superficie'=>100,
            'neuf'=>true,
            'prix'=>600000,
        ],
              [
            'titre'=>Str::random(15),
            'description'=>Str::random(40),
            'type'=>"Maison",
            'ville'=>"Rabat",
            'superficie'=>120,
            'neuf'=>false,
            'prix'=>1200000,
        ],
        ]);
    }
}
