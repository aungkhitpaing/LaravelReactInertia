<?php

namespace App\Services;

use GuzzleHttp\Client;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Collection;

class ThirdPartyApiService
{
    /**
     * @var Client $client
     */
    protected Client $client;

    /**
     * @var string $baseUri
     */
    protected string $baseUri;

    /**
     * @var string $endpoint
     */
    protected string $endpoint;

    /**
     * ThirdPartyApiService constructor.
     *
     * @param string $baseUri
     * @param string $endpoint
     */
    public function __construct(string $baseUri, string $endpoint)
    {
        $this->baseUri = $baseUri;
        $this->endpoint = $endpoint;
        $this->client = new Client([
            'base_uri' => $this->baseUri ?: 'https://api.third-party.com/', // Replace with the actual API endpoint
        ]);
    }

    public function fetchData(): array
    {
        //$url = $this->baseUri . $this->endpoint; // Replace with the actual API endpoint

        /**
         * Define the API request and handle the response
         * @var \GuzzleHttp\Psr7\Response $response
         */
        //$response = $this->client->get($url);
        //return json_decode($response->getBody());

        return $this->makeSimpleDataPreparation();

    }

    /**
     * @return array
     */
    public function makeSimpleDataPreparation(): array
    {
        $metaData = [
            "pageNum" => 1,
            "totalPage" => 20,
            "pageSize" => 5,
        ];
        $simpleData = config('SimpleData.exchange_rate');

        return array_merge($metaData, $simpleData);
    }



}
