<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
    // Middlewares globaux (pour toutes les requêtes web)
    $middleware->web(append: [
        \App\Http\Middleware\HandleInertiaRequests::class,
        \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
    ]);

    // Aliases (pour utiliser sur des routes spécifiques)
    $middleware->alias([
        'checkAdminMember' => \App\Http\Middleware\CheckAdminMember::class,
        'checkRecruteur'   => \App\Http\Middleware\CheckRecruteur::class,
        'checkEmployee'    => \App\Http\Middleware\CheckEmployee::class,
    ]);
})

        //
    
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
