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
     * @var int $page_size
     */
    protected int $page_size = 30;

    /**
     * @var int $page_no
     */
    protected int $page_no = 1;

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

    public function fetchData(array $params): array
    {
         $params['pageNum'] = isset($params['page_no']) ?? $this->page_no;
         $params['pageSize'] = isset($params['page_size']) ?? $this->page_size;
         $queryString = http_build_query($params);
         $url = $this->baseUri . $this->endpoint.'?'. $queryString; // Replace with the actual API endpoint

        /**
         * Define the API request and handle the response
         * @var \GuzzleHttp\Psr7\Response $response
         */
        //$response = $this->client->get($url);
        //return json_decode($response->getBody());

        // For the purpose of this demo, we will return a simple data structure
        return $this->makeSimpleDataPreparation();

    }

    /**
     * @return array
     */
    private function makeSimpleDataPreparation(): array
    {
        $metaData = [
            "pageNum" => 1,
            "totalPage" => 20,
            "pageSize" => 10,
        ];
        $simpleData = config('SimpleData.exchange_rate');

        return array_merge($metaData, $simpleData);
    }
}
