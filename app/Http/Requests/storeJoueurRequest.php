<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class storeJoueurRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'nom' => 'bail|required|string',
            'prenom' => 'bail|required|string',
            'age' => 'bail|required|numeric',
            'equipe' => 'required'
            // 'cin' => 'string',
            // 'email' => 'email',
            // 'adresse' => 'string',
            // 'salaire' => 'numeric',
            // 'image' => 'image',
            // 'telephone' => 'string',
        ];
    }
}
