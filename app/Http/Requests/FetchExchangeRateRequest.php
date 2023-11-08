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
            'page_size' => ['nullable','integer'],
            'page_no' => ['nullable','integer'],
            'partner_name' => ['max:200','string'],
            'checked_at' => ['nullable'],
            'updated_by' => ['max:200','string'],
        ];
    }
}
