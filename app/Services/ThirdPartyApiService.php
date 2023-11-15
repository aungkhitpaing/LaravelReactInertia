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
     * @var bool $isSimpleDataReturn
     */
    protected bool $isSimpleDataReturn;

    /**
     * ThirdPartyApiService constructor.
     *
     * @param string $baseUri
     * @param string $endpoint
     */
    public function __construct(string $baseUri, string $endpoint, bool $isSimpleDataReturn = true)
    {
        $this->baseUri = $baseUri;
        $this->endpoint = $endpoint;
        $this->isSimpleDataReturn = $isSimpleDataReturn;
        $this->client = new \GuzzleHttp\Client();

    }

    public function fetchData(array $params)
    {
        //  $params['pageNum'] = isset($params['page_no']) ?? $this->page_no;
        //  $params['pageSize'] = isset($params['page_size']) ?? $this->page_size;
        $queryString = !empty($params) ? http_build_query($params) : null;

        $url = $this->baseUri . $this->endpoint;

        if ($queryString) {

            $url = $this->baseUri . $this->endpoint.'?'. $queryString; // Replace with the actual API endpoint
        }

        if (!$this->isSimpleDataReturn) {

            /**
             * Define the API request and handle the response
             * @var \GuzzleHttp\Psr7\Response $response
             */
            $response = $this->client->request('GET', $url, [
                'headers' => [
                    'X-RapidAPI-Host' => 'moviesdatabase.p.rapidapi.com',
                    'X-RapidAPI-Key' => 'KTNsCMU7tlmshFpMQRV3nkNvz4p8p16MJb1jsnfOfjNug4eIxb',
                ]
            ]);

            return json_decode($response->getBody()->getContents());
        }


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
