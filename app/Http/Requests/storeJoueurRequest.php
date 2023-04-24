<?php

namespace App\Http\Requests;

use App\Rules\emailvalid;
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
            'equipe' => 'required',
            'cin' => 'bail|nullable|string',
            'email' => ['bail','nullable','email',new emailvalid()],
            'adresse' => 'bail|nullable|string',
            'salaire' => 'bail|nullable|numeric',
            'image' => 'bail|nullable|image|dimensions:width=500,height=500|mimes:jpg,jpeg,png',
            'telephone' => 'bail|nullable|string',
            'contrat'=>'bail|nullable||mimes:pdf,jpg,jpeg,png'
        ];
    }
}
