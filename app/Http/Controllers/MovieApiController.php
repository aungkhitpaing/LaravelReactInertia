<?php

namespace App\Http\Controllers;

use App\Http\Requests\FetchMovieApiRequest;
use App\Services\MovieApiService;
use Inertia\Inertia;

class MovieApiController extends Controller
{

    protected string $baseUri = 'https://moviesdatabase.p.rapidapi.com/';
    protected string $endpoint = 'titles';
    protected MovieApiService $service;

    public function __construct()
    {
        $this->service = new MovieApiService($this->baseUri, $this->endpoint);
    }

    public function index(FetchMovieApiRequest $request)
    {
        /**
         * Here we can do some logic with the request data
         */
        $inputs = array_filter($request->validated(), function($v) {
            return $v !== null;
        });

        $result = $this->service->getMovieTitleList($inputs);

        return Inertia::render('MovieIndex', [
            'movies' => $result
        ]);
    }
}
