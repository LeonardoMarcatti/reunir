<?php

namespace Database\Seeders;

use App\Models\RoomsModel;
use Illuminate\Database\Seeder;

class RoomsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        RoomsModel::create([
            'name' => 'Sala de Reunião A',
            'maxPeople' => 20,
        ]);

        RoomsModel::create([
            'name' => 'Sala de Reunião B',
            'maxPeople' => 100,
        ]);

        RoomsModel::create([
            'name' => 'Sala de Reunião C',
            'maxPeople' => 35,
        ]);
    }
}
