<?php

namespace App\Services;
use App\Http\Requests\FetchExchangeRateRequest;
use Illuminate\Support\Collection;

class MovieApiService
{
    /**
     * @var ThirdPartyApiService $callApi
     */
    protected ThirdPartyApiService $callApi;

    /**
     * @var string $baseUri
     */
    protected string $baseUri;

    /**
     * @var string $endpoint
     */
    protected string $endpoint;

    /**
     * ExchangeRateService constructor.
     */
    public function __construct(string $baseUri, string $endpoint)
    {
        $this->baseUri = $baseUri;
        $this->endpoint = $endpoint;
        $this->callApi = new ThirdPartyApiService($this->baseUri, $this->endpoint, false);
    }

    public function getMovieTitleList(array $params): array
    {
        $result = $this->callApi->fetchData($params);

        return ($result) ? (array)$result : [];
    }
}
