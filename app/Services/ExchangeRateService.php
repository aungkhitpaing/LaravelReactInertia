<?php

namespace App\Services;
use App\Http\Requests\FetchExchangeRateRequest;
use Illuminate\Support\Collection;

class ExchangeRateService
{
    /**
     * @var ThirdPartyApiService $callApi
     */
    protected ThirdPartyApiService $callApi;

    /**
     * ExchangeRateService constructor.
     */
    public function __construct()
    {
        $this->callApi = new ThirdPartyApiService('https://api.third-party.com/', 'exchange-rates');
    }

    public function getExchangeRateList(): array
    {
        return $this->callApi->fetchData();
    }
}
