<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FetchExchangeRateRequest extends FormRequest
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
            'partner_name' => ['max:200','string'],
            'date_and_time' => ['date_format:Y-m-d H:i:s'],
            'updated_by' => ['max:200','string'],
        ];
    }
}
