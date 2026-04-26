<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Villes extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $villes = [
            ['nom' => 'FES'],
            ['nom' => 'CASABLANCA'],
            ['nom' => 'RABAT'],
            ['nom' => 'SALE'],
            ['nom' => 'MARRAKECH'],
            ['nom' => 'TANGER'],
            ['nom' => 'AGADIR'],
            ['nom' => 'OUJDA'],
            ['nom' => 'KENITRA'],
            ['nom' => 'MEKNES'],
            ['nom' => 'SAFI'],
            ['nom' => 'EL JADIDA'],
            ['nom' => 'KHOURIBGA'],
            ['nom' => 'NADOR'],
            ['nom' => 'TETOUAN'],
            ['nom' => 'BENGUERIR'],
            ['nom' => 'TIZNIT'],
            ['nom' => 'AL HOCEIMA'],
            ['nom' => 'GUELMIM'],
            ['nom' => 'ER RACHIDIA'],
            ['nom' => 'OUARZAZATE'],
            ['nom' => 'BENI MELLAL'],
            ['nom' => 'TARFAYA'],
            ['nom' => 'SIDI IFNI'],
            ['nom' => 'ZAGORA'],
            ['nom' => 'LAAYOUNE'],
            ['nom' => 'Dakhla'],

        ];

        foreach ($villes as $ville) {
            \DB::table('villes')->insert($ville);
        }
    }
}
