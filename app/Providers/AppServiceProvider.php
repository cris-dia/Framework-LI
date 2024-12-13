<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
        // Înregistrează serviciul 'cache'

    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Înregistrează rutele API
        Route::prefix('api')
            ->middleware('api')
            ->group(base_path('routes/api.php'));

        // Înregistrează rutele web
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }
}
