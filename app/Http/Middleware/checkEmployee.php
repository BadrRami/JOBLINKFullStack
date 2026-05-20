<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class checkEmployee
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && auth()->user()->role !== 'employee') {
            return redirect()->route('/login')->with('error', 'Vous devez être un employé pour accéder à cette page.');
        }
        return $next($request);
    }
}
