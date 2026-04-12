<?php

use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Backend\Admin\AdminDashboardController;
use App\Http\Controllers\Backend\Admin\AdminLoginController;
use App\Http\Controllers\UserSelectionController;
use Illuminate\Support\Facades\Route;

// Admin Authentication Routes
Route::prefix('admin')->name('admin.')->group(function () {
    Route::middleware('guest:admin')->group(function () {
        Route::get('/login', [AdminLoginController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [AdminLoginController::class, 'login'])->name('login.store');
    });

    Route::middleware(['admin'])->group(function () {
        Route::post('/logout', [AdminLoginController::class, 'logout'])->name('logout');
        Route::get('/dashboard', AdminDashboardController::class)->name('dashboard');
        Route::get('/users/list', [UserSelectionController::class, 'getUsers'])->name('users.index');

        Route::prefix('page-management')
            ->as('pm.')
            ->group(function () {
                // Home Page Hero Section
                Route::get('hero-section', [HomePageController::class, 'editHeroSection'])->name('hero-section');
                Route::put('hero-section', [HomePageController::class, 'updateHeroSection'])->name('hero-section.update');
            });

    });
});
