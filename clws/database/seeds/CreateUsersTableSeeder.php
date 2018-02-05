<?php

use Illuminate\Database\Seeder;
use App\User;

class CreateUsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Let's clear the users table first
        User::truncate();

        $faker = \Faker\Factory::create();

        // Let's make sure everyone has the same password and 
        // let's hash it before the loop, or else our seeder 
        // will be too slow.
        $password = Hash::make('complejolautaro2018');

        User::create([
            'email' => 'admin@test.com',
            'usertype' => '1',
            'password' => $password,
        ]);
    }
}
