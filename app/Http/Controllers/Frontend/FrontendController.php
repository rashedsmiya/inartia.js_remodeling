<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Services\HomePageHeroService;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    public function __construct(
        protected HomePageHeroService $heroService,
    ) {}

    public function index(): Response
    {
        $banner = $this->heroService->first();

        return Inertia::render('frontend/home', [
            'banner' => $banner,
        ]);
    }

    public function BathroomRemodeling(): Response
    {
        return Inertia::render('frontend/bathroom-remodeling');
    }

    public function HowItWorks(): Response
    {
        return Inertia::render('frontend/how-it-works');
    }

    public function About(): Response
    {
        return Inertia::render('frontend/about');
    }

    public function Contact(): Response
    {
        return Inertia::render('frontend/contact');
    }

    public function TrackOrders(): Response
    {
        return Inertia::render('frontend/track-order');
    }

    public function FreeEstimate(): Response
    {
        return Inertia::render('frontend/free-estimate');
    }
}
