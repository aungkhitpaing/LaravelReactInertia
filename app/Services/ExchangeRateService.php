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
     * @var string $baseUri
     */
    protected string $baseUri = 'https://api.third-party.com/';

    /**
     * @var string $endpoint
     */
    protected string $endpoint = 'exchange-rates';

    /**
     * ExchangeRateService constructor.
     */
    public function __construct()
    {
        $this->callApi = new ThirdPartyApiService($this->baseUri, $this->endpoint);
    }

    public function getExchangeRateList(array $params): array
    {
        return $this->callApi->fetchData($params);
    }
}
