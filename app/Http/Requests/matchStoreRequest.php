<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class matchStoreRequest extends FormRequest
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
            'adversaire' => 'bail|required|string',
            'lieu' => 'bail|required|string',
            'equipe' => 'bail|required',
            'date' => 'bail|required',
            'exclure' => 'bail|nullable',
            'remarque' => 'bail|nullable',
        ];
    }
}
