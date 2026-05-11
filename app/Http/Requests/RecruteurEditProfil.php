<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class RecruteurEditProfil extends FormRequest
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
        'name'       => 'required|string|regex:/^[A-Za-z\s]+$/',
        'prenom'     => 'required|string|regex:/^[A-Za-z\s]+$/',
        'email'      => 'required|email',
        'tel'        => 'required|digits_between:8,15',
        'gender'     => 'required|in:homme,femme',  // ← genre → gender
        'poste'      => 'required|string',
        'birth_date' => 'required|date',
        'photo'      => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
    ];
}
}
