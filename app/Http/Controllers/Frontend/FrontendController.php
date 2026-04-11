<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class FrontendController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('frontend/home');
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
