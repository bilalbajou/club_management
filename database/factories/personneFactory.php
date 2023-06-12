<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\personne>
 */
class personneFactory extends Factory
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
            // 'poste' => fake()->randomElement(["Défense","Attack","Gardien","Milieu"]),
            'fonction' => fake()->randomElement(["Directeur","Directeur génerale","Entraineur","Entraineur gardien"]),

            'telephone' => fake()->phoneNumber(),
            'type'=>'staff',
            'age' => fake()->numberBetween(6,30),
            'equipe_id' => fake()->numberBetween(1,7)
            // 'image' => fake()->imageUrl(500,500,"sport")
        ];
    }
}
