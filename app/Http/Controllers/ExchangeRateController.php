<?php

namespace App\Http\Controllers;

use App\Http\Requests\FetchExchangeRateRequest;
use App\Services\ExchangeRateService;
use Inertia\Inertia;

class ExchangeRateController extends Controller
{
    /**
     * @param ExchangeRateService $exchangeRateService
     */
    public function __construct(
        protected ExchangeRateService $exchangeRateService
    )
    {
    }

    public function index(FetchExchangeRateRequest $request)
    {
        /**
         * Here we can do some logic with the request data
         */
        $inputs = array_filter($request->validated(), function($v) {
          return $v !== null;
        });

        $result = $this->exchangeRateService->getExchangeRateList($inputs);

        return Inertia::render('ExchangeRateIndex', [
            'exchange_rates' => $result
        ]);
    }

}
