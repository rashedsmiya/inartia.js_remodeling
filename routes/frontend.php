<?php

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('/', [FrontendController::class, 'index'])->name('home');
    Route::get('/bathroom-remodeling', [FrontendController::class, 'BathroomRemodeling'])->name('bathroom-remodeling');
    Route::get('/how-it-works', [FrontendController::class, 'HowItWorks'])->name('how-it-works');
    Route::get('/about', [FrontendController::class, 'About'])->name('about');
    Route::get('/contact', [FrontendController::class, 'Contact'])->name('contact');
    Route::get('/track-order', [FrontendController::class, 'TrackOrders'])->name('track-orders');
    Route::get('/free-estimate', [FrontendController::class, 'FreeEstimate'])->name('free-estimate');
});
