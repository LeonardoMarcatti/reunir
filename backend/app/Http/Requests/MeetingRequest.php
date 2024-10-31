<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class MeetingRequest extends FormRequest
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
            'title' => 'required|string',
            'room_id' => 'required',
            'start_at' => 'required',
            'end_at' => 'required',
            'participants' => 'required|string',
        ];
    }

    public function messages() : array
    {
        return [
            'title.required' => 'O título é orbigatório',
            'room_id.required' => 'A sala  é obrigatória',
            'start_at.required' => 'Data de início obrigatória',
            'end_at.required' => 'Data final obrigatória',
            'participants.required' => 'O campo é obrigatório'
        ];
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ],400));
    }


}
