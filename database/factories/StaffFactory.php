<?php

namespace Database\Factories;
use Faker\Generator as Faker;


use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Staff>
 */
class StaffFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nom' => fake()->firstName(),
            'prenom' => fake()->lastName(),
            'cin'=>fake()->swiftBicNumber(),
            'email' => fake()->safeEmail(),
            'salaire' => fake()->numberBetween(1000,1000000),
            'adresse' => fake()->address(),
            'fonction' => fake()->randomElement(["Entraineur","Directeur technique","Entraineur adjoint","Staff médical","Entraineur du gardien"]),
            'telephone' => fake()->phoneNumber(),
            'age' => fake()->numberBetween(4,50),
            'equipe_id' => fake()->numberBetween(1,3),
            'image' => fake()->imageUrl(500,500,"sport")
        ];
        
    }
}
