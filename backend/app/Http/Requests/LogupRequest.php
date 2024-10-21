<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LogupRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required|confirmed',
            'password_confirmation' => 'required',
        ];
    }

    public function messages() : array
    {
        return [
            'name.required' => 'O nome é orbigatório',
            'email.required' => 'O email é obrigatório',
            'email.unique' => 'O email já é utilizado',
            'password.required' => 'A senha é obrigatória',
            'password.confirmed' => 'As senhas devem ser iguais',
            'password_confirmation.required' => 'Repita a senha',
        ];
    }
}
