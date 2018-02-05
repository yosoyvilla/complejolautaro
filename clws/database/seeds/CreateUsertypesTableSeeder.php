<?php

use Illuminate\Database\Seeder;
use App\Usertypes;

class CreateUsertypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's truncate our existing records to start from scratch.
        Usertypes::truncate();

        $faker = \Faker\Factory::create();

        Usertypes::create([
                'description' => "Administrador"
            ]);
        Usertypes::create([
                'description' => "Cliente"
            ]);
        Usertypes::create([
                'description' => "Empleado"
            ]);
    }
}
