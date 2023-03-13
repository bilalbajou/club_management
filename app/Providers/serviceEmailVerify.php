<?php

namespace App\Providers;

use App\Service\emailVerify;
use Illuminate\Support\ServiceProvider;

class serviceEmailVerify extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(emailVerify::class, function ($app) {
            return new emailVerify(env('KEY_EMAIL_VERIFY'),env('HOST_EMAIL_VERIFY'));
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
          
    }
}
