<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class AssociationEntreprise extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nom'            => 'required|string',
            'tel'            => 'required|string',
            'email'          => 'required|email',
            'domaine_id'     => 'required|integer',
            'adresse'        => 'required|string',
            'annee_creation' => 'required|integer',
            'description'    => 'required|string',
            'site_web'       => 'nullable|url',
            'logo'           => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ];
    }
}
